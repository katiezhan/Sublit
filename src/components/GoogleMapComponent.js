import React from 'react';
import GoogleMapReact from 'google-map-react';
import SelectionCircleComponent from './SelectionCircleComponent';

export default class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.initialize_map = {
      center: { lat: 43.47, lng: -80.54 },
      zoom: 16,
    };
    this.state = {
      center: { lat: 43.47, lng: -80.54 },
    };
  }

  handleClick = (e) => {
    this.setState({
      center: {
        lat: e.lat,
        lng: e.lng,
      }
    });
    console.log (e.lat + " " + e.lng);
  }
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys= {{ key: ['AIzaSyC6htCERSTO1fDjkBM8MdvQk3uw2hY_l0k'] }}
        defaultCenter= { this.initialize_map.center }
        defaultZoom= {this.initialize_map.zoom }
        onClick={this.handleClick}
      >
        <SelectionCircleComponent
          lat={ this.state.center.lat }
          lng={ this.state.center.lng }
        />
      </GoogleMapReact>
    );
  }
}
