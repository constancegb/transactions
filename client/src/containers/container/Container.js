import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};


class Container extends React.Component {

  render() {
    return (
      <div>Hello</div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);
