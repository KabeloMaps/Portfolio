import { Button } from "@headlessui/react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import TextType from "./TextType";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  return (
    <div className=" relative  isolate overflow-hidden p-48 bg-black-400 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="overlays absolute inset-0 -z-10  overflow-hidden">
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
      <div className="mx-auto grid  max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2  lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className=" lg:max-w-lg  flex-col ">
              <h1 className="text-[2.45rem] sm:text-[3.5rem] mt-24 mb-10  font-semibold tracking-tight text-pretty text-white ">
                HI, I'M KABELO MAPONYA
              </h1>
              <p className="mt-6text-xl/8 min-h-4 overflow-scroll text-[1.25rem] text-white">
                <div className="overflow-hidden h-28">
                  <TextType
                    text={[
                      "A software developer based in Cape Town with 2 years of hands-on experience, building accessible and user-friendly websites.",
                    ]}
                    typingSpeed={75}
                    pauseDuration={500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorBlinkDuration={0.5}
                    loop
                  />
                </div>
              </p>

              <div className=" flex items-center mt-10">
                <Button
                  className="flex px-5 items-center rounded-4xl bg-pretty py-4 text-base font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  style={{ backgroundColor: "rgb(211, 233, 122)" }}
                >
                  <span className="text-black">CONTACT ME</span>
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

                <div className="ml-auto  flex text-white gap-6">
                  <a
                    href="https://www.linkedin.com/in/kabelomaponya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[3.25rem]"
                    />
                  </a>

                  <a
                    href="https://github.com/KabeloMaps?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[3.25rem]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-140 md:h-140 md:mt-24 rounded-full bg-lime-200 border-2 shadow-2xl overflow-hidden">
            <img
              src="/assets/hero/Hero.png"
              alt="Portrait of Kabelo Maponya"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
