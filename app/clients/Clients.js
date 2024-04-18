import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
// Internation Clients
import Samsung from "../../public/I-clients/samsung.png";
import Western from "../../public/I-clients/western.png";
import Souq from "../../public/I-clients/souq.png";
import Minicabit from "../../public/I-clients/minicabit.png";
// Clients
import Serena from "../../public/clients/serena.png";
import Grand from "../../public/clients/grand.png";
import Mini from "../../public/clients/mini.png";
import Chohan from "../../public/clients/chohan.jpg";

export default function Clients() {
  return (
    <>
      <div className="pattern relative flex flex-col">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5 z-10">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        {/* Testimonies */}
        <div className="max-w-6xl pt-36 md:pt-72 mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div
                className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                It&apos;s not just us.
              </h1>
              <p className="text-xl text-gray-100 md:text-center md:text-2xl">
                Here&apos;s what others have to say about us.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                          <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Find God.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                        aliquam malesuada bibendum.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/kanyewest" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Kanye West" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Kanye West</h3>
                          <p className="text-gray-500 text-md">Rapper &amp; Entrepreneur</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Find God.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                        aliquam malesuada bibendum.</p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/paraga" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                          <p className="text-gray-500 text-md">CEO of Twitter</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                        aliquam malesuada bibendum.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/paraga" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Parag Agrawal" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Parag Agrawal</h3>
                          <p className="text-gray-500 text-md">CEO of Twitter</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Enim neque volutpat ac tincidunt vitae
                        semper. Mattis aliquam faucibus purus in massa tempor. Neque vitae tempus quam
                        pellentesque nec. Turpis cursus in hac habitasse platea dictumst.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/tim_cook" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Tim Cook" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Diam quis enim lobortis scelerisque
                        fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis
                        aliquam malesuada bibendum.</p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>

            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Satya Nadella</h3>
                          <p className="text-gray-500 text-md">CEO of Microsoft</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                        tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                        eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                          <p className="text-gray-500 text-md">CEO of PayPal</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                        et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/satyanadella" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Satya Nadella" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Satya Nadella</h3>
                          <p className="text-gray-500 text-md">CEO of Microsoft</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Tortor dignissim convallis aenean et
                        tortor at. At ultrices mi tempus imperdiet nulla malesuada. Id cursus metus aliquam
                        eleifend mi. Quis ipsum suspendisse ultrices gravida dictum fusce ut.</p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div
                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                  </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                    <div
                      className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                          <p className="text-gray-500 text-md">CEO of PayPal</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                        et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>


          </div>
        </div>

        {/* Our Clients */}
        <div className="w-full flex justify-center items-center flex-col pt-24">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">Happy Clients</h2>
          <p className="py-2 text-base max-w-2xl text-white text-center mb-4">
            At Markoverment we always care about our prestigious client for continued satisfaction, and their satisfactory reaction is our strength.
          </p>
          <div className="w-[90%] max-w-4xl flex justify-between flex-wrap items-center">
            <Image src={"https://www.svgrepo.com/show/442910/brand-apple.svg"} width={130} height={130} priority={true} alt="apple" className="invert" />
            <Image src={"https://www.svgrepo.com/show/443329/brand-pixar.svg"} width={130} height={130} priority={true} alt="pixer" className="invert" />
            <Image src={"https://www.svgrepo.com/show/443079/brand-geforce.svg"} width={130} height={130} priority={true} alt="geforce" className="invert" />
            <Image src={"https://www.svgrepo.com/show/443042/brand-ethereum.svg"} width={130} height={130} priority={true} alt="ethereum" className="invert" />
            <Image src={"https://www.svgrepo.com/show/443206/brand-line.svg"} width={130} height={130} priority={true} alt="line" className="invert" />
            <Image src={"https://www.svgrepo.com/show/519278/slack.svg"} width={130} height={130} priority={true} alt="slack" className="invert" />
            <Image src={Serena} width={130} height={130} priority={true} alt="serena" className="invert" />
            <Image src={Grand} width={130} height={130} priority={true} alt="grand" className="" />
            <Image src={Minicabit} width={130} height={130} priority={true} alt="minicabit" className="" />
            <Image src={Mini} width={130} height={130} priority={true} alt="mini" className="invert" />
            <Image src={Chohan} width={130} height={130} priority={true} alt="chohan" className="invert" />
          </div>
        </div>

        {/* Our Internation Clients */}
        <div className="w-full flex justify-center items-center flex-col py-24">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-white">International Clients</h2>
          <p className="text-base max-w-2xl text-white text-center mb-4">
            Our International success includes localizing websites into many languages, website development and deployment, corporate re-branding, creating global SharePoint-based Intranet sites, supporting multinational disaster recovery and business continuity efforts, IT Project Management, and more.
          </p>
          <p className="text-base max-w-2xl text-white text-center mb-4">
            We look forward to the opportunities to serve international clients because more than any other project, these give our consultants and our clients the opportunity to learn from each other.
          </p>
          <div className="w-[90%] max-w-4xl flex justify-between flex-wrap items-center">
            <Image src={Samsung} width={130} priority={true} alt="samsung" />
            <Image src={Western} width={130} priority={true} alt="western" className="invert" />
            <Image src={Souq} width={130} priority={true} alt="souq" />
            <Image src={Minicabit} width={130} priority={true} alt="minicabit" />
          </div>
        </div>

      </div>

    </>
  );
}

