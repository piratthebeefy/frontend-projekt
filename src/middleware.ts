import NextAuth from 'next-auth';
import { authConfig } from '../auth.config';

// middleware soubor musi byt, dle dokumentace, ... in the root of your project to
// define Middleware. For example, at the same level as pages or app, or inside src if applicable.

export default NextAuth(authConfig).auth;

// Dle dokumentace tady jde o "matching paths"
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    // Match all request paths except for the ones starting with - api (API routes), next/static (static files), _posts složka, next/image
    // (image optimization files), png (image optimization files)
    // Ta posts složka tam být musí, jinak do občas dělá bordel při vykreslení s chybou
    // ImageError: Unable to optimize image and unable to fallback to upstream image
    matcher: ['/((?!api|_next/static|_next/image|_posts|.*\\.png$).*)'],
};
