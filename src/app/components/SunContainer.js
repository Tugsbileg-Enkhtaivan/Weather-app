import SunIcon from "/public/icon.png"
import Image from "next/image";


export const SunContainer = () => {
  return (
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
  )
}
