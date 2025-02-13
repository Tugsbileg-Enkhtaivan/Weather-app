import { ContainerHeader } from "./ContainerHeader"
import { DegreeContainer } from "./degreeContainer"
import { Navigation } from "./Navigation"
import { SunContainer } from "./SunContainer"

export const Container = () => {
  return (
    <div className="bg-white/75 w-[50%] h-[812px] my-[50px] rounded-3xl z-10 backdrop-blur-md">
              <ContainerHeader />
              <SunContainer />
              <DegreeContainer />
              <Navigation />
            </div>
  )
}
