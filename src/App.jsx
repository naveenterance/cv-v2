import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Sidebar from "./Sidebar.jsx";
import Content from "./Content.jsx";
import Profile from "./Profile.jsx";

function App() {
  const [tab, setTab] = useState("Profile");

  const [view, setview] = useState(false);
  const changeview = () => {
    view ? setview(false) : setview(true);
  };
  const profiletab = () => {
    setTab("Profile");
  };
  const contenttab = () => {
    setTab("Content");
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1">
          <div className=" sticky top-8   w-max p-1 m-auto shadow-lg  bg-gray-300 shadow-gray-500 rounded-lg ">
            {view ? (
              <>
                <div
                  onClick={changeview}
                  className=" focus:ring focus:outline-none animate__animated animate__flipInY relative m-2  rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600"
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
                    className="relative m-2 animate__animated animate__flipInY  rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300  w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600"
                  >
                    <img
                      className="m-auto"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/tiny-color/48/cancel.png"
                      alt="multiply"
                    />
                  </div>

                  <div className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600">
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
                  <div
                    onClick={contenttab}
                    className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600"
                  >
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
                  <div
                    onClick={profiletab}
                    className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600"
                  >
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
                  <div className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600">
                    <img
                      className="m-auto"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/48/linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                  <div className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600">
                    <img
                      className="m-auto"
                      width="40"
                      height="40"
                      src="https://img.icons8.com/fluency/48/day-and-night.png"
                      alt="day-and-night"
                    />
                  </div>
                  <div className="relative m-2 animate__animated animate__fadeInDown rounded-lg flex flex-col text-gray-700 bg-gray-300 shadow-lg shadow-gray-300 w-16 h-16 bg-clip-border hover:border-4 hover:border-cyan-600">
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

          {/* <Sidebar /> */}
        </div>
        <div className="col-span-11">
          {(() => {
            switch (tab) {
              case "Profile":
                return <Profile />;
              case "Content":
                return <Content />;
              default:
                return <Profile />;
            }
          })()}
        </div>
      </div>
    </>
  );
}

export default App;
