import { Button } from "@headlessui/react";
import { FaLinkedin } from "react-icons/fa";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden p-48 bg-black-400 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10  overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={250}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className=" lg:max-w-lg">
              <h1 className="mt-64 text-9xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                HI, I'M KABELO MAPONYA
              </h1>
              <p className="mt-6text-xl/8 text-white">
                A Johannessburg and Cape Town based software developer
                passionate about building accessible and user friendly websites
              </p>
              <div className="flex flex-row items-center gap-10 mt-9 ">
                <Button
                  className="mt-6 flex px-5 items-center rounded-4xl bg-pretty py-4 text-base font-semibold shadow-sm bg- hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                  style={{ backgroundColor: "rgb(211, 233, 122)" }}
                >
                  <span className="text-black ">CONTACT ME</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-8 px-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </Button>
                <a
                  href="https://www.linkedin.com/in/kabelomaponya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white "
                >
                  <FaLinkedin size={40} />
                </a>{" "}
                <a
                  href="https://github.com/KabeloMaps?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white "
                >
                  <FaLinkedin size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-12  -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="hero img"
            src="./assets/hero/Hero.png"
            className="w-3xl max-w-none rounded-4xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
      </div>
    </div>
  );
}
