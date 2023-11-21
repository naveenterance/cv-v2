import React, { useState, useEffect } from "react";

import "animate.css";

const Content = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 animate__animated animate__fadeInRight ">
          <div className=" sticky top-0 my-4  w-max p-auto m-auto shadow-lg  bg-gray-300 shadow-gray-500 rounded-lg ">
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
      </div>
    </>
  );
};

export default Content;
