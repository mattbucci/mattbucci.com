import { connect } from 'react-redux';
import React from 'react';
import NavBar from '../navbar';
import Footer from '../footer';


class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                {/*<Footer></Footer>*/}
            </div>
        );
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
