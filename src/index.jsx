import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from 'App';
import style from '../style/style.scss'


// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';


// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);



const render = (App) =>{
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>
    ,document.getElementById('app')
  );
}

render(App);


if (module.hot) {
  module.hot.accept('./components/App.jsx', ()=>{
    const NextApp = require('./components/App.jsx').default;
    render(NextApp);
  })
}