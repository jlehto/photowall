import React from 'react';
import ReactDOM from 'react-dom';

const items = ['do something', 'do something else', 'do something different'];
const List = 
    <div>
        <ol>
            { items.map((item, index) => <li key={index}> {item} </li>) }
        </ol>
    </div>

ReactDOM.render(List, document.getElementById('root'));