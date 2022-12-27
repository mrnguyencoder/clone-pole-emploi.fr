import React from 'react';
import { FcMenu } from "react-icons/fc";
import { BiUser } from "react-icons/bi";
import Logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav>
        <div className="flex justify-between items-center p-4">
            <div className="flex space-x-4">
                <FcMenu className='text-4xl' />
                <img src={Logo} className="h-10" alt="logo Pole Emploi" />
            </div>
            <div className="text-4xl">
                <BiUser />
            </div>
        </div>
    </nav>
  )
}

export default NavBar