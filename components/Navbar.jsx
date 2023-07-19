import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div
        className="flex justify-between items-center w-full h-full
       px-2 2xl:px-16"
      >
        <Image
          src="/../public/assets/logo.png"
          alt="saurabh logo"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Contact</Link>
            </li>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70">
        <div
          className=" fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]
         h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                alt="saurabh logo"
                width="84"
                height="35"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 font-semibold" >
            <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something together
              </p>   
              </div>
          </div>
          <div py-4 flex flex-col>
          <ul className='uppercase font-semibold'>
              <Link href='/'>
                <li  className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li  className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li  className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li  className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/resume'>
                <li  className='py-4 text-sm'>
                  Resume
                </li>
              </Link>
              <Link href='/#contact'>
                <li  className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-8'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                 
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;