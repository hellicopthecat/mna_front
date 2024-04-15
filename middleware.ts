import {cookies} from "next/headers";
import {NextRequest} from "next/server";

interface IBeforLoginRouter {
  [key: string]: boolean;
}
const beforeLogin: IBeforLoginRouter = {
  "/": true,
  login: true,
  join: true,
};
export const middleware = (request: NextRequest) => {
  const cookie = cookies();
  const existsUser = cookie.get("TOKEN");
  const pathname = request.nextUrl.pathname;
};
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
