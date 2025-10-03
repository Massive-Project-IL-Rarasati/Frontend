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
