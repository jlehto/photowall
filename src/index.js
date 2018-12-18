
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'

const dances = ['do the mashed potato', 'do the twist']
const todos = ['do something', 'do something else', 'do something different'];

ReactDOM.render(<Main tasks1={dances} tasks2={todos}/>, document.getElementById('root'));