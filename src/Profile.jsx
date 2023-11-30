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

        <div className="xl:col-span-2 xl:mx-auto ml-8 flex items-center justify-center animate__animated  animate__tada  ">
          <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-300  ">
              {/* <img
                className="animate__animated animate__fadeInUp"
                src="pokemon-full.jpg"
                alt=""
              ></img> */}

              <svg
                className=" bg-gray-300 "
                id="visual"
                viewBox="0 0 900 600"
                width="300"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(472.37929681463885 327.8027641307589)">
                  <path
                    className="animate__animated animate__infinite	infinite animate__rubberBand animate__slow"
                    id="part1"
                    d="M106.6 -137.5C145.5 -94.4 189.5 -67.8 194.2 -35.1C198.9 -2.4 164.4 36.3 138.1 77.8C111.8 119.2 93.7 163.4 61.7 179.3C29.8 195.1 -16.1 182.6 -68.2 170.8C-120.4 159.1 -178.8 148 -210.7 112.2C-242.6 76.5 -247.8 15.9 -226.8 -29C-205.8 -73.9 -158.5 -103.2 -116.3 -145.8C-74.1 -188.4 -37.1 -244.2 -1.6 -242.3C33.9 -240.3 67.7 -180.7 106.6 -137.5"
                    fill="#FF0066"
                  ></path>

                  <path
                    className="animate__animated animate__infinite	infinite animate__rubberBand "
                    d="M112.4 -185.7C148 -152 180.9 -124.8 186.8 -91.3C192.7 -57.9 171.6 -18.1 166.7 24.8C161.8 67.7 173.1 113.7 161.8 157C150.5 200.2 116.5 240.7 73.7 255C31 269.3 -20.6 257.5 -62.2 234.7C-103.8 212 -135.4 178.4 -160.5 142.8C-185.6 107.2 -204.1 69.6 -207.4 31.3C-210.6 -7 -198.6 -46.1 -175 -72.5C-151.4 -98.8 -116.2 -112.5 -85.1 -148.3C-54.1 -184.1 -27 -242.1 5.7 -250.9C38.4 -259.7 76.8 -219.5 112.4 -185.7"
                    fill="#FF0066"
                  ></path>
                </g>
              </svg>

              {/* <svg
                id="visual"
                viewBox="0 0 600 1000"
                width="300"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  className="animate__animated animate__infinite	infinite animate__pulse animate__slow"
                  d="M0 740L15 748C30 756 60 772 90 762.5C120 753 150 718 180 718C210 718 240 753 270 757.7C300 762.3 330 736.7 360 733.5C390 730.3 420 749.7 450 745C480 740.3 510 711.7 525 697.3L540 683L540 316L525 311.2C510 306.3 480 296.7 450 312.7C420 328.7 390 370.3 360 391.2C330 412 300 412 270 418.3C240 424.7 210 437.3 180 430.8C150 424.3 120 398.7 90 398.7C60 398.7 30 424.3 15 437.2L0 450Z"
                  fill="#FF0066"
                ></path>
                <path
                  className="animate__animated animate__infinite	infinite animate__pulse animate__slow"
                  d="M0 414L15 407.5C30 401 60 388 90 392.8C120 397.7 150 420.3 180 446C210 471.7 240 500.3 270 498.7C300 497 330 465 360 473C390 481 420 529 450 525.8C480 522.7 510 468.3 525 441.2L540 414L540 0L525 0C510 0 480 0 450 0C420 0 390 0 360 0C330 0 300 0 270 0C240 0 210 0 180 0C150 0 120 0 90 0C60 0 30 0 15 0L0 0Z"
                  fill="#cccccc"
                ></path>
                <path
                  className="animate__animated animate__infinite	infinite animate__pulse animate__slow"
                  d="M0 663L15 661.5C30 660 60 657 90 655.5C120 654 150 654 180 668.3C210 682.7 240 711.3 270 703.3C300 695.3 330 650.7 360 647.5C390 644.3 420 682.7 450 697C480 711.3 510 701.7 525 696.8L540 692L540 412L525 439.2C510 466.3 480 520.7 450 523.8C420 527 390 479 360 471C330 463 300 495 270 496.7C240 498.3 210 469.7 180 444C150 418.3 120 395.7 90 390.8C60 386 30 399 15 405.5L0 412Z"
                  fill="#FF0066"
                ></path>
                <path
                  d="M0 961L15 961C30 961 60 961 90 961C120 961 150 961 180 961C210 961 240 961 270 961C300 961 330 961 360 961C390 961 420 961 450 961C480 961 510 961 525 961L540 961L540 690L525 694.8C510 699.7 480 709.3 450 695C420 680.7 390 642.3 360 645.5C330 648.7 300 693.3 270 701.3C240 709.3 210 680.7 180 666.3C150 652 120 652 90 653.5C60 655 30 658 15 659.5L0 661Z"
                  fill="#cccccc"
                ></path>
              </svg> */}
              <div className="flex bg-gray-300 p-auto justify-center ">
                <img
                  className="hover:border-8  rounded-full border-orange-500 "
                  width="60"
                  height="60"
                  src="https://img.icons8.com/dotty/80/circled-left.png"
                  alt="play"
                />
                <img
                  className="hover:border-8  rounded-full border-orange-500 "
                  width="60"
                  height="60"
                  src="https://img.icons8.com/dotty/80/circled-right.png"
                  alt="play"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 h-2/3 "></div>
      </div>
    </>
  );
};

export default Profile;
