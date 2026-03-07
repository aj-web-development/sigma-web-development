import { NextResponse } from 'next/server';

// Way 1
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/home', request.url));
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// export const config = {
//   matcher: '/about/:path*',
// };

// Way 2
// Check documentaion for more information
// Conditional Statements
export function proxy(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    // Here rewrite shows the response of / without changing the url in browser
    return NextResponse.rewrite(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Here rewrite shows the response of /aout without changing the url in browser
    // in browser hit http://localhost:3000/dashboard -> it will show
    // /about response
    return NextResponse.rewrite(new URL('/about', request.url));
  }
}
