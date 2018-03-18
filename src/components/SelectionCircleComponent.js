import React from 'react';

export default class SelectionCircleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width:'10px', height:'10px', borderRadius:'50%', backgroundColor:'red'}}>

      </div>
    );
  }
}
