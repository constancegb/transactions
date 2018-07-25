import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../containers/container/Container';
import NoMatch from './NoMatch';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Switch>
          <Route exact path="/" component={Container} />
          <Route exact path="/container" component={Container} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Main;
