# Docker

# Docker Architecutre

![image.png](https://drive.google.com/thumbnail?sz=w900&id=1lqjaLEBmjnNac5E3_Lm4d5lCsAQ7ehib)

1. **Docker Daemon**: Docker 常駐程式(`dockerd`)，監聽docker API，管理 docker 物件: image, container, network, volume…
2. **Docker Client**: 透過 API 發送指令給 docker Daemon
3. **Docker Desktop**: 包含Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, Credential Helper
4. **Docker Registry**: 存放 docker image 的地方，官方公開的 Registry  為 Docker Hub，可透過 docker pull. docker push 指令操作 image (registry 預設為 docker hub)
5. **Docker Object**:
    1. **Docker Image**:
        - Docker Image 是一個只讀的模板，包含了運行應用程序所需的所有內容，包括代碼、運行時、庫、環境變量和配置文件。
        - Image 可以被用來創建多個容器。
    2. **Docker Container**:
        - Docker Container 是 Image 的運行實例。它是可寫的，可以在運行時進行修改。
        - Container 是動態的，可以啟動、停止、移動和刪除。

# Container

1. 容器 VS VM
    1. VM: 是擁有作業系統 kernel (管理CPU memory IO…) ，用於執行隔離APP代價太高
    2. Container: 僅是單一的 process 運行在同一個 kernel 
    3. 比較:
        1. VM：完整模擬**物理機**，適合運行多**操作系統**和高隔離需求
        2. Docker：輕量且快速，適合**微服務**和現代化**應用**的開發與部署
2. `docker run` (由 image 創建容器),
 `docker ps` 列出目前的容器,`docker start`, `docker stop`

### Persisting container data

 `docker volume create log-data`  創建 volume 於 local， `docker run -d -p 80:80 -v **log-data:/logs** docker/welcome-to-docker` ，將 image log mount 到 log-data

# Image

1. 是不可變動的，你只能刪掉或是疊加層上去
2. Container Images 是由多層組合(Dockerfile)，代表文件系統變化的過程，例如 add delete file, 安裝軟體…

### Image Layers

每一層表示文件系統的變化，可用 cmd or dockerfile:

1. Dockerfile (每一個指令都代表一層)
    
    ```docker
    # 使用基礎映像
    FROM ubuntu:20.04
    
    # 作者信息
    LABEL maintainer="your-email@example.com"
    LABEL description="This is a sample Dockerfile showcasing all commands"
    
    # 設置構建過程中的變數（ARG 在構建時可改變，ENV 是容器運行時的環境變數）
    ARG DEBIAN_FRONTEND=noninteractive
    
    # 設置環境變數（環境變數會在容器內生效）
    ENV APP_HOME=/usr/src/app
    ENV PYTHONUNBUFFERED=1
    
    # 創建工作目錄並設置為當前工作目錄
    WORKDIR $APP_HOME
    
    # 複製當前目錄的內容到容器內的工作目錄
    COPY . $APP_HOME
    
    # 添加外部壓縮文件或遠程URL
    ADD https://example.com/somefile.tar.gz /tmp/
    
    # 解壓壓縮文件
    RUN tar -xzf /tmp/somefile.tar.gz -C /usr/src/
    
    # 執行安裝和其他設置命令
    RUN apt-get update && \
        apt-get install -y python3 python3-pip && \
        pip3 install -r requirements.txt && \
        rm -rf /var/lib/apt/lists/*
    
    # 暴露應用端口
    EXPOSE 8080
    
    # 設置數據卷，以便持久化存儲
    VOLUME [ "/data" ]
    
    # 使用非 root 用戶執行容器，提高安全性
    RUN useradd -ms /bin/bash appuser
    USER appuser
    
    # 定義健康檢查，檢測應用是否正常運行
    HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
        CMD curl -f http://localhost:8080/health || exit 1
    
    # 設置容器啟動時的命令
    CMD ["python3", "app.py"]
    ```
    
2. docker cmd 範例: docker run xxx  -ti(可進入容器環境)⇒ …..operation…. ⇒ docker commit 

### Publish

1. 創建 dockerfile

```docker
# 使用官方的 Node.js 基礎映像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 package.json 並安裝依賴
COPY package.json /app/
RUN npm install

# 複製應用程序的源代碼
COPY . /app

# 開放應用的端口
EXPOSE 3000

# 啟動應用
CMD ["npm", "start"]
```

1. docker build -t mynodeapp:1.0 . (`.` 代表dockerfile 所在位置)
2. docker run -p 3000:3000 mynodeapp:1.0 (測試)
3. docker push my-username/my-image

### Cache

使用 docker build 時會依照 dockerfile 指令去執行，會根據上一次的 build 的快取加速下一次的 build 時間，有些層的順續會影響 cache  優化效率

`.dockerignore` :忽略某些檔案不要包進 image， 例如: node_modules，因為 RUN npm install 就會根據 package.json產生

### Multi-stage Build

編譯環境打包(compile, packaging)跟執行環境 (runtime)所需要的 From 不同時，可以用 as 將拆成多個階段，例如: 編譯時需要JDK環境(通常肥大)，而運行時只需要 JRE 環境，因此最後只需要 JRE環境跟 編譯好的JAR檔，JDK不會被包進image

```docker
FROM eclipse-temurin:21.0.2_13-jdk-jammy AS builder
WORKDIR /opt/app
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY ./src ./src
RUN ./mvnw clean install

FROM eclipse-temurin:21.0.2_13-jre-jammy AS final
WORKDIR /opt/app
EXPOSE 8080
COPY --from=builder /opt/app/target/*.jar /opt/app/*.jar
ENTRYPOINT ["java", "-jar", "/opt/app/*.jar"]
```

# Docker Compose

![image.png](https://drive.google.com/thumbnail?sz=w900&id=1i5kzEd-gnFb_NsjnuFYHyvUkarzA_93r)

1. 最佳實踐是一個容器執行一個服務
2. 可以使用 docker run (+很多參數) 去啟用個別 container，也可以撰寫 compose.yaml 去執行多個 conatiners、以及容器之間的網路溝通 port、持久化數據 volume，寫在一個 yaml 檔案裡
3. port vs expose
    1. port: host 跟 container 的連結，例如：8080:80  `HOST_PORT:CONTAINER_PORT` 
    2. expose:是 container 暴露給另一個 container
4. Dockerfile vs Compose:
    1. Dockerfile: 建立單一個 container image 的文件，範例圖:  Dockerfile 可以去參照打包 src，創建出執行 APP 的 image
    2. compose.yaml: 定義 管理或是運行多個containers ，時常會去參照到 dockerfile，例如：compose 有 db, app, redis…，其中 app參照到 Dockerfile 的 image
5. `docker compose up`：image 若不存在會自動 pull 並運行起來

# Ref.

https://github.com/twtrubiks/docker-tutorial

https://docs.docker.com/get-started/introduction/