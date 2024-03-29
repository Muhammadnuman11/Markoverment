import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
// import HomeImg from "../../public/header/home.png";

export default function Clients() {
  return (
    <>
      <div className="pattern relative h-[1000px] md:h-screen flex">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        <div className="z-50 w-full flex flex-col md:flex-row">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mt-5  md:mt-0">
            {/* Company Detail */}
            <div className="z-9 h-2/5 w-4/5 md:w-3/4 flex justify-center items-center flex-col text-white">
              <h1 className="text-2xl font-bold">Clients</h1>
              <p className="mt-2 md:mt-3 text-center w-full lg:w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro at official dolor rerum? Dicta est vero.
              </p>
              <p className="mt-2 md:mt-3 text-center w-full lg:w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro at official dolor rerum? Dicta est vero.
              </p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            {/* <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div> */}
          </div>
        </div>

      </div>

    </>
  );
}

