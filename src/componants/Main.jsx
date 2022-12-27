import React from 'react'

function Main() {
  return (
    <main>
        <div className="flex justify-center items-center flex-col space-y-4 p-16">
         <p className="text-5xl">
         Entreprise
         </p>
         <div className="border-2 w-32 text-gray-900"></div>
         <p className="text-xl">Vous êtes une entreprise ou un particulier employeur ? Pôle emploi vous propose un espace dédié !</p>
         <div className="flex justify-center text-slate-50 space-x-6 pt-3">
            <button className='bg-[#4d8869] px-6 py-3 rounded-full uppercase'>entreprise</button>
            <button className='bg-[#24a29a] px-6 py-3 rounded-full uppercase'>particulier employeur</button>
        </div>
        </div>
        

    </main>
  )
}

export default Main