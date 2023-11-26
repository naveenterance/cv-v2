import React, { useState, useEffect } from "react";

import "animate.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Content = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-1 animate__animated animate__fadeIn">
        <div className="col-span-2  ">
          <div className=" sticky top-12  w-max py-4 m-auto animate__animated animate__fadeInLeft ">
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg   ">
              <h3 className="mb-4  bg-gray-300 font-semibold text-white ">
                Technology
              </h3>
              <li className="w-full border-b border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2  "
                  />
                  <label
                    for="vue-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Vue JS
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2  "
                  />
                  <label
                    for="react-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    React
                  </label>
                </div>
              </li>
              <h3 className="mb-4  bg-gray-300 font-semibold text-white ">
                Technology
              </h3>
              <li className="w-full border-b border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2  "
                  />
                  <label
                    for="angular-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Angular
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 rounded-t-lg ">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2  "
                  />
                  <label
                    for="laravel-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Laravel
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-8">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry
              className="m-4 animate__animated animate__fadeInUp"
              gutter="10px"
            >
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
