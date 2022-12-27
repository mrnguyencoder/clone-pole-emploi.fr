import React from 'react';
import { FcMenu } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Logo from '../assets/logo.png';
import { Menu } from '@headlessui/react';

function NavBar() {
  return (
    <nav>
        <div className="flex justify-between items-center p-4 md:p-6">
            <div className="flex space-x-6 md:flex-row-reverse ">
                <FcMenu className='text-4xl' />
                <img src={Logo} className="h-10" alt="logo Pole Emploi" />
            </div>
            <div className="text-4xl  flex justify-center items-center text-right">
            <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <BiUser className='text-gray-600'/>
                </Menu.Button>     
                <Menu.Items className="absolute text-slate-600 text-base text-left right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                    {({ active }) => (
                        
                        <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/"
                        >
                        Connection Candidate
                        </a>
                        
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/"
                        >

                        Connection entreprise
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/"
                        >
                        Connection Particulier Employeur
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
                
                <p className="hidden md:flex md:text-lg pl-2">CONNECTION</p>
            </div>
        </div>
    </nav>
  )
}

export default NavBar