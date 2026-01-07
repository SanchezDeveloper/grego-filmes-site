'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";

export function LanguageToggle() {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    // 1. Define o cookie com o novo idioma (expira em 1 ano)
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    
    // 2. Atualiza a página para o servidor carregar as novas mensagens
    router.refresh(); 
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild> 
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <Languages className="h-[1.2rem] w-[1.2rem] text-foreground" />
          <span className="sr-only">Escolher idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-border">
        <DropdownMenuItem onClick={() => switchLanguage('pt')} className="cursor-pointer">
          Português (BR)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('en')} className="cursor-pointer">
          English (US)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('es')} className="cursor-pointer">
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}