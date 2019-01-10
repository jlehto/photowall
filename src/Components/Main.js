import React, { Component } from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'

//sample imageLink
//http://tokyotelephone.com/wp-content/uploads/2011/09/js1.jpg

const initPosts = [{
    id: 0,
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
}, {
    id: 1,
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
}, {
    id: 2,
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}];

/*
const getPosts = () => {
    return initPosts;
}
*/

//simulation of a database fetch
const fetchPosts = () => new Promise(
    (resolve) => setTimeout(() => { resolve(initPosts); }, 500)
);


export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true
        };

        this.removePost = this.removePost.bind(this);
    }

    async componentDidMount() {
        const data = await fetchPosts();
        //const data = getPosts();
        this.setState({
            posts: data,
            loading: false
        });
    }

    removePost(postRemoved) {
        this.setState(
            state => ({ //<- we need parentheses to tell this is an object literal, not a block
                posts: state.posts.filter(post => post !== postRemoved)
            })
        );
    }

    addPost(postAdded) {
        this.setState(
            state => ({
                posts: state.posts.concat([postAdded])
            })
        );
        console.log(this.state.posts)
    }

    render() {

        if (this.state.loading) {
            return (
                <img src="../img/spinner.gif" alt="spinner" className='center' />
            )
        }

        return (
            <>
            <Route exact path='/' render={() => (
                <>
                <Title title="Photowall" />
                <Photowall posts={this.state.posts}
                    onRemovePost={this.removePost}
                />
                </>
            )} />


            <Route path='/AddPhoto' render={({ history }) => (
                <AddPhoto onAddPhoto={(post) => {
                    this.addPost(post);
                    history.push('/');
                }} />
            )} />

            </>
        );
    }
}