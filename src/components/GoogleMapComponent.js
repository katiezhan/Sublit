import React from 'react';
import GoogleMap from 'google-map-react';
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

  /*handleClick = (e) => {
    this.setState({
      center: {
        lat: e.lat,
        lng: e.lng,
      }
    });
    console.log (e.lat + " " + e.lng);
  }*/

  handleGoogleMapApi(google) {
    const map = google.map
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.CIRCLE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.CIRCLE,
        ]
      },
      circleOptions: {
          fillColor: `#7b0202`,
          fillOpacity: 0.2,
          strokeWeight: 0.1,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
    });
    drawingManager.setMap(map);
  }

  render() {
    return (
      <GoogleMap
        bootstrapURLKeys= {{ key: ['AIzaSyC6htCERSTO1fDjkBM8MdvQk3uw2hY_l0k'],
                             libraries: ['drawing'].join(',') }}
        defaultCenter= { this.initialize_map.center }
        defaultZoom= {this.initialize_map.zoom }
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={this.handleGoogleMapApi.bind(this)}
        onClick={this.handleClick}
      >
        {/* <SelectionCircleComponent
          lat={ this.state.center.lat }
          lng={ this.state.center.lng }
        /> */}
      </GoogleMap>
    );
  }
}
