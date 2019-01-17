import Main from './Main'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
//import * as actions from '../redux/actions'
import { removePost, addPost } from '../redux/actions'
//import { bindActionCreators } from 'redux'

//a pure function that returns an object with single key 'posts'
const mapStateToProps = state => ({
    posts: state
});


/*
//Won't work!
const mapDispatchToProps = {
    actions
}
*/

/*
//Will work!
const mapDispatchToProps = dispatch =>
    bindActionCreators(actions,dispatch)
*/

const mapDispatchToProps = {
    removePost,
    addPost
}


//connect returns a HOC that has Main component as its argument
//This HOC provides state + actions as props to Main.
// We can think of it as container for <Main>( a representational component)
const container = connect(mapStateToProps, mapDispatchToProps)(Main)

//"withRouter will pass updated match, location, and history props to the wrapped component whenever it renders"
const App = withRouter(container)

export default App