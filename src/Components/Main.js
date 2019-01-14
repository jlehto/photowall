import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
//import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'

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
    
    render() {

        return (
            <>
            <Route exact path='/' render={() => (
                <>
                <Title title="Photowall" />
               <Photowall posts={this.props.posts}/>
               
                </>
            )} />

            {/*
            <Route path='/AddPhoto' render={({ history }) => (
                <AddPhoto onAddPhoto={(post) => {
                    this.addPost(post);
                    history.push('/');
                }} />
            )} />
            */}
            </>
        );
    }
}