import React, { useState, useEffect } from "react";
import axios from "axios";
import "animate.css";

const Info = () => {
  const [contributions, setContributions] = useState(0);
  const [repositories, setRepositories] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/naveenterance")
      .then((response) => {
        setContributions(response.data.contributions);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://api.github.com/users/naveenterance/repos")
      .then((response) => {
        setRepositories(response.data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" my-2  min-h-screen grid grid-cols-4 gap-4   ">
      <div className="xl:col-span-2  flex items-center justify-center  animate__animated animate__fadeInLeft">
        <ul class="max-w-md space-y-1  list-inside ">
          <li class="flex items-center text-4xl font-mono  justify-center my-4">
            <img
              width="72"
              height="72"
              src="https://avatars.githubusercontent.com/u/87982480?v=4"
            />
          </li>
          <li class="flex items-center text-gray-300 text-4xl font-mono ">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-repository-agile-flaticons-flat-flat-icons.png"
              alt="external-repository-agile-flaticons-flat-flat-icons"
            />
            Repositories: {repositories}
          </li>
          <li className="flex items-center text-4xl font-mono ">
            <img
              className="mr-4"
              width="64"
              height="64"
              src="https://img.icons8.com/dusk/64/web.png"
              alt="web"
            />
            <a
              href="https://github.com/naveenterance"
              class="inline-flex items-center font-medium text-gray-300 text-xl hover:underline "
            >
              https://github.com/naveenterance
              <svg
                class="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://api.github.com/users/naveenterance"
              class="inline-flex items-center font-medium text-gray-300 text-xl hover:underline "
            >
              <img
                className="mr-4"
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
              www.linkedin.com/in/naveen-terance-a0732a14b
              <svg
                class="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:naveenterance@gmail.com"
              class="inline-flex items-center font-medium text-gray-300 text-xl hover:underline "
            >
              <img
                className="mr-2"
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/mail--v1.png"
                alt="mail--v1"
              />
              naveenterance@gmail.com
              <svg
                class="w-4 h-4 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="xl:col-span-2     flex items-center justify-center animate__animated animate__fadeInRight">
        <img src="https://ssr-contributions-svg.vercel.app/_/naveenterance?chart=3dbar&format=svg" />
        <div>{/* <p>Contributions: {contributions}</p> */}</div>
      </div>
      <div className="xl:col-span-4   h-2/4 flex items-center justify-center"></div>
    </div>
  );
};

export default Info;
