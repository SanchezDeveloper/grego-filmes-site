import Link from 'next/link';

// Mantivemos a estrutura de tipos exatamente como você enviou
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'outline';

interface ButtonLinkProps {
  label: string;      
  href: string;       
  size?: ButtonSize;  
  color?: ButtonColor; 
  className?: string; 
}

const ButtonLink = ({ 
  label, 
  href, 
  size = 'md', 
  color = 'primary', 
  className = "" 
}: ButtonLinkProps) => {
  
  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    // Ajustei levemente o tracking (espaçamento) para o estilo cinematográfico
    md: "px-6 py-2.5 text-base font-semibold tracking-wide",
    lg: "px-10 py-3.5 text-lg font-bold uppercase tracking-widest",
  };

  const colors: Record<ButtonColor, string> = {
    // Azul vibrante da logo (Botão principal)
    primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/20",
    // Preto com texto branco (Identidade principal)
    secondary: "bg-black text-white hover:bg-neutral-900 border border-neutral-800",
    // Branco com texto preto
    danger: "bg-white text-black hover:bg-neutral-100",
    // Estilo vazado para fundo escuro (como na imagem)
    outline: "border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm",
  };

  // Ajustei o rounded para -sm para um look mais técnico e moderno
  const baseStyles = "inline-flex items-center justify-center rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-95";

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${sizes[size]} ${colors[color]} ${className}`}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;