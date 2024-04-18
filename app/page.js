'use client'
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Clouds from "../public/header/Clouds.png";
import Logo from "../public/header/Logo.png";
import BuildingConnections from "../public/icons/building-connections.png";
import Innovation from "../public/icons/innovation.png";
import Complex from "../public/icons/complex-solutions.png";
import Satisfuction from "../public/icons/customer-satisfuction.png";
import Name from "../public/header/Name.png";
import HomeImg from "../public/header/home.png";

export default function Home() {
  return (
    <>
      <div className="pattern relative flex flex-col">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        <div className="w-full flex flex-col md:flex-row mt-36 md:mt-[224px]">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col md:mt-0">
            {/* Company Logo And Name */}
            <div className="z-9 h-3/5  w-full flex items-center justify-end flex-col">
              <Image src={Logo} width={110} priority={true} alt="Company Logo" className="mb-5" />
              <Image src={Name} width={300} priority={true} alt="Company Name" />
            </div>

            {/* Company Detail */}
            <div className="z-9 h-2/5 w-4/5 flex justify-center items-center flex-col text-white mt-5 md:mt-0">
              <h1 className="text-xl sm:text-4xl font-bold">
                <ReactTyped
                  strings={['Social Media Marketing', 'Digital Marketing', 'Search Engine Optimization', 'Graphic Designing', 'Shopify Development', 'Web Development']}
                  typeSpeed={40}
                  loop
                />
              </h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-9/10">
                Markoverment delivers top-notch digital solutions, encompassing Social Media Marketing, Digital Marketing, SEO, Shopify Development, Web Development, and Graphic Designing. Committed to excellence and innovation, we empower businesses to flourish in the digital realm. With our comprehensive suite of services, we cater to diverse needs and ensure your online success.
              </p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/* Why Choose Us  */}
        <div>
          <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10">
            <div className="relative mx-auto max-w-5xl text-center">
              <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                Why choose us
              </span>
              <h2
                className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                Build a Website That Your Customers Love
              </h2>
              <p
                className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                Our templates allow for maximum customization. No technical skills required - our intuitive design tools
                let
                you get the job done easily.
              </p>
            </div>


            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 md:gap-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-4 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[#fbbb37]">
                  <Image src={BuildingConnections} width={30} priority={true} alt="Building Connections" />
                </div>
                <h3 className="mt-6 text-gray-400 text-xl">Building Connections</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We believe in building connections with the people either they are buyers or audiences.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-4 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[#fbbb37]">
                  <Image src={Innovation} width={30} priority={true} alt="Innovation" />
                </div>
                <h3 className="mt-6 text-gray-400 text-xl">Innovation at its best</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">The professionals of Markoverment are not only creative but maintaining the uniqueness from planning to designing.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-4 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[#fbbb37]">
                  <Image src={Complex} width={30} priority={true} alt="Complex solutions" />
                </div>
                <h3 className="mt-6 text-gray-400 text-xl">Complex solutions</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  Nothing is here impossible for the team. They are determined to walk the difference roads to reach the heights of quality.
                </p>
              </div>

              <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-4 text-center shadow">
                <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-[#fbbb37]">
                  <Image src={Satisfuction} width={30} priority={true} alt="Satisfuction" />
                </div>
                <h3 className="mt-6 text-gray-400 text-xl">Customer Satisfaction</h3>
                <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                  Customer satisfaction is our top priority.
                </p>
              </div>

            </div>

            {/* <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
              style={{ backgroundImage: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
            </div>
            <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
              style={{ backgroundImage: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
            </div> */}
          </section>
        </div>

        {/* Our Process */}
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">Our Process</p>
              <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">Launch your blog
                in
                4 easy steps
              </h2>
              <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                Create your own blog with us and launch it with just 4 easy steps
              </p>
            </div>
            <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-4 sm:mt-16 lg:mt-20 lg:max-w-full lg:grid-cols-5">

              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 bg-[#fbbb37] font-semibold">
                  01
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-2">
                  <h3
                    className="mt-6 text-gray-400 text-xl">
                    Connect
                  </h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Get in touch with our team and let the brilliance of our experts be a savior for your business.</p>
                </div>
              </li>

              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 bg-[#fbbb37] font-semibold">
                  02
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-2">
                  <h3
                    className="mt-6 text-gray-400 text-xl">
                    Discuss your idea
                  </h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Share your idea, discuss requirements and prepare a modal of the project, to begin with the strategy building phase.</p>
                </div>
              </li>

              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 bg-[#fbbb37] font-semibold">
                  03
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-2">
                  <h3
                    className="mt-6 text-gray-400 text-xl">
                    Planning strategies
                  </h3>
                  <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Discuss your requirements with our creative team and start building strategies to move forward to the development phase.</p>
                </div>
              </li>

              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 bg-[#fbbb37] font-semibold">
                  04
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-2">
                  <h3
                    className="mt-6 text-gray-400 text-xl">
                    Implementation
                  </h3>
                  <h4 className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Once the team has built strategies, the experts will start implementing them after yuor approval.</h4>
                </div>
              </li>

              <li className="flex-start group relative flex lg:flex-col">
                <span
                  className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                  aria-hidden="true"></span>
                <div
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 bg-[#fbbb37] font-semibold">
                  05
                </div>
                <div className="ml-6 lg:ml-0 lg:mt-2">
                  <h3
                    className="mt-6 text-gray-400 text-xl">
                    Results
                  </h3>
                  <h4 className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">We stay connected with the customers during the development phase and enjoy the desired results together.</h4>
                </div>
              </li>

            </ul>
          </div>
        </section>
      </div>

    </>
  );
}
