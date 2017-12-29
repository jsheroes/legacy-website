import GoogleMapReact from 'google-map-react';

import MapPin from './google.map.pin';
import { ConferenceMapApiKey, mediaQueries } from '../../constants';

const GoogleMap = () => (
  <div>
    <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      bootstrapURLKeys={{ key: ConferenceMapApiKey }}
      options={createMapOptions}
    >
      <MapPin lat={46.752870} lng={23.605845} />
    </GoogleMapReact>

    <style jsx>{`
      div {
        position: relative;
        width: 100%;
        height: 666px;
        overflow: hidden;
      }
      
      @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
        div {
          height: 596px;
        }
      }

      @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
        div {
          height: 494px;
        }
      }

      @media only screen and (max-width: ${mediaQueries.S}) {
        div {
          height: 310px;
        }
      }
    `}</style>
  </div>
);

GoogleMap.defaultProps = {
  center: { lat: 46.752870, lng: 23.605845 },
  zoom: 16,
  zoomControl: true,
  panControl: false,
  streetViewControl: false,
  mapTypeControl: true,
  overviewMapControl: false,
  clickable: true,
};

export default GoogleMap;

function createMapOptions(maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.TOP_LEFT,
      style: maps.ZoomControlStyle.SMALL,
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT,
    },
    mapTypeControl: true,
    scrollwheel: false,
  };
}
