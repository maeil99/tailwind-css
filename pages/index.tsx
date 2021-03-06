import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Kacang from "../public/beanChilliStew.jpg";
import NasiLemak from "../public/nasiLemak.jpg";
import RotiCanaiBanjir from "../public/rotiCanaiTsunami.jpg";
import { useState } from "react";

const Home: NextPage = () => {
  const [clickIcon, setClickIcon] = useState(false);
  return (
    <body className="font-body">
      {/*Content wrapper*/}
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <Link href="/">
                  <a className="hover:text-gray-700">Kedai Makan</a>
                </Link>
              </h1>
              <div
                className="px-4 cursor-pointer md:hidden"
                onClick={() => {
                  if (clickIcon === false) {
                    setClickIcon(true);
                  } else {
                    setClickIcon(false);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
            {clickIcon ? (
              <ul className="text-sm mt-6 md:hidden">
                <li className="font-bold text-gray-700 py-1">
                  <Link href="#" passHref>
                    <div className="px-4 flex justify-end border-r-4 border-primary">
                      <span>Home</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#" passHref>
                    <div className="px-4 flex justify-end border-r-4 border-white">
                      <span>About</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="#" passHref>
                    <div className="px-4 flex justify-end border-r-4 border-white">
                      <span>Contact</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="text-sm mt-6 hidden md:block">
              <li className="font-bold text-gray-700 py-1">
                <Link href="#" passHref>
                  <div className="px-4 flex justify-end border-r-4 border-primary">
                    <span>Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="py-1">
                <Link href="#" passHref>
                  <div className="px-4 flex justify-end border-r-4 border-white">
                    <span>About</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
              <li className="py-1">
                <Link href="#" passHref>
                  <div className="px-4 flex justify-end border-r-4 border-white">
                    <span>Contact</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <Link href="#">
              <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Log in
              </a>
            </Link>
            <Link href="#">
              <a className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
                Sign up
              </a>
            </Link>
          </div>
          <header>
            <h2 className="text-6xl text-gray-700 font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Customers</h3>
          </header>
          <div>
            <h4 className="font-bold mt-12 pb-2 border-b-2 border-gray-200">
              Latest Recipes
            </h4>
            {/* cards goes here */}
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              <div className="card hover:shadow-lg">
                <Image
                  src={Kacang}
                  alt="Bean Chilli Stew"
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Bean Chilli Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>25 mins</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <Image
                  src={NasiLemak}
                  alt="Nasi Lemak"
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">Nasi Lemak</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Maeil
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>15 mins</span>
                </div>
              </div>
              <div className="card hover:shadow-lg">
                <Image
                  src={RotiCanaiBanjir}
                  alt="Roti Canai"
                  width="250"
                  height="220"
                  className="w-full h-32 md:h-48 object-cover"
                />
                <div className="m-4">
                  <span className="font-bold">
                    Roti Canai Banjir Telur Goyang
                  </span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Luigi
                  </span>
                </div>
                <div className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-5 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>5 mins</span>
                </div>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b-2 border-gray-200">
            Most Popular
          </h4>
          {/* cards goes here */}
          <div className="mt-8"></div>
          <div className="flex justify-center">
            <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-md transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load More
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Home;
