import React, {Component} from 'react';

export default class List extends Component {
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
