
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './redux/reducer'
// eslint-disable-next-line 
const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <BrowserRouter><Main/></BrowserRouter>, document.getElementById('root')
);