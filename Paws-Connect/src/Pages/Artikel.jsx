import React from "react";
import ArtikelItem from "../Components/ArtikelItem";
import NavHeader from "../Components/NavHeader";
import { artikelItems } from "../constants";
import styles from "../style";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";


const Artikel = () => {
  return (
    <>
      <NavHeader nav="Artikel" page="Beranda" pagenav1=">" page2="Artikel" />
      <div className="container mx-20">
        {artikelItems.slice(1, 4).map((item) => (
          <div
            key={item.id}
            className="flex  items-center p-5  space-x-20 space-y-16 mt-8 ml-6 "
          >
            <img
              className="w-96 h-72  scale-125 object-cover mb-4"
              src={item.image}
              alt={item.title}
            />
            <div className="flex-1 w-56 h-72 space-y-4">
              <h3 className="text-sm font-light">{item.date}</h3>
              <h3 className="text-lg  font-bold mt-2">{item.title}</h3>
              <p className="text-sm font-light mt-2 mr-48 ">{item.content}</p>
              <div className="flex text-sm font-light font-satoshi-light text-primary items-center mt-4 cursor-pointer">

              <Link to={item.link}>{item.more}</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular ">
            Artikel Paling Populer
          </h1>
          <div className="flex ">
            <div className="flex p-4 space-x-5 ">
              <div
                className={` ${styles.flexCenter}  p-2 w-80 h-10 border-2  rounded-lg border-greyLight text-xl font-light font-Satoshi-Light  `}
              >
                <input
                  type="text"
                  placeholder="Cari Artikel"
                  className="border-0 bg-transparent outline-0 rounded-md placeholder:text-greyLight text-center w-60 h-5 text-secondary text-base font-light font-Satoshi-Light leading-[40px]"
                />
              </div>
              <button className="bg-primary rounded-lg p2 w-60 h-10 text-white font-light font-Satoshi-light text-xl leading-[40px]">
                Search
              </button>
            </div>
          </div>
        </div>
        <ArtikelItem /> */}
      <Footer />
    </>
  );
};

export default Artikel;
