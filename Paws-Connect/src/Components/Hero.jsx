import React from "react";
import styles from "../style";
import { catHome1, catHome2, ellipse } from "../assets";
import Button from "./Button";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <>
      <section className="container mx-90 mt-8">
        <div className="flex items-center justify-between mx-12 mt-10 mb-10">
          {/* Bagian Kiri */}
          <div className="flex flex-1 flex-col  justify-center mx-12">
            <div className="text-secondary text-6xl font-bold font-Satoshi-Regular leading-[90px] ">
              Dapatkan Anggota Keluarga Bulu Baru Anda Hari Ini
            </div>

            <p className="text-secondary text-xl font-light font-Satoshi-Light leading-[30px] mt-5">
              Para Kucing yang Menunggu untuk Menjadi Bagian dari Rumah Anda!
              Temukan Sahabat Sejati Anda Hari Ini di Website Adopsi Kucing Kami
            </p>
            <div className="mt-10">
              <Link to="/adopsi">
                <Button variant="primary">Adopsi</Button>
              </Link>
            </div>
          </div>

          {/* Bagian Kanan */}
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <div className="absolute -z-10">
              <img
                src={ellipse}
                alt="ellipse"
                className="w-4/5 relative top-96 left-28"
              />
              <img
                src={catHome1}
                alt="cathome1"
                className="w-[900px] h-[550px] object-cover relative bottom-10 right-10 z-[5]"
              />
              <img
                src={catHome2}
                alt="cathome2"
                className="w-[950px] h-[390px] object-contain relative z-[5] bottom-80 left-14 transform scale-15++++++0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
