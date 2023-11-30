import React, { useState, useEffect } from "react";

import "animate.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Content = () => {
  return (
    <>
      <div className="xl:grid grid-cols-12 gap-1 animate__animated animate__fadeIn">
        <div className="xl:col-span-1  ">
          <div className="sticky top-0  w-max py-4 m-auto animate__animated animate__fadeInLeft "></div>
        </div>
        <div className="xl:col-span-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry
              className="m-4 animate__animated animate__fadeInUp"
              gutter="10px"
            >
              <img className="  hover:scale-110 " src="pokemon.jpg" alt="" />
              <div class="relative ">
                <img
                  className="   "
                  src="https://naveenterance.github.io/cv-old/images/code.jpg"
                  alt=""
                />
                <div class="opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 flex  items-center justify-center z-10 ">
                  <div class=" p-4 w-auto h-auto bg-white text-black">
                    Your Content
                  </div>
                </div>
              </div>
              <img
                className="  hover:scale-110"
                src="https://naveenterance.github.io/cv-old/images/django.jpg"
                alt=""
              />
              <img
                className="  hover:scale-110 "
                src="https://naveenterance.github.io/cv-old/images/threshold.jpg"
                alt=""
              />
              <img
                className="  hover:scale-110 "
                src="https://naveenterance.github.io/cv-old/images/Timed_form.jpg"
                alt=""
              />

              <img
                className="     hover:scale-110"
                src="https://naveenterance.github.io/cv-old/images/pdo.jpg"
                alt=""
              />
              <img className="  hover:scale-110 " src="pokemon.jpg" alt="" />
              <img
                className="  hover:scale-110 "
                src="https://naveenterance.github.io/cv-old/images/code.jpg"
                alt=""
              />
              <img
                className="  hover:scale-110"
                src="https://naveenterance.github.io/cv-old/images/django.jpg"
                alt=""
              />
              <img
                className="  hover:scale-110 "
                src="https://naveenterance.github.io/cv-old/images/threshold.jpg"
                alt=""
              />
              <img
                className="  hover:scale-110 "
                src="https://naveenterance.github.io/cv-old/images/Timed_form.jpg"
                alt=""
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Content;
