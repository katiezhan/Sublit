import React from 'react';
import ReactDOM from 'react-dom';
import SublitApp from './containers/SublitApp'

class Sublit extends React.Component {
  render() {
    return(
      <SublitApp />
    );
  }
}

ReactDOM.render(<Sublit />, document.getElementById('app'));
