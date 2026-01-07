export interface NavLink {
  name: string;
  href: string;
}

export const getNavLinks = (t: (key: string) => string): NavLink[] => [
  { name: t('home'), href: '/' },
  { name: t('grego'), href: '/grego-films' },
  { name: t('rec'), href: '/rec-producoes' },
  { name: t('social'), href: '/projetos-sociais' },
  { name: t('contact'), href: '/contacts' },
];