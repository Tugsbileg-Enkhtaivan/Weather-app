import { CityName } from "./CityName";
import { Date } from "./date";
import { LocationIcon } from "./LocationIcon";

export const ContainerHeader = () => {
  return (
    <>
    <div className="flex justify-start mt-5 relative">
      <div className="mx-10 my-3 flex flex-col">
        <Date />
        <CityName />
      </div>
      <LocationIcon />
    </div>
    </>
  );
};
