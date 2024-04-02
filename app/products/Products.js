import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
import HomeImg from "../../public/header/home.png";

export default function Products() {
  return (
    <>
      <div className="pattern relative flex flex-col">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        {/* Products Paragraph */}
        <div className="z-50 w-full flex justify-center items-center flex-col md:flex-row mt-36 md:mt-[224px]">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Products</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markoverment, a leading software company, offers Social Media Marketing, Digital Marketing, SEO, Shopify Development, and Web Development services. Our tailored solutions empower businesses to enhance their online presence, engage with their target audience, and drive growth. With expertise in each area, we deliver dynamic, user-centric solutions that ensure success in the digital landscape.</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markoverment is your trusted partner for navigating the digital landscape and achieving unparalleled success in the online realm.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/* Design and Development */}
        <div className="z-50 w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Working together on design and development</h1>
              <p className="mt-2 text-justify w-full lg:w-[90%]">We collaborate with you to plan and execute the details of your website so that it connects with your audience, communicates your message and elevates your brand all at the same time.</p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Manage your brand from one place</h1>
              <p className="mt-2 text-justify w-full lg:w-[90%]">We can help you sell your products or services, start a blog and make smart decisions with clear analytics.</p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Grow your online presence</h1>
              <p className="mt-2 -justify w-full lg:w-[90%]">We can help you boost traffic and increase engagement with built-in SEO tools, Facebook ads, email marketing and social posts.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/* Web Design & Development */}
        <div className="z-50 w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Web Design & Development</h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markovernment specializes in website design and development services. Our web experiences are high-performing, feature-packed and digitally transformative, designed to be user-friendly, fully functional, very secure and able to scale as your enterprise grows.</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Our website developers provide expert web application development and web design services to our clients. Markovernment offers a variety of website design and development services, from creating mobile web development solutions and responsive website designs, to building custom e-commerce and intranet experiences using the latest and proven web technologies. </p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Up to 85% of consumers visit a company or service provider&apos;s website before making a purchase. More and more consumers make decisions based on their online experience. Therefore, the appearance, usability and accessibility of your website is more important than ever, especially in an increasingly competitive market.</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Statistics show that the global population of social media users has risen to 4.57 billion, with 346 million new social media users added in 2020. As social media usage continues to grow exponentially, knowing how to market on social media is becoming more crucial in reaching your target demographics and creating brand awareness.</p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Our social media marketing specialists explain the different aspects of business-to-consumer (B2C) and business-to-business (B2B) social media marketing to help you get started with your campaign. </p>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Our dynamic, data-driven social media marketing plan brings remarkable results to your company and turns customers into brand advocates. More importantly, our innovative social media marketing strategies positively influences your search engine optimization (SEO) and digital marketing efforts, creating more lead and revenue streams for your business.</p>
              <h1 className=" text-xl font-bold w-full lg:w-[90%] mt-4">We do more than just Web Design and Development</h1>
              <p className="mt-2 text-justify w-full lg:w-[90%]">Having an effective website is only one component of your digital marketing strategy. You wouldn&apos;t try pitching a tent with one pole; the same goes with digital marketing. If you want to see results from your digital efforts, you need to think beyond your website.</p>
            </div>
          </div>
          <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
            {/* Home Image */}
            <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
              <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
            </div>
          </div>
        </div>

        {/*  Message with Social Media Marketing and Advertising */}
        <div className="z-50 w-full flex justify-center items-center flex-col md:flex-row mt-8 md:mt-12">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
            {/* Company Detail */}
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Differentiate Your Brand and Amplify Your Message with Social Media Marketing and Advertising</h1>
              <p className="mt-2 text-justify w-full lg:w-[90%]">We are in an age where more than 70% of consumers expect a brand to have a social media presence. But, not just any social media presence—consumers expect your brand to have a tailored, cohesive social media strategy.</p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Generate More Sales Leads</h1>
              <p className="mt-2 text-justify w-full lg:w-[90%]">Generate quality leads that are more likely to become your customers. Whenever we meet with a business to discuss their digital marketing strategy, they usually tell us they need two things - more leads, and more sales. We have gotten really good at generating both of these things for our clients and can do the same for you.
              </p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Build Brand Awareness</h1>
              <p className="mt-2 -justify w-full lg:w-[90%]">Get found by your customers and build more awareness about your services. Our digital marketing experts will help you build your brand awareness and personality in a way that encourages not only recognition but also customer loyalty.
              </p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Grow Your Online Reputation</h1>
              <p className="mt-2 -justify w-full lg:w-[90%]">Turn your customers into your brand loyalists and biggest fans. We&apos;ll help you build an online reputation that is positive, engaging and authoritative.</p>
            </div>
            <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white mt-6">
              <h1 className=" text-xl font-bold w-full lg:w-[90%]">Improve an Ineffective Website</h1>
              <p className="mt-2 -justify w-full lg:w-[90%]">Transform your website into a lead generation machine for your business. We&apos;ve been building and developing effective websites for many years, and we&apos;d love to collaborate with you.</p>
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

