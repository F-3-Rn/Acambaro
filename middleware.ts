export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/citas/:path*",
    "/pdf/:path*",
    "/gracias",
  ],
};
