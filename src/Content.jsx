import React, { useState, useEffect } from "react";

import "animate.css";

const Content = () => {
  return (
    <>
      <div class="grid grid-cols-12 gap-4">
        <div className="col-span-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="   w-max p-auto m-auto shadow-lg  bg-gray-300 shadow-gray-500 rounded-lg ">
            <div className="relative m-2 animate__animated animate__flipInY  rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300  w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/tiny-color/48/cancel.png"
                alt="multiply"
              />
            </div>

            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                data-tooltip-target="tooltip-profile"
                data-tooltip-style="light"
                data-tooltip-placement="right"
                className="m-auto"
                width="40"
                height="40"
                src="https://avatars.githubusercontent.com/u/87982480?v=4"
                alt=""
              />
              <div
                id="tooltip-profile"
                role="tooltip"
                className="absolute invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Profileddd
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                data-tooltip-target="tooltip-portfolio"
                data-tooltip-style="light"
                data-tooltip-placement="right"
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/isometric/50/briefcase.png"
                alt="briefcase"
              />
              <div
                id="tooltip-portfolio"
                role="tooltip"
                className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Portfolio
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                data-tooltip-target="tooltip-github"
                data-tooltip-style="light"
                data-tooltip-placement="right"
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/github--v1.png"
                alt="info"
              />
              <div
                id="tooltip-github"
                role="tooltip"
                className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Github
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </div>
            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/fluency/48/day-and-night.png"
                alt="day-and-night"
              />
            </div>
            <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-amber-500">
              <img
                className="m-auto"
                width="40"
                height="40"
                src="https://img.icons8.com/office/40/apple-contacts.png"
                alt="apple-contacts"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
