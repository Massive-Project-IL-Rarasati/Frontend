// NOTE: Consider wrapping this component with React.memo for performance optimization
// if props (image, name, desc) are unlikely to change frequently.
// Usage: import React, { memo } from "react"; export default memo(AdopsiItem);
import React from "react";

//refactor: use props destructuring for cleaner code
const AdopsiItem = (image, name, desc) => {
  return (
    <>
      <div className="hover:cursor-pointer hover:scale-105 duration-300">
        <img src={image} alt="adopsi" />
        <h2 className="pt-5 text-sky-950 text-[25px] font-bold font-Satoshi-Regular leading-[37.50px]">
          {name}
        </h2>
        <p className="text-sky-950 text-xl font-light font-Satoshi-Light leading-[30px]">
          {desc}
        </p>
      </div>
    </>
  );
};

export default AdopsiItem;
