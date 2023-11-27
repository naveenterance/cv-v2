import React, { useState, useEffect } from "react";

const Profile = () => {
  return (
    <>
      <div className=" my-2  min-h-screen xl:grid grid-cols-4 gap-4  ">
        <div className="xl:col-span-2   flex items-center justify-center">
          <p class="xl:text-6xl text-4xl italic font-mono break-normal text-gray-300 animate__animated animate__fadeInRight">
            HI, <br></br>I am Naveen,<br></br> A React Dev
          </p>
        </div>

        <div className="xl:col-span-2 xl:mx-auto ml-8 flex items-center justify-center   ">
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/* <img
                className="animate__animated animate__fadeInUp"
                src="pokemon-full.jpg"
                alt=""
              ></img> */}
              <svg
                className="bg-gray-300"
                id="visual"
                viewBox="0 0 900 600"
                width="300"
                height="600"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(472.37929681463885 327.8027641307589)">
                  <path
                    id="part1"
                    d="M106.6 -137.5C145.5 -94.4 189.5 -67.8 194.2 -35.1C198.9 -2.4 164.4 36.3 138.1 77.8C111.8 119.2 93.7 163.4 61.7 179.3C29.8 195.1 -16.1 182.6 -68.2 170.8C-120.4 159.1 -178.8 148 -210.7 112.2C-242.6 76.5 -247.8 15.9 -226.8 -29C-205.8 -73.9 -158.5 -103.2 -116.3 -145.8C-74.1 -188.4 -37.1 -244.2 -1.6 -242.3C33.9 -240.3 67.7 -180.7 106.6 -137.5"
                    fill="#FF0066"
                  ></path>
                  <path
                    d="M112.4 -185.7C148 -152 180.9 -124.8 186.8 -91.3C192.7 -57.9 171.6 -18.1 166.7 24.8C161.8 67.7 173.1 113.7 161.8 157C150.5 200.2 116.5 240.7 73.7 255C31 269.3 -20.6 257.5 -62.2 234.7C-103.8 212 -135.4 178.4 -160.5 142.8C-185.6 107.2 -204.1 69.6 -207.4 31.3C-210.6 -7 -198.6 -46.1 -175 -72.5C-151.4 -98.8 -116.2 -112.5 -85.1 -148.3C-54.1 -184.1 -27 -242.1 5.7 -250.9C38.4 -259.7 76.8 -219.5 112.4 -185.7"
                    fill="#FF0066"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-4 h-2/3 "></div>
      </div>
    </>
  );
};

export default Profile;
