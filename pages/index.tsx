import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Kacang from "../public/beanChilliStew.jpg";

const Home: NextPage = () => {
  return (
    <>
      {/*Content wrapper*/}
      <div>
        <div>
          <nav>
            <div>
              <h1 className='font-bold uppercase'>
                <Link href="/">
                  <a>Kedai Makan</a>
                </Link>
              </h1>
            </div>
            <ul>
              <li className='font-bold text-gray-700'>
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
        <main>
          <div>
            <Link href="#">
              <a>Log in</a>
            </Link>
            <Link href="#">
              <a>Sign up</a>
            </Link>
          </div>
          <header>
            <h2 className='text-6xl text-gray-700 font-semibold'>Recipes</h2>
            <h3 className='text-2xl font-semibold'>For Customers</h3>
          </header>
        </main>
        <div>
          <h4 className='font-bold'>Latest Recipes</h4>
          {/* cards goes here */}
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
        <h4 className='font-bold'>Most Popular</h4>
        {/* cards goes here */}
        <div></div>
        <div>
          <div>Load More</div>
        </div>
      </div>
    </>
  );
};

export default Home;
