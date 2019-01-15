import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
//import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom';


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
        return (
            <>
            <Route exact path='/' render={() => (
                <>
                <Title title="Photowall" />
                {/*pass all the props at one go using spread*/}
               <Photowall { ...this.props}/>
               
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