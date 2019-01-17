import React, { Component } from 'react';

class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
        console.log(this.props)
        evt.preventDefault();
        const link = evt.target.elements.link.value;
        const description = evt.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: link
        }

        if (link && description) {
            this.props.addPost(post);
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <>
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="link" name="link" />
                    <input type="text" placeholder="description" name="description" />
                    <button>Post</button>
                </form>
            </div>
            </>
        );
    }
}

export default AddPhoto