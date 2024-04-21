import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
import Terms from "../../public/terms.png";

export default function TermsConditions() {
    return (
        <div className="pattern relative flex flex-col items-center">
            {/* Clouds */}
            <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
                <Image src={Clouds} priority={true} alt="Clouds" />
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row mb-12">
                <div className="w-full md:w-1/2 flex items-center flex-col md:mt-0 pt-12 md:pt-64">
                    {/* Company Detail */}
                    <div className="w-4/5 flex items-center flex-col text-white">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 w-full">
                            Terms and Conditions
                        </h1>
                        <p className="mt-3 w-full text-gray-300">Welcome to Markoverment!</p>
                        <p className="mt-3 w-full text-gray-300">These terms and conditions outline the rules and regulations for the use of Markoverment&apos;s Website, located at www.markoverment.com.</p>
                        <p className="mt-2 w-full text-gray-300">By accessing this website we assume you accept these terms and conditions. Do not continue to use Markoverment if you do not agree to take all of the terms and conditions stated on this page.</p>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col pt-24 md:pt-56">
                    {/* Terms Image */}
                    <div className="z-10 h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
                        <Image src={Terms} priority={true} alt="terms&conditions" className="inver" />
                    </div>
                </div>
            </div>

            <div className="w-4/5 md:w-[90%] mb-12 text-white">
                <p className="mt-2 w-full text-gray-300">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of provision of the Company&apos;s stated services, in accordance with and subject to, prevailing law of au. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                {/* License */}
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    License
                </h2>
                <p className="mt-2 w-full text-gray-300">Unless otherwise stated, Markoverment and/or its licensors own the intellectual property rights for all material on Markoverment. All intellectual property rights are reserved. You may access this from Markoverment for your own personal use subjected to restrictions set in these terms and conditions.</p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    You must not:
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    <ul className="my-2  ps-5 list-disc">
                        <li>
                            Republish material from Markoverment
                        </li>
                        <li>
                            Sell, rent or sub-license material from Markoverment
                        </li>
                        <li>
                            Reproduce, duplicate or copy material from Markoverment
                        </li>
                        <li>
                            Redistribute content from Markoverment
                        </li>
                        <li>
                            Redistribute content from Markoverment
                        </li>
                    </ul>
                    This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
                </div>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Hyperlinking to our Content
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    The following organizations may link to our Website without prior written approval:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            Government agencies;
                        </li>
                        <li>
                            Search engines;
                        </li>
                        <li>
                            News organizations;
                        </li>
                        <li>
                            Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                        </li>
                        <li>
                            System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                        </li>
                    </ul>
                </div>
                <div className="mt-2 w-full text-gray-300">
                    These organizations may link to our home page, to publications or to other Website information so long as the link:
                    <ul className="my-2">
                        <li>
                            (a)  is not in any way deceptive;
                        </li>
                        <li>
                            (b)  does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services;
                        </li>
                        <li>
                            (c)  fits within the context of the linking party&apos;s site.
                        </li>
                    </ul>
                </div>
                <div className="mt-2 w-full text-gray-300">
                    We may consider and approve other link requests from the following types of organizations:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            commonly-known consumer and/or business information sources;
                        </li>
                        <li>
                            associations or other groups representing charities;
                        </li>
                        <li>
                            online directory distributors;
                        </li>
                        <li>
                            internet portals;
                        </li>
                        <li>
                            accounting, law and consulting firms;
                        </li>
                        <li>
                            educational institutions and trade associations.
                        </li>
                    </ul>
                </div>
                <div className="mt-2 w-full text-gray-300">
                    We will approve link requests from these organizations if we decide that:
                    <ul className="my-2">
                        <li>
                            (a)  the link would not make us look unfavorably to ourselves or to our accredited businesses
                        </li>
                        <li>
                            (b)  the organization does not have any negative records with us;
                        </li>
                        <li>
                            (c)  the benefit to us from the visibility of the hyperlink compensates the absence of Markoverment;
                        </li>
                        <li>
                            (d)  the link is in the context of general resource information.
                        </li>
                    </ul>
                </div>
                <div className="mt-2 w-full text-gray-300">
                    These organizations may link to our home page so long as the link:
                    <ul className="my-2">
                        <li>
                            (a)  is not in any way deceptive;
                        </li>
                        <li>
                            (b)  does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services;
                        </li>
                        <li>
                            (c)  fits within the context of the linking party&apos;s site.
                        </li>
                    </ul>
                </div>
                <p className="mt-2 w-full text-gray-300">
                    If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Markoverment. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <div className="mt-2 w-full text-gray-300">
                    Approved organizations may hyperlink to our Website as follows:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            By use of our corporate name; or
                        </li>
                        <li>
                            By use of the uniform resource locator being linked to; or
                        </li>
                        <li>
                            By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party&apos;s site.
                        </li>
                        <li>
                            No use of Markoverment&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    iFrames
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Content Liability
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Reservation of Rights
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it&apos;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Removal of links from our website
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </p>
                <p className="mt-2 w-full text-gray-300">
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Disclaimer
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            limit or exclude our or your liability for death or personal injury;
                        </li>
                        <li>
                            limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                        </li>
                        <li>
                            limit any of our or your liabilities in any way that is not permitted under applicable law; or
                        </li>
                        <li>
                            exclude any of our or your liabilities that may not be excluded under applicable law.
                        </li>
                    </ul>
                </div>
                <div className="mt-2 w-full text-gray-300">
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
                    <ul className="my-2">
                        <li>
                            (a)  are subject to the preceding paragraph; and
                        </li>
                        <li>
                            (b)  govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                        </li>
                    </ul>
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </div>
            </div>
        </div>
    )
}
