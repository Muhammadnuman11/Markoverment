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
                        {/* Proposal Validity */}
                        <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                            Proposal Validity
                        </h2>
                        <p className="mt-2 w-full text-gray-300">The proposal is valid up to 15 days..</p>
                        {/* Service Cost */}
                        <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                            Service Cost
                        </h2>
                        <p className="mt-2 w-full text-gray-300">Only services cost for SEO and digital marketing is quoted herein. No cost for paid ads is included in the cost of this proposal. The budget for paid campaigns depends upon the decision of the client. We shall be only bound to give our careful estimation in order to assist with that.</p>
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
                {/* Payment terms */}
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Payment terms
                </h2>
                <p className="mt-2 w-full text-gray-300">SEO and digital marketing services are monthly based services so the payment cycle shall work on monthly basis. There is no advanced payment for SEO and digital marketing work. However, for the first 2 months, 50% payment for any of these services requested by the client shall be made in advance i.e. at the beginnning of the monthly payment cycle and the rest of 50% at the end of the months.</p>
                {/* Paid advertisement */}
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Paid advertisement
                </h2>
                <p className="mt-2 w-full text-gray-300">Paid advertisement shall be run only once client approves and releases budget for the paid ads for SEM and SMM.</p>
            </div>
        </div>
    )
}
