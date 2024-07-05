import type { APIRoute } from "astro";

export const GET: APIRoute = (context) => {
  context.cookies.set("token", "", { httpOnly: true, path: "/" });
  return context.redirect("/");
};
