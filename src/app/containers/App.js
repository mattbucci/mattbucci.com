import { connect } from 'react-redux';
import React from 'react';
import Header from '../header';
import Footer from '../footer';

import './app.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="main">
                    {this.props.children}
                </div>
                <Footer></Footer>
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
