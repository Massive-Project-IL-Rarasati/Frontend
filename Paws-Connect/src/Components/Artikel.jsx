import React from "react";
import ArtikelItem from "./ArtikelItem";
import Button from "./Button";
import { Link } from "react-router-dom";

//refactor(Artikel): remove unused imports and unnecessary fragment

const Artikel = () => {

  return (
      <section className="">
        <div className="flex items-center justify-between mx-20 mt-10 mb-10">
          <h1 className="text-cyan text-3xl font-bold font-Satoshi-Regular">
            Artikel Terbaru Kami
          </h1>
          <Link to="/artikel">
            <Button variant="primary" onClick={handleOpenModal}>
              Selengkapnya
            </Button>
          </Link>
        </div>
        <ArtikelItem />
      </section>
  );
};

export default Artikel;

