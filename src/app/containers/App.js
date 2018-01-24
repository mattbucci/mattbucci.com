import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router'

import Header from '../header';
import Footer from '../footer';

import Blog from './Blog';

import './app.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="main">
                    <Route path="blog" component={Blog}/>
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
