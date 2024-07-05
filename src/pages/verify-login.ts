import { type APIContext, type APIRoute } from "astro";
import jwt from "jsonwebtoken";

export const POST: APIRoute = async ({ request, cookies }: APIContext) => {
  const formData: FormData = await request.formData();
  const username: string = formData.get("username") as string;
  const password: string = formData.get("password") as string;

  if (
    username !== "devmarcell" ||
    password !== "f12456145ae5b1f6489801e8bbfb99f8244c5546"
  ) {
    return new Response(
      JSON.stringify({ message: "Unauthorized", success: false }),
      { status: 401 }
    );
  }

  const token: string = jwt.sign(
    { username },
    import.meta.env.JWT_SECRET as string
  );

  cookies.set("token", token, { httpOnly: true, path: "/" });

  return new Response(
    JSON.stringify({ message: "Authenticated", success: true }),
    { status: 200 }
  );
};
