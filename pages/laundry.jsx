import Image from 'next/image';
import React from 'react';
import laundryImage from '../public/assets/projectimage/laundryimage.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative '>
        <div className='absolute  top-0 left-0 w-full h-[55vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          fill='fill'
          objectFit='cover'
          src={laundryImage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Laundry Hub</h2>
          <h3>React native/ Firebase   </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4 '>
          <p>Project</p>
          <h2>Overview</h2>
          <p className=''>
            This app was built using React native and mongodb. Laundry Hub provide complete
            solution for your daily laundry with your's choice to dffent kinds of options available and also
             select pickup date,pickup time &
             delivery date as well.User can create an account 
            and after that user can login to their account all the data is 
            stored in Mongodb.Once the user is loggedIn token is generated 
            & next time when the user comes to login they are automatically 
            logedin to their account without again entering all the details again.  
            
          </p>
          <a
            href='https://github.com/saurabhsingh1905/laundry'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-10 mr-8'>Code</button>
          </a>
          <a
            href='https://github.com/saurabhsingh1905/laundry'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-10'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React native
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> 
              </p>
             
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;



     