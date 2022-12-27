import React from 'react';
import { BsSearch } from "react-icons/bs";


function Main() {
  return (
    <main>
        <div className="flex justify-center items-center flex-col space-y-4 p-16">
            <p className="text-4xl">
                Entreprise
            </p>
            <div className="border-2 w-32 text-gray-900"></div>
            <p className="text-xl">Vous êtes une entreprise ou un particulier employeur ? Pôle emploi vous propose un espace dédié !</p>
            <div className="flex justify-center text-slate-50 space-x-6 pt-3">
                <button className='bg-[#4d8869] px-6 py-3 rounded-full uppercase'>entreprise</button>
                <button className='bg-[#24a29a] px-6 py-3 rounded-full uppercase'>particulier employeur</button>
            </div>
        </div>
        
        <div className="bg-[#e5e9ec]">
            <div className="flex flex-col md:flex-row md:justify-evenly  justify-center items-center space-y-4 p-8">
                <p className="text-4xl">Actualités de l'emploi</p>
                <div className="border-3 text-green-500 "></div>
                <div className="relation flex justify-center items-center">
                    <input type="text"
                        className='outline-none px-8 py-4'
                        placeholder='Ex: actualisation, aide à embauche..'  />
                    <BsSearch className='text-3xl absolute pr-0'/>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Main