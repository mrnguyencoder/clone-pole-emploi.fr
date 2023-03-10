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
            <div className="flex gap-1 md:gap-0 md:justify-center">
                <div className="w-full md:max-w-md flex flex-col gap-2 md:flex-row md:justify-center md:gap-0">
                    <div className="flex">
                        <div className="text-3xl bg-white rounded-l-lg">
                            <HiOutlineBriefcase className='h-14 text-gray-400 ml-3' />
                        </div>
                        <input type="text" className='w-full outline-none px-4 py-4'
                        placeholder='Métier, compétence, mot-clé ...'
                        />
                    </div>
                    <div className="flex">
                        <div className='text-3xl bg-white rounded-l-lg md:rounded-none md:border-l-2'>
                            <HiOutlineMapPin className='h-14 text-gray-400 ml-3'/>
                        </div>
                        <input type="text"className='w-full outline-none px-4 py-4'
                            placeholder='Lieu de traival' />
                    </div>
                </div>
                <button className='bg-red-500 rounded-r-lg text-slate-50 shadow-md'>
                    <HiOutlineSearch className='w-16 px-2'/>
                </button>
            </div>
            <p className="text-slate-50 text-center text-base md:text-xl lg:text-3xl">Rechercher des offres par région ou par secteur d’activité</p>
            
        </div>
        <div className="text-slate-50 text-base text-center p-8 md:p-12">
            <div className="flex justify-around items-center">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="relative h-28 w-28 bg-red-500 rounded-full inline-block">
                        <p className='absolute pt-8'>ESPACE PERSONNEL</p>
                    </div>
                    <div>
                        <p>Gérer mon dossier,</p>
                        <p>Publier mon CV</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-28 w-28 bg-red-500 rounded-full inline-block">
                        <BsVectorPen className='absolute pt-9 pl-9 text-7xl'/>
                    </span>
                    <div>
                        <p>M'inscrire, me réinscrire</p>
                        <p>(demandeur d'emploi)</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-28 w-28 bg-red-500 rounded-full inline-block">
                        <IoMdPaper className='absolute pt-9 pl-9 text-7xl' />
                    </span>
                    <div>
                        <p>Allocations</p>
                        <p>et aides</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <span className="h-28 w-28 bg-red-500 rounded-full inline-block">
                        <HiOutlineBookmarkAlt className='absolute pt-9 pl-9 text-7xl' />
                    </span>
                    <div>
                        <p>Trouver ma</p>
                        <p>formation</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center space-y-4">
                    <div className="relative h-28 w-28 bg-red-500 rounded-full inline-block">
                        <p className="absolute pt-8 pl-8">EMLOI</p>
                        <p className="absolute pt-12 pl-9">Store</p>
                    </div>
                    <div>
                        <p>Explorer les services</p>
                        <p>en ligne de l’emploi</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <span className="relative h-28 w-28 bg-red-500 rounded-full inline-block">
                        <HiEllipsisHorizontal className='absolute pt-3 pl-4 text-8xl' />
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