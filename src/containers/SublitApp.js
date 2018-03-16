import React from 'react';
import GoogleMapComponent from '../components/GoogleMapComponent';
import SideBarComponent from '../components/SidebarComponent'
export default class SublitApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div style={{width:this.state.width, height:this.state.height}} id='mapContainer'>
        <SideBarComponent />
        <GoogleMapComponent />
      </div>
    );
  }

}
