// ============================================
// 1. REFACTORED ArtikelItem.jsx
// ============================================
import React from "react";
import styles from "../style";
import { artikelItems } from "../constants";
import { PAGINATION } from "../config/constants";

const ArtikelItem = ({ limit = PAGINATION.ARTIKEL_HOME_LIMIT }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${styles.padding} ${styles.flexCenter}`}
    >
      {artikelItems.slice(0, limit).map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-5 rounded-lg shadow-md bg-white"
        >
          <img
            className="w-full h-64 object-cover mb-4"
            src={item.image}
            alt={item.title}
          />
          <h3 className="text-sm font-light">{item.read}</h3>
          <h3 className="text-lg font-bold mt-2">{item.title}</h3>
          <p className="text-sm font-light mt-2">{item.content}</p>
          <div className="flex items-center mt-4">
            <img
              className="w-6 h-6 mr-2"
              src={item.sourcelogo}
              alt={item.source}
            />
            <span className="text-sm text-gray-600 font-bold">
              {item.source}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtikelItem;

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

// ============================================
// 3. REFACTORED GoogleMapComponent.jsx
// ============================================
import {
  APIProvider,
  Map,
  Marker,
  ControlPosition,
  MapControl,
  Pin,
} from "@vis.gl/react-google-maps";
import { MAP_CONFIG, UI_DIMENSIONS } from "../config/constants";

const GoogleMapComponent = ({
  center = MAP_CONFIG.DEFAULT_CENTER,
  zoom = MAP_CONFIG.DEFAULT_ZOOM,
  width = UI_DIMENSIONS.MAP_CONTAINER.width,
  height = UI_DIMENSIONS.MAP_CONTAINER.height,
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
}) => {
  const containerStyle = {
    width,
    height,
  };

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={containerStyle}
        center={center}
        defaultZoom={zoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <MapControl position={ControlPosition.TOP_RIGHT}>
          <Marker position={center}>
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
          </Marker>
        </MapControl>
      </Map>
    </APIProvider>
  );
};

export default GoogleMapComponent;

// ============================================
// 4. REFACTORED Puppies.jsx
// ============================================
import React from "react";
import styles from "../style";
import { puppiesItems } from "../constants";
import { PAGINATION } from "../config/constants";

const Puppies = ({ limit = PAGINATION.PUPPIES_HOME_LIMIT }) => {
  return (
    <div className="border-b-2 border-[#D9D9D9] shadow-inner bg-[#F8F8F8]">
      <div className="flex flex-col items-center mx-auto mb-8 mt-20">
        <section id="home-2" className={`${styles.section} text-center`}>
          <h2 className="text-primary text-xl font-bold font-Satoshi-Regular leading-snug mt-10">
            Bertemu dengan kucingmu
          </h2>
          <h1 className="text-cyan text-6xl font-bold font-Satoshi-Regular leading-[105px]">
            Puppies Menunggu untuk Adopsi
          </h1>
          <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mx-40 mt-10 mb-10">
            Tes DNA kucing adalah yang terbaik karena memberikan informasi
            tentang asal-usul ras dan kesehatan sebagian besar kucing. Jadi,
            jika Anda ingin mengetahui lebih banyak tentang asal-usul ras dan
            informasi kesehatan kucing Anda, tes ini sangat direkomendasikan.
          </p>
          <section className={`${styles.flexCenter} ${styles.paddingY}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mt-10 items-center">
              {puppiesItems.slice(0, limit).map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center w-fit border-b-2 border-greyLight shadow-inner rounded-[15px] p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover hover:cursor-pointer hover:scale-105 duration-300"
                  />
                  <div className="w-[84px] text-secondary text-3xl font-bold font-Satoshi-Regular leading-[45px] pl-5">
                    {item.title}
                  </div>
                  <div className="w-[315px] text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mt-2">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Puppies;

// ============================================
// 5. REFACTORED Avatar.jsx
// ============================================
import React from "react";
import { PLACEHOLDERS, UI_DIMENSIONS } from "../config/constants";

const Avatar = ({
  src = PLACEHOLDERS.AVATAR,
  size = UI_DIMENSIONS.AVATAR_SIZE,
  alt = "Avatar",
  onClick
}) => {
  return (
    <div className="avatar">
      <div className={`${size} object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
        <img
          src={src}
          alt={alt}
          className={`${size} object-cover rounded-full cursor-pointer`}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Avatar;

// ============================================
// 6. REFACTORED Loading.jsx
// ============================================
import React from 'react';
import { STATUS_MESSAGES } from '../config/constants';

const Loading = ({ message = STATUS_MESSAGES.LOADING }) => {
  return (
    <div className="h-5/6 px-4 flex justify-center mt-48">
      <div className="flex flex-col gap-4 w-52 align-center">
        <div className="skeleton h-32 w-full bg-greyLight"></div>
        <div className="skeleton h-4 w-28 bg-greyLight"></div>
        <div className="skeleton h-4 w-full bg-greyLight"></div>
        <div className="skeleton h-4 w-full bg-greyLight"></div>
        <div className="font-satoshi-light flex items-center justify-center">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Loading;

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