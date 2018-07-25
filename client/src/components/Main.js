import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div id="main">

        <div id='menu'>
          <div id='menu-header'><h1>FINPAL</h1></div>
          <div className='menu-groups'>
            <div className='menu-item'><p>Overview</p></div>
            <div className='menu-item'><p>Transactions</p></div>
          </div>

          <div className='menu-groups'>
            <div className='menu-item'><p>Transfers</p></div>
            <div className='menu-item'><p>Invoices</p></div>
          </div>

          <div className='menu-groups'>
            <div className='menu-item'><p>Manage Cards</p></div>
            <div className='menu-item'><p>Manage accounts</p></div>
          </div>

          <div className='menu-groups'>
            <div className='menu-item'><p>Team</p></div>
            <div className='menu-item'><p>Integration</p></div>
            <div className='menu-item'><p>Settings</p></div>
          </div>

          <div id='upgrade-button'><button>UPGRADE</button></div>
        </div>

        <div id='header'></div>

        <Switch>
          <Route exact path="/transactions" component={ NoMatch } />
        </Switch>

      </div>
    );
  }
}

export default Main;
