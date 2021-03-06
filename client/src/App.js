import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';

import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="height100">
            <Main />
          </div>
        </HashRouter>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};


export default connect()(App);
