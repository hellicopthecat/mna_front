import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";

interface IBeforLoginRouter {
  [key: string]: boolean;
}
const beforeLogin: IBeforLoginRouter = {
  "/": true,
  "/login": true,
  "/join": true,
};
export const middleware = (request: NextRequest) => {
  const cookie = cookies();
  const existsUser = cookie.get("TOKEN");
  const pathname = beforeLogin[request.nextUrl.pathname];
  if (!existsUser) {
    if (!pathname) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (pathname) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
};
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
