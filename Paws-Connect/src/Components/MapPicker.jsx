// ============================================
// 7. REFACTORED MapPicker.jsx
// ============================================
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MAP_CONFIG, UI_DIMENSIONS } from "../config/constants";

const MapPicker = ({
  onLocationSelect,
  initialPosition = MAP_CONFIG.BANDUNG_COORDINATES,
  zoom = MAP_CONFIG.DEFAULT_ZOOM,
  height = UI_DIMENSIONS.MAP_PICKER.height,
  width = UI_DIMENSIONS.MAP_PICKER.width
}) => {
  const [position, setPosition] = useState(initialPosition);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        const newPosition = [e.latlng.lat, e.latlng.lng];
        setPosition(newPosition);
        onLocationSelect(newPosition);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height, width }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapPicker;