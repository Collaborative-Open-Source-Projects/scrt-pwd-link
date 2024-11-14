import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const token = request.cookies.get("token");
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      console.log("secret", secret);

      // Verify the token using jose in Edge Middleware
      const { payload } = await jwtVerify(token.value, secret);
      console.log("payload", payload);
      if (payload) {
        return NextResponse.next();
      }
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard",
};
