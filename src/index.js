import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/ReduxStore"



 let rerenderEntireTree = (state) => {
     ReactDOM.render(

         <React.StrictMode>
             <BrowserRouter>
                 <Provider store={store} >
                     <App  />
                 </Provider>
             </BrowserRouter>
         </React.StrictMode>,
         document.getElementById('root')
     );
 };

rerenderEntireTree(store.getState());

/*store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
