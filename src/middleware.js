export default function onRequest(context, next) {
  //   const cookie = context?.request?.headers.get("cookie");
  //TODO: Verify this code
  if (context.path === "/admin") {
    if (!context.cookies.has("cookie")) {
      context.response.redirect("/login");
    }
  }
  if (context.path === "/login") {
    if (context.cookies.has("cookie")) {
      context.response.redirect("/admin");
    }
  }
  return next();
}
