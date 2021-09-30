import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Kacang from "../public/beanChilliStew.jpg";

const Home: NextPage = () => {
  return (
    <body className="font-body">
      {/*Content wrapper*/}
      <div>
        <div>
          <nav>
            <div>
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <Link href="/">
                  <a>Kedai Makan</a>
                </Link>
              </h1>
            </div>
            <ul>
              <li className="font-bold text-gray-700">
                <Link href="#" passHref>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <main className="px-16 py-6 bg-gray-100">
          <div className="flex justify-center md:justify-end">
            <Link href="#">
              <a className="text-primary">Log in</a>
            </Link>
            <Link href="#">
              <a className="text-primary ml-2">Sign up</a>
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
            <div className="mt-8"></div>
            <div className="bg-white rounded overflow-hidden shadow-md relative">
              <Image
                src={Kacang}
                alt="Bean Chilli Stew"
                className="w-full h-32 md:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chilli Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className='bg-secondary-100 text-secondary-200 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b-2 border-gray-200">
            Most Popular
          </h4>
          {/* cards goes here */}
          <div className="mt-8"></div>
          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200">Load More</div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Home;
