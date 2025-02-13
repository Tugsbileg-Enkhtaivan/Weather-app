import { Search } from "./search";
import { Container } from "./Container";

export const LeftSide = () => {
  return (
    <div className="bg-[#F3F4F6] w-1/2 flex flex-col items-center">
      <Search />
      <Container />
    </div>
  );
};
