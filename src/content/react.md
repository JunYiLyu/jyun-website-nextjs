# Nextjs 中文doc 介紹 React 部分

# 在沒有 react 前如何透過JS在 div 加入一個 h1

```html
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

若引入 React

```html
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```

# element, props, state

### element

![0](https://drive.google.com/thumbnail?sz=w900&id=1Hr2gXSFxiygYtcjE4eOKjL-jzu6n5OYi)

### props

![1](https://drive.google.com/thumbnail?sz=w900&id=1t9okDFgyBMOKLzh3tSLlOrE29A9LiPhA)

![2](https://drive.google.com/thumbnail?sz=w900&id=1GPQmd4Kd7h4L0B2njnYaDvUHDBBrJE0S)

![3](https://drive.google.com/thumbnail?sz=w900&id=1O9fCwttwH8BwZuWbj9AY9XDOB1s-gd53)

### State

![4](https://drive.google.com/thumbnail?sz=w900&id=1mU46ckAC35AeIy27_S5mAKWk8NwlS1JA)

# Lib 介紹

react: 核心庫，像是 `React.createElement`、`useState`、`useEffect` ，與平台無關的，渲染到網頁用 react-dom、用在跨平台react-native

react-dom : 將react 元件渲染到 dom樹 上面，`ReactDOM.render`、`ReactDOM.createPortal`  等等，react-dom是專門為web 平台設計