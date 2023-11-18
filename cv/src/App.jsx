import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid grid-cols-12 gap-1">
      <div
        class="mx-2 w-fit h-fit my-12 shadow-lg shadow-gray-500/50 rounded-full col-span-1"
      >
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            data-tooltip-target="tooltip-profile"
            data-tooltip-style="light"
            data-tooltip-placement="right"
            class="m-auto"
            width="40"
            height="40"
            src="https://naveenterance.github.io/cv/images/circle.png"
            alt="home--v1"
          />
          <div
            id="tooltip-profile"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            data-tooltip-target="tooltip-portfolio"
            data-tooltip-style="light"
            data-tooltip-placement="right"
            class="m-auto"
            width="40"
            height="40"
            src="https://img.icons8.com/isometric/50/briefcase.png"
            alt="briefcase"
          />
          <div
            id="tooltip-portfolio"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Portfolio
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            data-tooltip-target="tooltip-github"
            data-tooltip-style="light"
            data-tooltip-placement="right"
            class="m-auto"
            width="40"
            height="40"
            src="github.gif"
            alt="info"
          />
          <div
            id="tooltip-github"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
          >
            Github
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            class="m-auto"
            width="40"
            height="40"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
          />
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            class="m-auto"
            width="40"
            height="40"
            src="https://img.icons8.com/fluency/48/day-and-night.png"
            alt="day-and-night"
          />
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            class="m-auto"
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/apple-contacts.png"
            alt="apple-contacts"
          />
        </div>
        <div
          class="relative m-2 rounded-full flex flex-col text-gray-700 bg-gray-300 shadow-md w-16 h-16 bg-clip-border border-4 hover:border-cyan-600"
        >
          <img
            class="m-auto"
            width="40"
            height="40"
            src="https://img.icons8.com/office/40/multiply.png"
            alt="multiply"
          />
        </div>
      </div>
      <div class="col-span-10 shadow-lg shadow-gray-500/50 my-4 rounded-lg p-2">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/200/300"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/200/300"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/200/300"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/200/300"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://picsum.photos/200/300"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <!-- Slider indicators -->
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
