import React from 'react';
import L from 'leaflet';
import {Map, MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const MapComponent = ({latitude, longitude}) => {

  return (
    <MapContainer center={[latitude, longitude]} zoom={10} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {`${latitude}, ${longitude}`}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;