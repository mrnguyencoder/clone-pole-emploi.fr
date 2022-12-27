import React from 'react';
import { BsSearch } from "react-icons/bs";
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';


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
        
        <div className="bg-[#e5e9ec] bg-cover">
            <div className="flex flex-col md:flex-row md:justify-evenly  justify-center items-center space-y-4 p-8">
                <p className="text-4xl">Actualités de l'emploi</p>
                <div className="border-2 w-32 text-[#000] "></div>
                <div className="flex justify-center items-center">
                    <input type="text"
                        className='outline-none px-8 py-4 rounded-l-2xl'
                        placeholder='Ex: actualisation, aide à embauche..'  />
                    <submit>
                        <BsSearch className='text-2xl p-1 bg-gray-500 text-slate-50  h-14 w-9 rounded-r-2xl'/>
                    </submit>
                </div>
            </div>

            <div className="border bg-slate-100 m-8 shadow-xl md:flex md:justify-evenly">
                <div className="flex p-6 border-b-2 md:border-r-2">
                    <div className="">
                        <img src={image1} alt="" className='h-36' />
                    </div>
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-2xl text-yellow-600">Tous vigilants !</p>
                        <p className="">Consultez les arnaques et tentatives de fraude en cours.</p>
                        <div className=""><button className='bg-slate-400 px-6 py-2 rounded-full'>EN SAVOIR PLUS</button></div>
                    </div>
                </div>
                <div className="flex p-6">
                    <div className="flex flex-col space-y-2 px-4">
                        <p className="text-2xl text-yellow-600">En direct des régions !</p>
                        <p className="">Des actualités, des événements, des opportunités d'emploi et de formation près de chez vous.</p>
                        <div className=""><button className='bg-slate-400 px-6 py-2 rounded-full'>L'ACTU RÉGION</button></div>
                    </div>
                    <div className="">
                        <img src={image2} alt="" className='h-36' />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border bg-slate-100 m-8 shadow-xl">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">Votre actualisation en ligne évolue pour plus de simplicité !</p>
                    <p className="text-lg text-gray-700">L’actualisation mensuelle en ligne évolue pour plus de simplicité. Retrouvez ces évolutions sur l’application mobile « Mon Espace - Pôle emploi » et sur le site de Pôle emploi.</p>
                   </div>
                   <img src={image3} alt="" /> 
                </div>
                <div className="border bg-slate-100 m-8 shadow-xl">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">Métiers de la réparation d’électroménager : Fnac-Darty forme et recrute ses futurs techniciens</p>
                    <p className="text-lg text-gray-700">Saviez-vous que la réparation des appareils électroménagers est une filière d’avenir ? Pour former ses futurs techniciens réparateurs, Fnac Darty a ouvert son propre CFA à Metz Ennery. Très bientôt, d’autres CFA ouvriront à Marseille, Paris, en Ile-de- France et à Nice.</p>
                   </div>
                   <img src={image4} alt="" /> 
                </div>
                <div className="border bg-slate-100 m-8 shadow-xl">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">Devenez technicien supérieur principal du développement durable !</p>
                    <p className="text-lg text-gray-700">Les inscriptions aux concours sont possibles jusqu'au 6 janvier 2023. Une fois reçu(e) au concours, vous pourrez agir pour favoriser les transports propres, aménager les villes, développer le logement, économiser l’énergie, gérer les ressources, maîtriser l’urbanisation ou prévenir les risques naturels, tout en protégeant les milieux naturels.</p>
                   </div>
                   <img src={image5} alt="" /> 
                </div>
                <div className="border bg-slate-100 m-8 shadow-xl">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">Recherche d'emploi - L'aide au déplacement</p>
                    <p className="text-lg text-gray-700">Vous vous rendez à un entretien d’embauche, vous participez à un concours public, un examen certifiant ou à une immersion professionnelle ? Dans le cadre de votre recherche d’emploi vous avez peut-être droit à l’aide à la mobilité de Pôle emploi.</p>
                   </div>
                   <img src={image6} alt="" /> 
                </div>
                <div className="border bg-slate-100 m-8 shadow-xl flex-col justify-between">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">12 métiers qui font bouger !</p>
                    <p className="text-lg text-gray-700">Vous aimez bouger dans votre quotidien et vous voulez qu'il en soit de même dans votre vie professionnelle ? Voici 12 idées de métiers.</p>
                   </div>
                   <img src={image7} alt="" /> 
                </div>
                <div className="border bg-slate-100 m-8 shadow-xl flex flex-col justify-between">
                   <div className="p-8 space-y-4">
                    <p className="text-3xl text-green-600 hover:text-green-500">Vivez les JOP Paris 2024 au premier rang : profitez des formations rémunérées dans la sécurité privée !</p>
                    <p className="text-lg text-gray-700">Dans le cadre des Jeux Olympiques et Paralympiques de 2024, les métiers de la sécurité recrutent fortement en Ile-de-France. 25 000 postes sont à pourvoir. Formez-vous !</p>
                   </div>
                   <img src={image8} alt="" /> 
                </div>
            </div>
        </div>

    </main>
  )
}

export default Main