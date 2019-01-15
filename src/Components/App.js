import Main from './Main'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux' //not really necessary!
import { removePost } from '../redux/actions'

//a pure function that returns an object with single key 'posts'
const mapStateToProps = state => ({
        posts : state
});

const mapDispatchToProps = {
    removePost
}

//connect returns a HOC that has Main component as its argument
//This HOC, App provides state as props to Main.
// We can think of App as container for <Main>, a representational component
const App = connect(mapStateToProps,mapDispatchToProps)(Main)

export default App