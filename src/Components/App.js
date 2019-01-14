import Main from './Main'
import { connect } from 'react-redux'

//a pure function that returns an object with single key 'posts'
const mapStateToProps = state => {
    return {
        posts : state
    }
}

//connect returns a HOC that has Main component as its argument
//This HOC, App provides state as props to Main.
// We can think of App as container for "connected Main"
const App = connect(mapStateToProps)(Main)

export default App