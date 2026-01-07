import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'pt', 
  // Used when no locale matches
  localePrefix: 'never'
});