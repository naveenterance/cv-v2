import React, { useState, useEffect } from "react";
import "./index.css";

import "animate.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Content = () => {
  return (
    <>
      <div className="xl:grid grid-cols-24 gap-1 animate__animated animate__fadeIn">
        <div className="xl:col-span-1  ">
          <div className="sticky top-0  w-max py-4 m-auto animate__animated animate__fadeInLeft "></div>
        </div>
        <div className="xl:col-span-22 mr-8">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry
              className="m-4 animate__animated animate__fadeInUp"
              gutter="10px"
            >
              <div className="relative">
                <img className=" " src="pokemon.jpg" alt="" />
                <div class="  opacity-0 hover:opacity-100  absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex  shadow-lg border-4  border-slate-500/100 ">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/officel/30/react.png"
                      />
                      A Pokemon-api application
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4 border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>{" "}
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4 border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative   ">
                <img
                  className="  "
                  src="https://naveenterance.github.io/cv-old/images/code.jpg "
                  alt=""
                />
                <div class="  opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex  shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
                      />
                      A codeignitor blog
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>{" "}
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative ">
                <img
                  className="  "
                  src="https://naveenterance.github.io/cv-old/images/django.jpg"
                  alt=""
                />
                <div class="  opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
                      />
                      A codeignitor blog
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  className="   "
                  src="https://naveenterance.github.io/cv-old/images/threshold.jpg"
                  alt=""
                />
                <div class="  opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex  shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
                      />
                      A codeignitor blog
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>{" "}
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="   "
                  src="https://naveenterance.github.io/cv-old/images/Timed_form.jpg"
                  alt=""
                />
                <div class="  opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex  shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
                      />
                      A codeignitor blog
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>{" "}
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="      "
                  src="https://naveenterance.github.io/cv-old/images/pdo.jpg"
                  alt=""
                />
                <div class="  opacity-0 hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-end justify-end z-10 hover-effect  bg-white-300">
                  <div class=" p-4 w-auto h-auto  text-black ">
                    <div className="mb-4 bg-white p-2 rounded-full flex  shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4  "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png"
                      />
                      A codeignitor blog
                    </div>
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-http-web-services-outline-outline-black-m-oki-orlando.png"
                      />
                      Demo
                    </div>{" "}
                    <div className="mb-4 bg-white p-2 rounded-full flex w-2/4 shadow-lg border-4  border-slate-500/100">
                      <img
                        className="bg-white rounded-full ring-4 ring-white-500 mr-4 "
                        width="24"
                        height="24"
                        src="github.gif"
                      />
                      Github
                    </div>
                  </div>
                </div>
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </>
  );
};

export default Content;
