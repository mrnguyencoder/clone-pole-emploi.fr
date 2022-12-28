import React from 'react'

function Footer() {
  return (
    <footer className=' flex flex-col'>
        <div className="bg-[#2b2e30] grid grid-cols-2 md:grid-cols-4 p-8 gap-6">
            <div className="text-slate-200 space-y-3">
                <div className="">
                    <p className="">AUTRES SITES PÔLE EMPLOI</p>
                </div>
                <div className="border-4 border-black w-20"></div>
                <ul className="list-disc">
                    <li>En région</li>
                    <li>Institutionnel</li>
                    <li>Pôle emploi événements</li>
                    <li>Pôle emploi TV</li>
                    <li>Pôle emploi spectacle</li>
                    <li>Mobilité internationale</li>
                    <li>Les métiers porteurs</li>
                    <li>Emploi parlons-net</li>
                    <li>Emploi Store</li>
                    <li>Pôle emploi Salons en ligne</li>
                    <li>Emplois 2024</li>
                    <li>Services Publics +</li>
                </ul>
            </div>
            <div className="text-slate-50 space-y-3">
                <div className="">
                    <p className="">SUR POLE-EMPLOI.FR</p>
                </div>
                <div className="border-4 border-[#289dbd] w-20"></div>
                <ul className="list-disc">
                    <li>Votre pôle emploi</li>
                    <li>Foire aux questions</li>
                    <li>Info trafic</li>
                    <li>Contactez-nous</li>
                    <li>Sites utiles</li>
                    <li>Plan du site</li>
                    <li>Informations légales</li>
                    <li>Conditions générales d'utilisation</li>
                    <li>Protections des données personnelles</li>
                    <li>Cookies</li>
                    <li>Accessibilité partiellement conforme</li>
                    <li>Algorithmes</li>
                    <li>Nos partenaires</li>
                </ul>
            </div>
            <div className="text-slate-50 space-y-3">
                <div className="">
                    <p className="">CANDIDAT</p>
                </div>
                <div className="border-4 border-red-500 w-20"></div>
                <ul className="list-disc">
                    <li>Mode d'emploi, le mag qui vous simplifie le travail</li>
                    <li>Où envoyer mes bulletins de salaire</li>
                    <li>Le calendrier des paiements</li>
                    <li>Les simulateurs de calcul de vos droits et allocations</li>
                    <li>Soyez vigilants !</li>
                    <li>Votre projet professionnel</li>
                    <li>Vos recherches</li>
                    <li>Pôle emploi et vous</li>
                    <li>En formation</li>
                    <li>Découvrir le marché du travail</li>
                    <li>Information marché du travail</li>
                    <li>Annuaire des pages entreprises</li>
                </ul>
            </div>
            <div className="text-slate-50 space-y-3">
                <div className="">
                    <p className="">EMPLOYEUR</p>
                </div>
                <div className="border-4 border-[#599D78] w-20"></div>
                <ul className="list-disc">
                    <li>Conseils pour recruter</li>
                    <li>Conseils pour vos déclarations et cotisations</li>
                    <li>Rechercher des candidats en toute autonomie</li>
                    <li>Remettre une attestation employeur</li>
                    <li>Particulier employeur</li>
                    <li>Information sur le marché du travail</li>
                    <li>Annuaire des pages entreprises</li>
                    <li>Solution recrutement, le webzine du recrutement pour les entreprises</li>
                </ul>
            </div>
        </div>
        <div className="bg-[#3e4249] p-14 space-y-8">
            <div className="flex justify-center items-center">
                <button className='bg-slate-600 px-8 py-3 text-slate-50 rounded-full'>VERSION CONSTRASTEE</button>
            </div>
            <div className="flex justify-center">
                <div className="border-[0.8px] border-slate-400 w-28 "></div>
            </div>
            <div className="text-center">
                <p className="text-slate-400"> Made just to practice web development</p>
                <p className=""> </p>
                <a
                  href="https://nguyencoder.com/"
                  rel='noreferrer' target="_blank"
                  className="text-slate-400"
                >
                  © nguyencoder
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer