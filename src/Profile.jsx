import React, { useState, useEffect } from "react";
import SmartSlider from "react-smart-slider";
const Profile = () => {
  const slidesArray = [
    {
      url: "pokemon-full.jpg",

      // (Optional) Set if you want to add any content on your slide
    },
    {
      url: "https://naveenterance.github.io/cv-old/images/code.jpg",
    },
    {
      url: "https://naveenterance.github.io/cv-old/images/pdo.jpg",
    },
    {
      url: "https://naveenterance.github.io/cv-old/images/django.jpg",
    },
    {
      url: "https://naveenterance.github.io/cv-old/images/threshold.jpg",
    },
    {
      url: "https://naveenterance.github.io/cv-old/images/Timed_form.jpg",
    },
  ];
  return (
    <>
      <div className=" my-2  min-h-screen grid grid-cols-4 gap-4  ">
        <div className="col-span-2   flex items-center justify-center">
          <p class="text-6xl italic font-mono break-normal text-gray-300 animate__animated animate__fadeInRight">
            HI, <br></br>I am Naveen,<br></br> A React Dev
          </p>
        </div>

        <div className="col-span-2 flex items-center justify-center ">
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
              <SmartSlider
                slides={slidesArray}
                autoSlide={true}
                height={570}
                showIndicators={false}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 h-2/3 "></div>
      </div>
    </>
  );
};

export default Profile;
