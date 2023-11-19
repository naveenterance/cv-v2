import React, { Component, useState } from "react";
import "animate.css";

const Sidebar = () => {
  const [view, setview] = useState(true);
  const changeview = () => {
    view ? setview(false) : setview(true);
  };

  return (
    <>
      <div className="lg:absolute top-4 left-4  bg-gray-300 lg:shadow-lg lg:shadow-purple-500/50 lg:rounded-full sm:z-80  ">
        {view ? (
          <>
            <div
              onClick={changeview}
              className="  animate__animated animate__flipInY relative m-2  rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
            >
              <img
                className="m-auto "
                width="40"
                height="40"
                src="https://img.icons8.com/tiny-color/48/plus.png"
                alt="multiply"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <div
                onClick={changeview}
                className="relative m-2 animate__animated animate__flipInY  rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
              >
                <img
                  className="m-auto"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/tiny-color/48/cancel.png"
                  alt="multiply"
                />
              </div>

              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
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
                  Profile
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
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
              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
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
              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
                <img
                  className="m-auto"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </div>
              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
                <img
                  className="m-auto"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/fluency/48/day-and-night.png"
                  alt="day-and-night"
                />
              </div>
              <div className="relative m-2 animate__animated animate__fadeInDown rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-lg w-16 h-16 bg-clip-border border-4 hover:border-cyan-600">
                <img
                  className="m-auto"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/office/40/apple-contacts.png"
                  alt="apple-contacts"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
