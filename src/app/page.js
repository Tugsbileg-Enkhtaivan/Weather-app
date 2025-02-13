import Image from "next/image";
import SunIcon from "/public/icon.png";
import SunShadow from "/public/shadow.png";
import { Search } from "./components/search";
import { LocationIcon } from "./components/LocationIcon";
import { SunContainer } from "./components/SunContainer";
import { Date } from "./components/date";
import { CityName } from "./components/CityName";
import { ContainerHeader } from "./components/ContainerHeader";
import { Degree } from "./components/degree";
import { Status } from "./components/status";
import { DegreeContainer } from "./components/degreeContainer";
import { Navigation } from "./components/Navigation";
import { Container } from "./components/Container";
import { Circles } from "./components/Circles";
import { LeftSide } from "./components/LeftSide";

export default function Home() {
  return (
    // body
    <>
      <div className="bg-sky-200 font-title flex h-screen">
        {/* big block */}
        <div className="w-full flex">
          <LeftSide />
          {/* Rightside */}
          <div className="bg-[#0F141E] w-1/2 flex justify-center items-center text-white">
            <h1>block2</h1>
          </div>
        </div>
      </div>
      <Circles />
    </>
  );
}
