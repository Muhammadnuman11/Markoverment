import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
// Internation Clients
import Samsung from "../../public/I-clients/samsung.png";
import Western from "../../public/I-clients/western.png";
import Souq from "../../public/I-clients/souq.png";
import Minicabit from "../../public/I-clients/minicabit.png";
import Unicef from "../../public/I-clients/unicef.png";
import Degree from "../../public/I-clients/degree60.jpg";
import Velox from "../../public/I-clients/velox-logo.png";
import OnePackagingHub from "../../public/I-clients/one-packaging-hub.png";
import DelayDollar from "../../public/I-clients/delay-dollar.png";
import Express from "../../public/I-clients/express.jpeg";
import Fajar from "../../public/I-clients/fajar.png";
import InitiativeHK from "../../public/I-clients/initiativeHK.png";
import Libas from "../../public/I-clients/libas.jpg";
import Selrosa from "../../public/I-clients/selrosa.png";
import Aino1 from "../../public/I-clients/aino1.png";
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
            <Image src={Grand} width={130} height={130} priority={true} alt="grand"  />
            <Image src={Minicabit} width={130} height={130} priority={true} alt="minicabit"  />
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
          <div className="w-[90%] max-w-4xl flex flex-wrap justify-evenly items-center gap-y-8 gap-x-12 md:gap-x-24 mt-8">
            <Image src={Samsung} width={130} priority={true} alt="samsung" />
            <Image src={Western} width={100} priority={true} alt="western" className="bg-white p-1" />
            <Image src={Souq} width={130} priority={true} alt="souq" />
            <Image src={Minicabit} width={130} priority={true} alt="minicabit" />
            {/* verve svg */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.827 34.922" className="w-24 bg-white p-1 mx-4">
              <g id="Group_379" data-name="Group 379" transform="translate(-1219.243 -355.11)">
                <g id="Group_276" data-name="Group 276" transform="translate(1219.243 355.11)">
                  <path id="Path_873" data-name="Path 873" d="M1251.464,383.862a6.127,6.127,0,0,1-.672,2.8l-.308.534,0,0a6.151,6.151,0,0,1-10.424-.149l-.03-.052-.067-.115-.009-.015-15.834-27.426c-.187-.309-.687-.977-.687-.977a9.032,9.032,0,0,0-4.007-2.847.26.26,0,0,1,.077-.508h11.54a9.026,9.026,0,0,1,7.217,4.238l.006.009.291.5,11.99,20.768v0l.187.324,0,0,0,.006A6.133,6.133,0,0,1,1251.464,383.862Z" transform="translate(-1219.243 -355.11)"></path>
                  <path id="Path_874" data-name="Path 874" d="M1350.562,360.7a5.566,5.566,0,0,1-.612,2.547l0,0v0l0,0-5.966,10.332-8.168-14.148v0a9.04,9.04,0,0,0-4.651-3.809l-.01,0-.047-.017h0a.257.257,0,0,1-.149-.234.261.261,0,0,1,.26-.26H1345.2A5.592,5.592,0,0,1,1350.562,360.7Z" transform="translate(-1304.882 -355.11)"></path>
                </g>
                <g id="Group_277" data-name="Group 277" transform="translate(1274.453 355.577)">
                  <path id="Path_875" data-name="Path 875" d="M1455.818,357.11h4.407l3.229,9,3.229-9h4.325l-5.767,14.316h-3.655Z" transform="translate(-1455.818 -357.11)"></path>
                  <path id="Path_876" data-name="Path 876" d="M1530.152,357.11h11.433v3.35h-7.533v2.153h6.823v3.107h-6.823v2.254h7.635v3.35h-11.534Z" transform="translate(-1512.805 -357.11)"></path>
                  <path id="Path_877" data-name="Path 877" d="M1592.521,357.11h6.722a6.211,6.211,0,0,1,4.63,1.543,4.407,4.407,0,0,1,1.259,3.31V362a4.5,4.5,0,0,1-2.924,4.366l3.391,4.955h-4.549l-2.863-4.305h-1.726v4.305h-3.939Zm6.539,6.823c1.34,0,2.112-.65,2.112-1.686v-.041c0-1.117-.812-1.685-2.132-1.685h-2.579v3.412Z" transform="translate(-1560.619 -357.11)"></path>
                  <path id="Path_878" data-name="Path 878" d="M1652.689,357.11h4.407l3.229,9,3.228-9h4.326l-5.767,14.316h-3.655Z" transform="translate(-1606.745 -357.11)"></path>
                  <path id="Path_879" data-name="Path 879" d="M1726.912,357.11h11.432v3.35h-7.534v2.153h6.823v3.107h-6.823v2.254h7.635v3.35h-11.534Z" transform="translate(-1663.647 -357.11)"></path>
                  <path id="Path_880" data-name="Path 880" d="M1458.6,448.839V448.8a7.379,7.379,0,0,1,7.656-7.392,8.29,8.29,0,0,1,5.767,2.071l-2.315,2.782a5.015,5.015,0,0,0-3.432-1.34,3.734,3.734,0,0,0-3.635,3.9v.04a3.755,3.755,0,0,0,3.859,3.94,4.017,4.017,0,0,0,2.274-.589v-1.726h-2.8V447.6h6.539V454a9.611,9.611,0,0,1-6.173,2.193C1461.913,456.19,1458.6,453.144,1458.6,448.839Z" transform="translate(-1457.953 -421.735)"></path>
                  <path id="Path_881" data-name="Path 881" d="M1527.6,442.625h6.721a6.211,6.211,0,0,1,4.63,1.543,4.407,4.407,0,0,1,1.259,3.31v.041a4.5,4.5,0,0,1-2.924,4.366l3.391,4.955h-4.548l-2.864-4.305h-1.726v4.305H1527.6Zm6.538,6.823c1.34,0,2.112-.65,2.112-1.686v-.041c0-1.117-.812-1.685-2.132-1.685h-2.579v3.412Z" transform="translate(-1510.85 -422.668)"></path>
                  <path id="Path_882" data-name="Path 882" d="M1588.072,448.839V448.8a7.661,7.661,0,0,1,15.311-.04v.04a7.661,7.661,0,0,1-15.311.041Zm11.29,0V448.8a3.694,3.694,0,0,0-3.655-3.838,3.622,3.622,0,0,0-3.594,3.8v.04a3.69,3.69,0,0,0,3.635,3.838A3.627,3.627,0,0,0,1599.362,448.839Z" transform="translate(-1557.208 -421.735)"></path>
                  <path id="Path_883" data-name="Path 883" d="M1661.68,450.606v-7.981h4v7.9c0,2.051,1.035,3.026,2.619,3.026s2.62-.934,2.62-2.924v-8h4V450.5c0,4.589-2.62,6.6-6.661,6.6S1661.68,455.053,1661.68,450.606Z" transform="translate(-1613.638 -422.668)"></path>
                  <path id="Path_884" data-name="Path 884" d="M1728.416,442.625h6.092c3.594,0,5.91,1.848,5.91,5v.041c0,3.35-2.579,5.117-6.113,5.117h-1.949v4.061h-3.939Zm5.807,7.067c1.4,0,2.254-.731,2.254-1.848V447.8c0-1.218-.853-1.868-2.274-1.868h-1.848v3.757Z" transform="translate(-1664.8 -422.668)"></path>
                </g>
              </g>
            </svg>
            <Image src={Unicef} width={130} priority={true} alt="unicef" />
            <Image src={Degree} width={130} priority={true} alt="degree60"  />
            <Image src={Velox} width={100} priority={true} alt="velox" />
            <Image src={OnePackagingHub} width={150} priority={true} alt="one packaging hub" className="bg-white p-1 "/>
            <Image src={DelayDollar} width={130} priority={true} alt="delay dollar" />
            <Image src={Express} width={130} priority={true} alt="express" />
            <Image src={Fajar} width={130} priority={true} alt="fajar" />
            <Image src={InitiativeHK} width={130} priority={true} alt="initiative HK" />
            <Image src={Libas} width={100} priority={true} alt="libas" />
            <Image src={Selrosa} width={130} priority={true} alt="selrosa" />
            <Image src={Aino1} width={130} priority={true} alt="aino1" />
          </div>
        </div>

      </div>

    </>
  );
}

