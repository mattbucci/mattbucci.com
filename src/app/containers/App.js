import { connect } from 'react-redux';
import Loading from '../components/loading'

class App extends React.Component {
    render() {
        return <h1> Hello World {Loading} </h1>;
    }
}
const mapStateToProps = ({App}, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
