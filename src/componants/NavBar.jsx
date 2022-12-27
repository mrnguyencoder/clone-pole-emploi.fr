import React from 'react';
import { FcMenu } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Logo from '../assets/logo.png';
import { Menu } from '@headlessui/react';

function NavBar() {
  return (
    <nav>
        <div className="flex justify-between items-center p-4 md:p-6">
            {/* Menu left */}
            <div className="flex space-x-6 md:flex-row-reverse ">
                <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <FcMenu className='text-4xl' />
                </Menu.Button>     
                <Menu.Items className="absolute space-y-4 text-slate-600 text-base mt-4 w-96 h-screen divide-y divide-gray-100 rounded-md bg-slate-50 shadow-lg focus:outline-none">
                    <div className="flex justify-between items-center text-xl">
                        <BiUser className='text-3xl text-red-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection Candidate
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <FaUserTie className='text-3xl text-blue-600'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection entreprise
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <HiOutlineUserGroup className='text-3xl text-lime-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Particulier Employeur
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
                <img src={Logo} className="h-10" alt="logo Pole Emploi" />
            </div>
            {/* Menu right */}
            <div className="text-4xl  flex justify-center items-center text-right">
            <Menu as="div" className="relative inline-block" >
                <Menu.Button className=""> 
                    <BiUser className='text-slate-500'/>
                </Menu.Button>     
                <Menu.Items className="absolute space-y-4 text-slate-600 text-base p-4 text-left right-0 mt-3 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="flex justify-between items-center text-xl">
                        <FiUser className='text-3xl text-red-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection Candidate
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <FaUserTie className='text-3xl text-blue-600'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Connection entreprise
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="flex justify-between items-center text-xl">
                        <HiOutlineUserGroup className='text-3xl text-lime-500'/>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            className={`${active && 'bg-slate-200'}`}
                            href="/"
                            >
                            Particulier Employeur
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu>
                
                <p className="hidden md:flex md:text-lg pl-2">CONNECTION</p>
            </div>
        </div>
    </nav>
  )
}

export default NavBar