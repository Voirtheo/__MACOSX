import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';


const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
const render = () => {
  ReactDOM.render(<Root />, document.getElementById('root'))
}

render()