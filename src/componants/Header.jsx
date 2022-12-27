import React from 'react';
import Bg from '../assets/bg.jpeg';
import { HiOutlineBookmarkAlt, HiOutlineBriefcase, HiOutlineSearch } from "react-icons/hi";
import { HiEllipsisHorizontal, HiOutlineMapPin } from "react-icons/hi2";
import { IoMdPaper } from "react-icons/io";
import { BsVectorPen } from "react-icons/bs";


function Header() {
    const backgroundImageStyle = {
        backgroundImage: `url("${Bg}")`,
        backgroundSize: 'cover',
    }
  return (
    <div className='' 
        style={backgroundImageStyle}>
        <div className="p-12 flex flex-col gap-5 space-y-3">
            <p className="text-4xl text-slate-50 text-center md:text-6xl">1 007 036 offres d'emploi disponibles</p>
            <div className="flex justify-center gap-1 text-4xl md:text-6xl md:gap-0">
                <div className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-1">
                    <div className="flex relative items-center">
                        <span className='absolute text-gray-400 pl-2'>
                            <HiOutlineBriefcase className='text-2xl ' />
                        </span>
                        <input type="text" className='p-1 rounded-lg'/>
                    </div>
                    <div className="flex relative items-center">
                        <span className='absolute text-gray-400 pl-2'>
                            <HiOutlineMapPin className='text-2xl'/>
                        </span>
                        <input type="text"className='p-1 rounded-lg' />
                    </div>
                </div>
                <button className='bg-red-500 rounded-md text-slate-50 shadow-md'>
                    <HiOutlineSearch className='w-14 px-2'/>
                </button>
            </div>
            <p className="text-slate-50 text-center text-base md:text-xl lg:text-3xl">Rechercher des offres par région ou par secteur d’activité</p>
            
        </div>
        <div className="text-slate-50 text-base text-center p-8 md:p-12">
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="relative h-32 w-32 bg-red-500 rounded-full inline-block">
                        <p className='absolute pt-8'>ESPACE PERSONNEL</p>
                    </div>
                    <div>
                        <p>Gérer mon dossier,</p>
                        <p>Publier mon CV</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <BsVectorPen className='absolute pt-7 pl-8 text-8xl'/>
                    </span>
                    <div>
                        <p>M'inscrire, me réinscrire</p>
                        <p>(demandeur d'emploi)</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <IoMdPaper className='absolute pt-7 pl-8 text-8xl' />
                    </span>
                    <div>
                        <p>Allocations</p>
                        <p>et aides</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <HiOutlineBookmarkAlt className='absolute pt-7 pl-8 text-8xl' />
                    </span>
                    <div>
                        <p>Trouver ma</p>
                        <p>formation</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <div className="relative h-32 w-32 bg-red-500 rounded-full inline-block">
                        <p className="absolute pt-10 pl-10">EMLOI</p>
                        <p className="absolute pt-16 pl-11">Store</p>
                    </div>
                    <div>
                        <p>Explorer les services</p>
                        <p>en ligne de l’emploi</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <span className="relative h-32 w-32 bg-red-500 rounded-full inline-block">
                        <HiEllipsisHorizontal className='absolute pt-7 pl-8 text-8xl' />
                    </span>
                    <div>
                        <p>Plus de</p>
                        <p>services</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header