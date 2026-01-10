'use client'

import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ModeToggle } from "./ModeToggle";
import { getNavLinks } from "@/app/utils/navigations";

export default function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  //bloqueia scroll quando menu está aberto
  useEffect(() => {
    if(isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return(
    <nav className="fixed w-full bg-background/70 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">

        {/* Logo */}
        <Link 
          href="/"
          className="text-2xl font-black tracking-tighter z-60"
        >
          <Image 
            src="/assets/brand/logopreta.png"
            width={80}
            height={80}
            alt="Enterprise"
            className="block dark:hidden"
          />
          <Image 
            src="/assets/brand/logobranca.png"
            width={80}
            height={80}
            alt="Enterprise"
            className="hidden dark:block"
          />
        </Link>

        {/* Botão hambúrguer (Sempre Visível) */}
        <button
          onClick={toggleMenu}
          className="group relative flex flex-col justify-center items-center w-12 h-12 z-60 focus:outline-none"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {/* Barra Superior */}
          <div className={`h-0.5 w-8 bg-foreground rounded-full transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-0,75' : '-translate-y-1.5'}`} />
          
          {/* Barra Inferior */}
          <div className={`
            h-0.5 w-8 bg-foreground rounded-full transition-all duration-500 ease-in-out
            ${isOpen ? '-rotate-45 -translate-y-0.75' : 'translate-y-1.5'}
          `} />
        </button>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center  h-screen space-y-8 text-3xl font-bold tracking-tight mt-14 bg-background/95">
          
          {getNavLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className={`relative group transition-all duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                {link.name}
                
                {/* Linha Azul Sutil (Aparece apenas se estiver na página ou no hover) */}
                <span className={`
                  absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-500
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `} />
              </Link>
            );
          })}

          {/* Rodapé do Menu */}
          <div className="cursor-default pt-10 text-sm font-normal text-purple-500/20 uppercase tracking-widest">
            © {new Date().getFullYear()} SanchezDev - Sites e Sistemas
          </div>

          {/* Toggle Language & toggle theme */}
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}