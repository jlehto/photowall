import React from 'react';
import ReactDOM from 'react-dom';

const items = ['do something', 'do something else', 'do something different'];
const element = React.createElement('ol', null, 
    items.map((item, index) => React.createElement('li', {key : index}, item))
);

ReactDOM.render(element, document.getElementById('root'));