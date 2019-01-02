import React, {Component} from 'react';
import Title from './Title';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto'

const initPosts = [{
    id: "0",
    description: "beautiful landscape",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "Aliens???",
    imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
    "08323785_735653395_n.jpg"
    }, {
    id: "2",
    description: "On a vacation!",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}];

const getPosts = () => {
    return initPosts;
}

//simulation of a database fetch
const fetchPosts = () => new Promise(
    (resolve) => setTimeout(() => { resolve(initPosts);}, 500)
);


export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            screen: 'loading'
        };

        this.removePost = this.removePost.bind(this);
        this.gotoAddPhotoPage = this.gotoAddPhotoPage.bind(this);
    }

    async componentDidMount() {
        const data = await fetchPosts();
        //const data = getPosts();
        this.setState({
            posts: data,
            screen: 'show'
        });
    }

    removePost(postRemoved) {
        this.setState(
            state => ({ //<- we need parentheses to tell this is an object literal, not a block
                posts: state.posts.filter(post => post !== postRemoved)
            })
        );
    }

    gotoAddPhotoPage() {
        this.setState({
            screen: 'add'
        });
    }

    render() {
        
        return (
            <> 
                {
                    this.state.screen === 'loading' &&
                    <img src="../img/spinner.gif" alt="spinner" className='center' />
                }

                {
                    this.state.screen ==='show' &&
                    <>
                        <Title title="Photowall"/>
                        <Photowall posts= {this.state.posts} 
                            onClickAddButton = {this.gotoAddPhotoPage}
                            onRemovePost={this.removePost}
                        />
                    </>
                }

                {
                    this.state.screen ==='add' &&
                    <>
                        <AddPhoto/>
                    </>
                }
            </>
        );
    }    
}