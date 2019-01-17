import React, { Component } from 'react';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom';



//sample imageLink
//http://tokyotelephone.com/wp-content/uploads/2011/09/js1.jpg

/*
const getPosts = () => {
    return initPosts;
}

//simulation of a database fetch
const fetchPosts = () => new Promise(
    (resolve) => setTimeout(() => { resolve(initPosts); }, 500)
);

*/
export default class Main extends Component {

    /*
    constructor() {
        super();
    }
    */

    componentDidMount() {
        // this.props.dispatch(removePost(1))
    }

    render() {
        console.log(this.props.AddPhoto)
        return (
            <>
            <h1>
                <Link to='/'>Photowall</Link>
            </h1>
            <Route exact path='/' render={() => (
                <>

                {/*pass all the props at one go using spread*/}
                <Photowall { ...this.props} />

                </>
            )} />

            {
                <Route path='/AddPhoto' render={({ history }) => (
                    <AddPhoto {...this.props} />
                )} />
            }
            </>
        );
    }
}