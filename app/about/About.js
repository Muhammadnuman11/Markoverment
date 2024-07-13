import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
import HomeImg from "../../public/header/home.png";

export default function About() {
  return (
    <>
      <div className="pattern relative flex flex-col">
        {/* Clouds */}
        <div className="z-10 absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        {/* About Paragraph */}
        <div className="z-10 w-full flex justify-center items-center flex-col md:flex-row mt-36 md:mt-[224px]">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">About Us</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markovernment provides social media marketing for small businesses, enterprises and multiple-location companies. No matter if you own a startup or a Fortune 500 company; our social media marketing experts can assist you with your campaign.</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Partner with us and let our social media marketing agency boost your brand visibility and integrity!</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">The Social Media Marketing Services by Markovernment demonstrates extraordinary fruitful results for our clients on every level.</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markovernment provides the best SMM Services in Pakistan as our professional SMM Team is very hard-working and well-trained in the respective field and have new Social Media Marketing techniques that help you propagate your business rapidly. We have Social Media Experts who can help you in connecting with a larger customer base through our various Social Media Marketing Services (SMM Services).</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Not only this, we also provide Best Web Services and Social Media Marketing Services and Strategies for every sort of business or brand. We help you decide what and when to post. It will guide you to recognize your customers, attract them, and influence them to engage with you forever.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/* Successfull Social Media Marketing */}
        <div className="w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Do You Need Successful Social Media Marketing?</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Let us know what you want, and we will make it happen. The best part is that we will do it at a low cost. Just remember, we&apos;re budget-friendly, not cheap. Shine through the sea of competitors as you deserve.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/*  Social Media Optimization */}
        <div className="w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Why Markovernment for Social Media Optimization?</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Well, for one, we have been training and working with the experts for a long time. We&apos;ve seen trends come and go. We know what works and what doesn&apos;t. Social media optimization is all about data and how you use it. At Markovernment, we do our research to get you exactly what&apos;ll work for your business and put it into effect. Our consultants are experts of social media marketing and have a proven track record. We have the skills, creativity, and industry-specific knowledge to make your social media optimization hugely successful.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

