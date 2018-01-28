import { connect } from 'react-redux';
import React from 'react';
import { Route } from 'react-router'

import Header from './components/header';
import Footer from './components/footer';

import Blog from './Blog';
import Projects from './Projects';
import About from './About';

import './app.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <Header currentPath={this.props.currentPath}></Header>
                <div className="main">
                    <Route exact path="/" component={Blog}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/about" component={About}/>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = ({App}, ownProps) => {
    return {
        currentPath: ownProps.location.pathname,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
