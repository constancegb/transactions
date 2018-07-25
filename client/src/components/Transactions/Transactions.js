import React from 'react';
import { Switch, Route } from 'react-router-dom';
import request from 'superagent';
import './Transactions.css';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionsData: []
    }
  }

  /*
  * I would have normally done the API request in the server directory
  * For the exercice's sake, I will do it here
  */
  componentDidMount() {
    return new Promise((resolve, reject) => {
      request
        .get('https://private-3f9656-paymiuminterviews.apiary-mock.com/transactions')
        .then((res) => {
          this.setState({ transactionsData: res.body });
        })
        .catch(err => reject(err));
    });
  }

  render() {
    return (
      <div id="transactions-component">
        <h1>HOOOO</h1>
      </div>
    );
  }
}

export default Transactions;
