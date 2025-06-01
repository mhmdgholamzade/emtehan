import React from 'react';

import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          اینجا لندن است!
        </Popup>
      </Marker>
    </MapContainer>
  );
}


export default Map;
