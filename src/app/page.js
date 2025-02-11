import Image from "next/image";
import SunIcon from "/public/icon.png";
import SunShadow from "/public/shadow.png";

export default function Home() {
  return (
    // body
    <>
      <div className="bg-sky-200 font-title flex h-screen">
        {/* big block */}
        {/* left side container */}
        <div className="w-full flex">
          <div className="bg-[#F3F4F6] w-1/2 flex flex-col items-center">
            {/* search */}
            <div className="bg-white flex items-center gap-4 rounded-[48px] shadow-2xl w-[73%] py-4 px-6 overflow-hidden m-10 z-10">
              <svg
                className="w-10 h-10"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="search" opacity="0.2">
                  <path
                    id="Vector"
                    d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
                    fill="black"
                  />
                </g>
              </svg>
              <input
                placeholder="Search"
                className=" text-black placeholder:font-bold w-[455px] font-bold text-[32px] outline-none"
              ></input>
            </div>
            {/* Container */}
            <div className="bg-white/75 w-[50%] h-[812px] my-[50px] rounded-3xl z-10 backdrop-blur-md">
              {/* TitleDateandLocation*/}
              <div className="flex justify-start mt-5 relative">
                <div className="mx-10 my-3 flex flex-col">
                  {/* Date */}
                  <h5 className="text-[20px] text-black">September 10, 2021</h5>
                  {/* CityName */}
                  <h1 className="text-[48px] text-black">Tokyo</h1>
                </div>
                {/* LocationIcon */}
                <div className=" absolute top-10 right-10">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="localization_icon">
                      <path
                        id="Vector 15"
                        d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        id="Ellipse 20"
                        cx="16"
                        cy="13"
                        r="2"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* SunContainer */}
              <div className="justify-center flex items-center">
                <Image
                  alt="Sun"
                  decoding="async"
                  srcSet={SunIcon}
                  src={SunIcon}
                  width={262}
                  height={262}
                  objectFit="cover"
                />
              </div>
              {/* degreesStatusContainer */}
              <div className="relative">
                <h1 className="text-[144px] font-extrabold bg-gradient-to-b from-[#111827] to-[#6B7280] text-transparent ... bg-clip-text mx-10">
                  26°
                </h1>
                <h6 className="text-[#FF8E27] text-[24px] font-extrabold mx-10">
                  Bright
                </h6>
              </div>
              {/* Nav */}
              <div className="flex justify-around w-full items-center mt-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#D1D5DB"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#D1D5DB"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#D1D5DB"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#D1D5DB"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#0F141E] w-1/2 flex justify-center items-center text-white">
            <h1>block2</h1>
          </div>
        </div>
      </div>

      <div className="inset-0 z-0 absolute rounded-full flex justify-center items-center overflow-hidden">
        <div className="absolute w-[940px] h-[940px] rounded-full border-white/20 border-[1px] flex justify-center items-center">
          <div className="absolute w-[540px] h-[540px] rounded-full border-white/20 border-[1px] flex justify-center items-center">
            <div className="absolute w-[340px] h-[340px] rounded-full border-white/20 border-[1px] flex justify-center items-center">
              <div className="absolute w-[140px] h-[140px] border-white/20 border-[1px] flex justify-center items-center bg-[#F3F4F6] rounded-full">
                <div className="absolute justify-center items-center flex bottom-5">
                  <svg
                    width="90"
                    height="90"
                    viewBox="0 0 100 105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
                      fill="#111111"
                    />
                    <path
                      d="M99.7442 32.882L86.1599 7.58993C83.6554 2.91778 78.7591 0 73.43 0H59V7.16486H59.0051C61.6673 7.16486 64.1156 8.62166 65.3673 10.9572L78.9469 36.2543C80.0827 38.3633 80.647 40.679 80.647 42.9999C80.647 45.3211 80.0827 47.6368 78.9469 49.7454L65.3673 75.0423C64.1156 77.3783 61.6673 78.8345 59.0051 78.8345H59V85.9999H73.43C78.7591 85.9999 83.6554 83.0821 86.1599 78.41L99.7442 53.1177C101.439 49.9526 102.289 46.4785 102.289 42.9999C102.289 39.5211 101.439 36.0475 99.7442 32.882Z"
                      fill="#111111"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
