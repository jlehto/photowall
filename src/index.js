
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const dances = ['do the mashed potato', 'do the twist']
const todos = ['do something', 'do something else', 'do something different'];

class Title extends Component {
    render() {
        return (
            <h1> {this.props.title} </h1>
        );
    }    
}

class List extends Component {
    render() {
        return (
        <div>
            <ol>
                { this.props.tasks.map((item, index) => <li key={index}> {item} </li>) }
            </ol>
        </div>
        );
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Title title="Things To DO"/>
                <List tasks={dances}/>
                <List tasks={todos}/>
            </div>
        );
    }    
}

ReactDOM.render(<Main/>, document.getElementById('root'));