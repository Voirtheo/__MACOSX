import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))
//检测redux中的状态改变，redux若变则重新渲染
store.subscribe(() => {
  ReactDOM.render(<App/>,document.getElementById('root'))
})


