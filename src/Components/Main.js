import React, {Component} from 'react';
import Title from './Title';
import List from './List';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Title title="Things To DO"/>
                <List tasks={this.props.tasks1}/>
                <List tasks={this.props.tasks2}/>
            </div>
        );
    }    
}