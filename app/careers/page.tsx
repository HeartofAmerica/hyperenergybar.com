import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/nav';
import Wave from '@/components/wave';
import Footer from '@/components/footer';
import JobApplicationComponent from '@/components/job-application-cap';

export const metadata: Metadata = {
  title: "Hyper Energy Bar | Careers",
  description: "If you love the thought of making someone’s day before you make their drink, go ahead and start filling in the blanks and be prepared to be ENERGIZED!",
};

export default function Careers() {
  return (
    <>
      <Nav/>
      <div className="hero-gradient-1 relative overflow-hidden">
        <div className="container max-w-screen-xl">
          <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:flex items-center">
            <div className="pt-28 sm:pt-10 sm:pb-20 mx-5 sm:mx-10 py-10">
              <h1 className="obvi-xl mb-5">
                Join the Hype
              </h1>
              <p className="text-sm sm:text-xl">
                Hyper lives to turn every guest at the drive up into a friend by the time they leave the window. We’re an honest, energetic and youthful brand that lives up to the Hype day in and day out.
              </p>
            </div>
            <Image
              src="/assets/img/hyper-careers.jpg"
              quality={100}
              width={965}
              height={1054}
              alt="Hyper Energy Bar Careers"
              className="mix-blend-multiply z-10"
            />
          </div>
        </div>
        <div id="submit-a-design" className="wave-margin text-white z-40 relative -mb-1">
          <Wave />
        </div>
      </div>
      <div className="py-5">
        <div className="container max-w-screen-lg px-5 sm:px-10">
          <h2 className="obvi-lg text-center mb-5">Job Openings</h2>
          <div className="max-w-screen-sm mx-auto text-center">
            <p className="mb-10 sm:mb-20">
              If you think you’re applying to work at a coffee shop, think again. At Hyper, we believe at our core that we’re in the business of making friends. So, if you love the thought of making someone’s day before you make their drink, go ahead and start filling in the blanks and be prepared to be ENERGIZED!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 border-t border-green/25 pt-5 sm:pt-10">
            <div className="sm:sticky top-32 self-start">
              <h3 className="obvi-md">ENERGISTA®</h3>
            </div>
            <div>
              <h3 className="obvi-2sm mb-5">Position Summary</h3>
              <p className="mb-5">
                The part-time Energista® position is tasked with the creation of Hyper Energy Bar® drinks while embodying the mission and vision for the company. At our very core, is the belief that we don’t just strive to make your drink…we strive to make your day. Culture is critical to our success and the ability to serve up Energy in all forms and flavors is crucial to our mutual success.
              </p>
              <p className="mb-5">
                Responsibilities include preparing and serving food and beverages,
                maintaining cleanliness and safety standards, and engaging with
                customers to ensure a positive experience. We provide training and
                support for you to grow and develop in your role.
              </p>
              <p className="mb-5">
                If you're energetic, enthusiastic, and ready to join a dynamic team,
                we'd love to hear from you!
              </p>
              <h3 className="obvi-2sm mb-5">Wages & Benefits</h3>
              <ul className="mt-4 space-y-2 mb-5">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Under 29 hours/week, part-time
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Competitive Pay
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free Hyper drinks per Drink Policy
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sick Time – per applicable state laws
                </li>
              </ul>
              <h3 className="obvi-2sm mb-5">Direct Supervisor</h3>
              <p className="mb-2">
                General Manager
              </p>
              <p className="mb-5">
                Assistant Manager
              </p>
              <h3 className="obvi-2sm mb-5">Qualifications</h3>
              <ul className="mt-4 space-y-2 mb-5">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Achieve Hyper mission of Fast, Friendly and Fantastic
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Live the Hyper culture
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ability to work shifts of varying times and days
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reliable transportation
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Be counted upon to show up on time every time
                </li>
              </ul>
              <h3 className="obvi-2sm mb-5">Responsibilities and Duties</h3>
              <ul className="mt-4 space-y-2 mb-5">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Be thankful for our customers and say thanks to every one of our customers
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Be on time every time
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Be enthusiastic and greet customers promptly with a warm smile
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Follow Hyper standards/recipes for all drinks
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Receive and deliver customer orders accurately (read back to customers)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Adhere to all company policies and applicable laws
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ring up orders accurately and provide correct change
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Address comments, questions and concerns during shift. Involve Shift Lead as needed
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Involve Shift Lead before a problem grows out of control
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Music played from your phone to the speaker system must be free of explicit content
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Maintain a clean and orderly workspace. Follow cleaning procedures
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Outermost top layer of clothing must be Hyper branded apparel
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Always respect our customers, never argue
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stay up to date on features, specials, events and campaigns
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Attire should be clean and free of wrinkles
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Follow all hand washing procedures and maintain personal hygiene
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Attend meetings, events and training programs (typically at training lab or Hyper box)
                </li>
              </ul>
              <h3 className="obvi-2sm mb-5">Physical requirements</h3>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Frequent communication (verbal and non-verbal) with both team members and customers (Constant)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Paying attention and being aware of your surroundings (Frequent)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Standing and walking for up to 6 hours at a time (Constant)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Lifting, pushing, or carrying up to 50 lbs (Occasionally)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Kneeling, reaching, flexing, rotating, and bending (Occasionally)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green flex-shrink-0 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mental math for cash handling (Constant)
                </li>
              </ul>
            </div>
          </div>
          <h3 className="obvi-md text-center mt-20 mb-10">SUBMIT Your Application</h3>
          <JobApplicationComponent/>
        </div>
      </div>
      <div className="text-darkgreen -mb-2 lg:-mb-14 z-40">
        <Wave/>
      </div>
      <Footer/>
    </>
  );
}
