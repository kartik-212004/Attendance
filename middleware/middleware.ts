import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/signin",
  },
});

export const config = {
  matcher: [
    // Protected routes that require authentication
    "/dashboard/:path*",
    "/profile/:path*",
    // Add more protected routes as needed
  ],
};