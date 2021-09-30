import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Kacang from "../public/beanChilliStew.jpg";

const Home: NextPage = () => {
  return (
    <body className='font-body'>
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
        <main className="px-16 py-6">
          <div>
            <Link href="#">
              <a className='text-primary'>Log in</a>
            </Link>
            <Link href="#">
              <a className='text-primary'>Sign up</a>
            </Link>
          </div>
          <header>
            <h2 className="text-6xl text-gray-700 font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Customers</h3>
          </header>
          <div>
            <h4 className="font-bold mt-12 pb-2 border-b-2 border-gray-200">Latest Recipes</h4>
            {/* cards goes here */}
            <div className="mt-8"></div>
            <div>
              <Image
                src={Kacang}
                alt="Bean Chilli Stew"
                width="150"
                height="100"
              />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b-2 border-gray-200">Most Popular</h4>
          {/* cards goes here */}
          <div className="mt-8"></div>
          <div>
            <div className='bg-secondary-100 text-secondary-200'>Load More</div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Home;
