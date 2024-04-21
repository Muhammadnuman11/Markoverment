import Image from "next/image";
import Clouds from "../../public/header/Clouds.png";
import Privacy from "../../public/privacy.png";

export default function PrivacyPolicy() {
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
                            Privacy Policy
                        </h1>
                        <p className="mt-3 w-full text-gray-300">This Privacy Policy describes how Markoverment collects, uses, and discloses your personal information when you visit, use our services, or otherwise communicate with us (collectively, the &quot;Services&quot;). For purposes of this Privacy Policy, &quot;you&quot; and &quot;your&quot; means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>
                        <p className="mt-2 w-full text-gray-300">Please read this Privacy Policy carefully. By using and accessing any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access any of the Services.</p>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col pt-24 md:pt-56">
                    {/* Terms Image */}
                    <div className="z-10 h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
                        <Image src={Privacy} priority={true} alt="Privacy Policy" className="inver" />
                    </div>
                </div>
            </div>

            <div className="w-4/5 md:w-[90%] mb-12 text-white">
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    How We Collect and Use Your Personal Information
                </h2>
                <p className="mt-2 w-full text-gray-300">To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</p>
                <p className="mt-2 w-full text-gray-300">In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    What Personal Information We Collect
                </h2>
                <p className="mt-2 w-full text-gray-300">The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term &quot;personal information&quot;, we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.</p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Information We Collect Directly from You
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    Information that you directly submit to us through our Services may include:
                    <ul className="my-2  ps-5 list-disc">
                        <li>
                            Basic contact details including your name, address, phone number, email.
                        </li>
                        <li>
                            Customer support information including the information you choose to include in communications with us, for example, when sending a message through the Services.
                        </li>
                    </ul>
                    Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.
                </div>
                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Information We Collect through Cookies
                </h2>
                <p className="mt-2 w-full text-gray-300">We also automatically collect certain information about your interaction with the Services (&quot;Usage Data&quot;). To do this, we may use cookies, pixels and similar technologies (&quot;Cookies&quot;). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Information We Obtain from Third Parties
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            Companies who support our Site and Services.
                        </li>
                        <li>
                            Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.
                        </li>
                        <li>
                            When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.
                        </li>
                    </ul>
                    Any information we obtain from third parties will be treated in accordance with this Privacy Policy. We are not responsible or liable for the accuracy of the information provided to us by third parties and are not responsible for any third party&apos;s policies or practices. For more information, see the section below, Third Party Websites and Links.
                </div>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    How We Use Your Personal Information
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    These organizations may link to our home page, to publications or to other Website information so long as the link:
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            Providing Products and Services. We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to you account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and to enable you to post reviews.
                        </li>
                        <li>
                            Marketing and Advertising. We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites.
                        </li>
                        <li>
                            Security and Fraud Prevention. We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.
                        </li>
                        <li>
                            Communicating with you. We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you.
                        </li>
                    </ul>
                    Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.
                </div>
                <p className="mt-2 w-full text-gray-300">We do not use or disclose sensitive personal information for the purposes of inferring characteristics about you.</p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Third Party Websites and Links
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.
                </p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Children&apos;s Data
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.
                </p>
                <p className="mt-2 w-full text-gray-300">
                    As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we &quot;share&quot; or &quot;sell&quot; (as those terms are defined in applicable law) personal information of individuals under 16 years of age.
                </p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Security and Retention of Your Information
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee &quot;perfect security.&quot; In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.
                </p>
                <p className="mt-2 w-full text-gray-300">
                    How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.
                </p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Your Rights and Choices
                </h2>
                <div className="mt-2 w-full text-gray-300">
                    Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.
                    <ul className="my-2 ps-5 list-disc">
                        <li>
                            Right to Access / Know. You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.
                        </li>
                        <li>
                            Right to Delete. You may have a right to request that we delete personal information we maintain about you.
                        </li>
                        <li>
                            Right to Correct. You may have a right to request that we correct inaccurate personal information we maintain about you.
                        </li>
                        <li>
                            Right of Portability. You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.
                        </li>
                        <li>
                            Right to Opt out of Sale or Sharing or Targeted Advertising. You may have a right to direct us not to &quot;sell&quot; or &quot;share&quot; your personal information or to opt out of the processing of your personal information for purposes considered to be &quot;targeted advertising&quot;, as defined in applicable privacy laws. Please note that if you visit our Site with the Global Privacy Control opt-out preference signal enabled, depending on where you are, we will automatically treat this as a request to opt-out of the &quot;sale&quot; or &quot;sharing&quot; of information for the device and browser that you use to visit the Site.
                        </li>
                        <li>
                            Right to Limit and/or Opt out of Use and Disclosure of Sensitive Personal Information. You may have a right to direct us to limit our use and/or disclosure of sensitive personal information to only what is necessary to perform the Services or provide the goods reasonably expected by an average individual.
                        </li>
                        <li>
                            Restriction of Processing: You may have the right to ask us to stop or restrict our processing of personal information.
                        </li>
                        <li>
                            Withdrawal of Consent: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.
                        </li>
                        <li>
                            Appeal: You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.
                        </li>
                        <li>
                            Managing Communication Preferences: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.
                        </li>
                    </ul>
                    You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.
                </div>
                <p className="mt-2 w-full text-gray-300">
                    We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, You may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.
                </p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    Complaints
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority.
                </p>

                <h2 className="text-2xl w-full mt-4 text-start text-white uppercase">
                    International Users
                </h2>
                <p className="mt-2 w-full text-gray-300">
                    Please note that we may transfer, store and process your personal information outside the country you live in, including the United States. Your personal information is also processed by staff and third party service providers and partners in these countries.
                </p>
                <p className="mt-2 w-full text-gray-300">
                    If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission&apos;s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
                </p>
            </div>
        </div>
    )
}
