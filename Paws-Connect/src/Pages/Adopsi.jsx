import React from "react";
import { Link } from "react-router-dom";
import { puppiesItems } from "../constants";
import styles from "../style";
import Footer from "../components/Footer.jsx";
import NavHeader from "../components/NavHeader.jsx";

const Adopsi = () => {
  return (
    <>
      {" "}
      <NavHeader
        nav="Detail Kucing"
        page="Beranda"
        pagenav1=">"
        page2="Adopsi"
      />
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="grid grid-cols-3 gap-8 p-4">
          {puppiesItems.map((item) => (
            <Link
              to={`/adopsi/${item.id}`}
              key={item.id}
              className="relative w-fit overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-86 object-cover hover:cursor-pointer hover:scale-105 duration-300"
              />
              <div className="p-4 w-full">
                <h2 className="text-secondary text-3xl font-bold font-Satoshi-Regular pt-2 leading-[37.50px]">
                  {item.title}
                </h2>
                <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px]">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Adopsi;
