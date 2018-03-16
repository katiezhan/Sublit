import React from 'react';

export default class SidebarComponent extends React.Component {
  render() {
    return (
      <div id="sideBarContainer">
        <button> filters </button>
        <button> advertise </button>
        <button> mail </button>
      </div>
    );
  }
}
