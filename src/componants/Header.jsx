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
        <div className="p-12 flex flex-col gap-5">
            <p className="text-4xl text-slate-50 text-center md:text-6xl">1 007 036 offres d'emploi disponibles</p>
            <div className="flex justify-center gap-1 text-4xl md:text-6xl">
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
                <button className='bg-red-500 rounded-md text-slate-50'>
                    <HiOutlineSearch />
                </button>
            </div>
            <p className="text-slate-50 text-center text-base md:text-xl lg:text-3xl">Rechercher des offres par région ou par secteur d’activité</p>
            
        </div>
        <div className="text-slate-50 text-base text-center grid grid-cols-2 w-full">
            <div className="flex gap-8 flex-wrap">
                <div className="flex flex-col items-center justify-center">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">ESPACE PERSONNEL</span>
                    <p>Gérer mon dossier,</p>
                    <p>Publier mon CV</p>
                </div>
                <div className="">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <BsVectorPen />
                    </span>
                    <p>M'inscrire, me réinscrire</p>
                    <p>(demandeur d'emploi)</p>
                </div>
                <div className="">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <IoMdPaper />
                    </span>
                    <p>Allocations et aides</p>
                </div>
                <div className="">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <HiOutlineBookmarkAlt />
                    </span>
                    <p>Trouver ma</p>
                    <p>formation</p>
                </div>
                <div className="">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">EMLOI Store</span>
                    <p>Explorer les services en ligne de l’emploi</p>
                </div>
                <div className="">
                    <span className="h-32 w-32 bg-red-500 rounded-full inline-block">
                        <HiEllipsisHorizontal />
                    </span>
                    <p>Plus de services</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header