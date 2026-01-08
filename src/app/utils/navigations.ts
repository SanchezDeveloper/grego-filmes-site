export interface NavLink {
  name: string;
  href: string;
}

export const getNavLinks: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Grago Filmes', href: '/grego-films' },
  { name: 'Rec Produções', href: '/rec-producoes' },
  { name: 'Projetos Sociais', href: '/projetos-sociais' },
  { name: 'Contatos', href: '/contacts' },
];