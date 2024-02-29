import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    // You can use the pages option to specify the route for custom sign-in, sign-out, and error pages.
    // This is not required, but by adding signIn: '/login' into our pages option, the user will be redirected to our custom login page,
    // rather than the NextAuth.js default page.
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // dle tutorialu - Next, add the logic to protect your routes. This will prevent users from accessing the
        // dashboard pages unless they are logged in.
        // objekt obsahující informace o autentizovaném uživatel, objekt obsahující informace o následující URL po přesměrování.
        // dle tutorialu - The authorized callback is used to verify if the request is authorized to access a page via Next.js Middleware.
        // It is called before a request is completed, and it receives an object with the auth and request properties.
        // The auth property contains the user's session, and the request property contains the incoming request.

        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            console.log(`authorized ${isLoggedIn}`);
            const isOnHomePage = nextUrl.pathname.startsWith('/main');
            console.log(`on ${isOnHomePage}`);
            if (isOnHomePage) {
                if (isLoggedIn) return true;
                // Redirect unauthenticated users to login page
                return false;
            } else if (isLoggedIn) {
                // v případě úspěšné autentizace dojde k přesměrování na hlavní stránku
                return Response.redirect(new URL('/main', nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
