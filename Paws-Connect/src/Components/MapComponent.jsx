// ============================================
// 2. REFACTORED MapComponent.jsx
// ============================================
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MAP_CONFIG } from "../config/constants";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({
  position = MAP_CONFIG.BANDUNG_COORDINATES,
  zoom = MAP_CONFIG.DEFAULT_ZOOM,
  width = MAP_CONFIG.MAP_CONTAINER.width,
  height = MAP_CONFIG.MAP_CONTAINER.height,
  popupText = "Bandung, Jawa Barat"
}) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ width, height }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{popupText}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;