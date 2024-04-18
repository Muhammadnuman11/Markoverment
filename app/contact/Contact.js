import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
// import HomeImg from "../../public/header/home.png";

export default function Contact() {
  return (
    <>
      <div className="pattern relative flex flex-col">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5 z-10">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        {/* Contact Information */}
        <div className="max-w-6xl pt-36 md:pt-72 mx-8 md:mx-10 lg:mx-20">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-gray-300">Visit Our Location</h1>
            <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.868591039087!2d74.39207557463202!3d31.445284450849613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919062fdcd24b07%3A0xf88d5be83e46f4c5!2sA%20Block%20Commercial!5e0!3m2!1sen!2s!4v1713442517707!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-medium uppercase text-white">Pakistan Office</h3>
                    <p className="mt-1 text-gray-400 font-light">Office# 3c, A Block Commercial Area, State Life Housing Society, Lahore, Punjab, PK</p>
                    <p className="mt-1 text-gray-400 font-light">markoverment@gmail.com</p>
                    <p className="mt-1 text-gray-400 font-light">+92 3261663665</p>
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-medium uppercase text-white">Australia Office</h3>
                    <p className="mt-1 text-gray-400 font-light">12 shen street, Schofields, NSW, Australia, New South Wales</p>
                    <p className="mt-1 text-gray-400 font-light">markoverment@gmail.com</p>
                    <p className="mt-1 text-gray-400 font-light">+61 2 8007 3598</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="container mx-auto px-5 py-24">

          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
            <p className="mx-auto text-base leading-relaxed md:w-2/3 lg:w-1/2 text-gray-300">Feel free to reach out to us! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {/* <!-- form --> */}
              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-400 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#fbbb37] focus:ring-0" placeholder="Name" />
                  <label for="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#fbbb37] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-[#fbbb37]">Name</label>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="relative">
                  <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-400 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#fbbb37] focus:ring-0" placeholder="Email" />
                  <label for="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#fbbb37] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-[#fbbb37]">Email</label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea id="message" name="message" className="peer h-32 w-full rounded border border-gray-400 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#fbbb37] focus:ring-0" placeholder="Message"></textarea>
                  <label for="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#fbbb37] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-[#fbbb37]">Message</label>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border border-[#fbbb37] bg-[#fbbb37] py-2 px-8 text-lg text-black hover:border  hover:text-white hover:bg-transparent focus:outline-none">Send Message</button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </>
  );
}

