"use client" 

import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar(){

  const [menuouvert, setmenuouvrt] = useState(false)

  const tooglemenu = () => {
    setmenuouvrt(!menuouvert)
  }

  return(
    <main>
       <nav className=" flex justify-between p-2 text-white outline outline-fuchsia-300" 
style={{
background: 'linear-gradient(135deg, #141e30 0%, #243b55 33%, #4a148c 66%, #7b1fa2 100%)' }}
       >
          <div className="" >
            <h1 className="lg:text-4xl md:text-2xl">&lt;Dev/&gt;</h1>
            <p className="lg:text-2xl m-2 text-sm md:text-lg ">Sino.dev</p>
          </div>
          <div className="hidden md:flex">
              <ul className="lg:flex gap-16 mt-4 hidden md:flex">
                 <Link href="/">Accueil</Link>
                 <Link href="/propos">A propos</Link>
                 <Link href="/servic">Service</Link>
                 <Link href="/contacte">Contact</Link>
              </ul>
          </div>
          <div className="mt-4 hidden md:block">
              <Button variant="outline" className="">Savoir plus</Button>
          </div>

          {/* ÉTAPE 4 : Bouton hamburger - visible UNIQUEMENT sur mobile */}

          <button
          onClick={tooglemenu}
          className="md:hidden mt-4 z-50"
          aria-label="Toggle menu"
          >
            {/* Si le menu est ouvert, on affiche X, sinon on affiche ☰ */}
            {menuouvert ? (
              <X className="w-8 h-8" />
            ): (<Menu className="w-8 h-8" />)}

          </button>
       </nav>

       {/* ÉTAPE 5 : Menu MOBILE - s'affiche quand menuOuvert est true */}
       {menuouvert && (
         <div className="md:hidden bg-gradient-to-b from-[#243b55] to-[#4a148c] text-white p-6 outline outline-fuchsia-300">
           <ul className="flex flex-col space-y-6 text-lg">
             <Link 
               href="/" 
               onClick={tooglemenu} // Ferme le menu quand on clique sur un lien
               className="hover:text-fuchsia-300 transition-colors"
             >
               Accueil
             </Link>
             <Link 
               href="/propos" 
               onClick={tooglemenu}
               className="hover:text-fuchsia-300 transition-colors"
             >
               À propos
             </Link>
             <Link 
               href="/service" 
               onClick={tooglemenu}
               className="hover:text-fuchsia-300 transition-colors"
             >
               Services
             </Link>
             <Link 
               href="/contact" 
               onClick={tooglemenu}
               className="hover:text-fuchsia-300 transition-colors"
             >
               Contact
             </Link>
             
             {/* Bouton dans le menu mobile */}
             <div className="pt-4">
               <Button variant="outline" className="w-full">
                 Savoir plus
               </Button>
             </div>
           </ul>
         </div>
       )}
    </main>
  )
}