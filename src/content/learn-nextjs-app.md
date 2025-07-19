  ![0](https://drive.google.com/thumbnail?sz=w900&id=1hSEsgNaGYViYG25oDGMdojmwC5TPDrI6)


# Next.js App Router

# Rendering

將你寫的 react code 轉換成 html 顯示在 UI 上的過程分為:

1. ***Client Side Render***: 傳入空的html ，透過 bundel後的js 將頁面加載
    1. 優點:頁面加入比較快(不用等server render) ，切換頁面會比SSR流暢
    2. 缺點:第一次加載比較慢，要等 bundle js 下載完開始渲染，而SEO也較差
    
    ![1](https://drive.google.com/thumbnail?sz=w900&id=1fCRDyueaQwXq2cfgj4dzmuL7GpS8YDEa)
    
2. ***Server Side Rendering***: 對於client 請求，server 都會回傳 render 完的 HTML
    1. 優點:  使用者可以馬上跟網頁互動(不用像 CSR 要等 bundle js 加載)，
    SEO佳，若頁面有要打API在Server 跑會比 Client 跑還要快
    2. 缺點: Server Loading 重，切換頁面較不流暢(需要等待render?? 但也不一定有些是 static)，
    無支援 window, storage api..
    
    ![2](https://drive.google.com/thumbnail?sz=w900&id=1ZyYpXyWbibpyoek03Jtj2BBY5bXlvT3v)
    
3. ***Static Side Generation***: 在server build時候就產生出 HTML
    1. 優點: 快，對 serve loading 小
    2. 缺點: 很難支援動態內容
4.  ***Incremental Static Regneration***: 部分頁面由SSG產生，但 request 找不到對應靜態頁面，會透過SSR 產生，並快取起來。也可透過 revalidate  定期去更新 SSR 快取出來的頁面

如何判斷頁面為 SSR CSR:

1. 發現 <body> 只有 <div id=root>
2. browser 禁用 JS

# Create Project

1. Server Components 目前並不支援 CSS-in-JS，可以考慮使用 styled-component
2. 透過 `tsconfig.json` 中的 `compilerOptions` 去修改 import 時的 alias
    
    ```jsx
    *// before*
    
    import { Button } from '@/components/button'
    
    *// after*
    
    import { Button } from '@/button';
    ```
    

# 專案架構

### /public

### /(src)/app

![3](https://drive.google.com/thumbnail?sz=w900&id=1VSQGnYJGrxWcMfcKRk-rklMili4z8Vd_)

![4](https://drive.google.com/thumbnail?sz=w900&id=1zoYYV5TdMyALoVxOUgvCToCTNy5ObTVF)

1. 若該資料夾沒有 `page.tsx` 就不會被當成 router segment，就可以開/components、/utils 放一些共用元件
2. `layout.tsx` `template.tsx` ，可以共用讓子segment 共用元件，`layout.tsx` 在頁面切換***不會***重新渲染，而 `template.tsx` 會重新渲染。只有**root layout**可以包含， html  body tag
3. `useSelectedLayoutSegment()` 可以抓到這個 元件/layout  現在在哪個 segment (同一層會回傳 null，最多只能回傳到**下一層**的 segment)

### /xxx.config

# **Turbopack**

vercel 新開發出來的打包工具(Rust 寫的)，目前僅能用在 nextjs，速度在大規模的component 上快很多

# Page Router

![5](https://drive.google.com/thumbnail?sz=w900&id=1VCofqQlD3SFTCwG1TKv-pXNOPZQCbWQ2)

# App Router

![6](https://drive.google.com/thumbnail?sz=w900&id=1q5t_GS_6uCysa2EvcVHJOPfBoX1Dr2-M)

`page.tsx` 使用來定義 UI 的檔案

`layout.tsx`:

1. root laytout : 於 app 下的 layout 會影響後續子資料夾內的regular layout
2. regular layout 

![7](https://drive.google.com/thumbnail?sz=w900&id=1oODD6eiLkWX9yQ4ZKaZYdfK_1ib_-SR1)

![8](https://drive.google.com/thumbnail?sz=w900&id=1A1_cS6TzEbw3hANN-qU_-g_DeiQLG9AG)

---

# Server Component

![9](https://drive.google.com/thumbnail?sz=w900&id=15MuOn-ZnhSdlf6Ava9ItSFc2z-b9Ppfb)

- Next App Router 預設為 Server Component ，使用 `'use client'` 可轉換為 Client Component
- Server / Client Component，中的 Server/Client 指的是 React Server 跟 React Client ，並不是指實體的
- import 'server-only' 可以讓一些模組，例如機密性的模組，只能運行在 Server Component
- Data Fetching 可以在server 做 減少 client 負擔
- 安全性考量，將敏感資料 api key. tokens 保留在 server ( 因為從server render 去打 api ?
- 可以快取

# Client Component

1. Client Component 才能用 React Hook
2. Client Component: 可以在 CSR 或 SSR
3. 只要定義出 ‘use client’ 後他的子元建，就會是 client component
4. import 'client-only' 可以讓一些模組只能運行在 Client Component
5. Client Component  盡量是最小單位的 leaf component，例如 context provider 也要建立一個 tsx 標示為 `'use client'` ，在Root 的 Server Component 再 import 近來
6. 並不代表只會在 browser 運行，它會在 server 進行部分的初始 render ，要互動的才會在 browser 上運行

# Suspense

![10](https://drive.google.com/thumbnail?sz=w900&id=1h6iLWAobjsYZRNIFT1YmC08l5gwelKjv)

# Error Boundaries

# 動態路由

![12](https://drive.google.com/thumbnail?sz=w900&id=1a4GFC0k9TXNrtAarEIti7i5NGnj1EV_i)

找不到 [id] 還可以有default page

![13](https://drive.google.com/thumbnail?sz=w900&id=12maUJjtUkoL6BW92NEIcDqxTKKBhx6dy)

# Link useRouter

### `<Link>` 是一個元件，

1. 屬性:
    - replace: true，下一個導入的頁面不會有紀錄
    - scroll: true ，換頁時會滾到最上 (上一頁/下一頁)
    - prefetch: true，同時先下載相關頁面
2. Prefetch  頁面會存在快取
3. e.preventDefault() 會導致 link 失效

### `useRouter`: 比較像是不用透過使用者互動，直接在程式碼控制

```jsx
const router = useRouter();
....

router.push('/');

router.replace() // 不要有紀錄
roouter.prefetch() 

router.back() // 上一頁
router.forward() // 下一頁
```

官方說能用 <Link> 就用 不能用在用 useRouter

# Route Groups

`(xxxx)` : 作為實體檔案分類，但卻不會被判定為路由

**Root Layout**

可以在app 層建立 `(xxxx)` 底下的segment，就不會吃到  app 的 layout 了

![14](https://drive.google.com/thumbnail?sz=w900&id=1AcHtQdJwPj0EAfwK3g91j6wj-Q5rLguy)

# Parallel Routies

folder 命名為 `@xxxx` 可以在 page 中的 props 載入該頁面，包含他的 error loading

![15](https://drive.google.com/thumbnail?sz=w900&id=1z7PbDkgyzKEyV9lNKF--Y0hB6sR57IXD)

# **Intercepting Routes**

在目前頁面跳出 類似 modal 的頁面

命名方式

![16](https://drive.google.com/thumbnail?sz=w900&id=134E65681GxmxCPgS_yTXPhKwBE3ZWjbm)

# Router Handler

建立 `routs.js`

提供了 GET、POST、PUT、PATCH、DELETE、HEAD、OPTIONS 方法

# Server Action(可能不要用在 prod)

?? 

1. 為何要 ‘use server’
2. server action ，必須是 export async functions
3. 為何 cookie 可以用在 use server

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#cookies

呼叫完 action，可用 revalidatePath 清除快取重新讀取渲染頁面

Form Actio

```jsx
export default function ToDo() {
  const addTasks = async () => {
    'use server';
    ...
  };

  const onSubmit = async () => {
    'use server';
    ...
  };
  return (
    <form action={onSubmit}>
      <button formAction={addTask}>Add a Task</button>  // 呼叫額外的 server action
      <button type='submit'>Submit</button> // 觸發 onSubmit
    </form>
  );
}

```

# next/image

1. 將圖檔轉成 webp/avif，更小的檔案但品質還不錯
    
    ```jsx
    //local image
    const nextConfig = {
      images: {
        formats: ['image/avif', 'image/webp'],
      },
    };
    
    module.exports = nextConfig;
    
    ```
    
2. 避免 loading shift: 圖檔讀取完後，擠壓到其他元件
3. 預設 lazy loading

### 好用屬性

`placeholder='blur’`，載入完成前先顯示

`<img>` 並非 (`<Image>`) 加上`loading="lazy"`，viewport 靠近才會載入

### remote

```jsx

// remote
 const nextConfig = {
   images: {
     remotePatterns: [{
       protocol: 'https',
       hostname: 's3.amazonaws.com',
       port: '',
       pathname: '/my-bucket/**',
     }],
   },
 };

 module.exports = nextConfig;
```

不知道圖片尺寸，可以先用 div 開一個確定的長寬，再包裹 Image ，避免 loading shift

```jsx
  {/* 父層必須是 position relative */}
  <div className='w-[500px] h-[500px] relative'>
    <Image
      src='...'
      alt='hero image'
      fill
    />
  </div>
```

# Code Splitting 效能優化

將bundle 拆成小一點的過程，可以觀察 `/.next/static/chunks/app` 打包完的資料大小

1. React.lazy(): 使用到 某一個元件時才去下載
2. next/dynamic: 跟 React.lazy很相似，
    1. 但整合了 suspense 可以傳入 loading 參數
    2. 可以指定 ssr:false ，變成 csr 
3. next/script: 等到進入該特定頁面，才會去下載第三方的 lib

# Data Cache/ Request Memoization

- Data Cache：減少向 data source 索取相同資料的次數
- Request Memoization：避免重複處理相同 requests

### Data Cache

用意減少向 Data Source 要資料(並非 rendering 階段)

解除 Data Cache 方法:

1. 每次清除快取
    
    <!-- ![17]() -->
    
2. 定時清除快取
    
    <!-- ![Untitled](Next%20js%20App%20Router%20b72581d1a70f446c8b5b1fc1db115ee8/Untitled%2016.png)-->
    
    ![19](https://drive.google.com/thumbnail?sz=w900&id=1NdRjZn4i22SJydMnEIuTpce1BGbowTkp) 
    

### Request Memoization

<!-- ![20]() -->

將 Fetch 回來的資料 放在記憶體，若有其他 component 也打了一樣 API，實際上不會送request 而是去記憶體拿 (在server  rendering 階段)

禁用 request memoization

<!-- ![Untitled](Next%20js%20App%20Router%20b72581d1a70f446c8b5b1fc1db115ee8/Untitled%2019.png) -->

# Full Route Cache

使用<Link>，假設 A B C 三頁面都有各打API去取得隨機動態資料，但使用 <Link>在這三個頁面輪替，資料並沒有改變，因為next 對於 segment 靜態頁面(**Server 在 build 時就產生出來**)的快取，如果是每次打 request 動態渲染就不會

![22](https://drive.google.com/thumbnail?sz=w900&id=1vbLv7jeWnbcN5poYAQ_OM7l3ntWqwgEc)

# Ref.
https://ithelp.ithome.com.tw/users/20161853/ironman/6122