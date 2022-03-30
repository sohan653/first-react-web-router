import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
const Header = () => {
    const [open,setOpen]=useState(false)
    return (
      
        <div className='relative'>
            <nav onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
           {open? <XIcon></XIcon>:<MenuIcon ></MenuIcon>} 
            </nav>
            <ul className={`md:flex bg-indigo-300 w-full justify-center absolute md:static ${open ? 'top-6': 'top-[-120px]'}`}>
               <CustomLink className='mr-2 p-3' to="">Home</CustomLink>
            <CustomLink className='mr-2 p-3' to="Login">Login</CustomLink>
            <CustomLink className='mr-2 p-3' to="Huku">Chart</CustomLink>
            <CustomLink className='mr-2 p-3' to="information">About</CustomLink>
            <CustomLink className='mr-2 p-3' to="post">Post</CustomLink>

         </ul>
        </div>
    );
};

export default Header;
