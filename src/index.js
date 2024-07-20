import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ./Appは.jsのコンポーネントファイル　そこからApp関数をとってきて、それはHTML要素をリターンするからそれをレンダリングしている。

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
