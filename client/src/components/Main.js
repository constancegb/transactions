import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Transactions from './Transactions/Transactions';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div id="main">

        <div id='menu'>
          <div id='menu-header'><p>FINPAL</p></div>
          <div className='menu-groups'>
            <div className='menu-item'><p>Overview</p></div>
            <div className='menu-item'><Link to='/transactions'><p>Transactions</p></Link></div>
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

          <div id='upgrade-button'><button>UPGRADE ACCOUNT</button></div>
        </div>

        <div id='header'></div>

        <Switch>
          <Route exact path="/transactions" component={ Transactions } />
        </Switch>

      </div>
    );
  }
}

export default Main;
