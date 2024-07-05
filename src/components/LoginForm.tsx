import React from "react";

export default function LoginForm() {
  const [responseMessage, setResponseMessage] = React.useState<string>("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: FormData = new FormData(e.target as HTMLFormElement);
    const res: Response = await fetch("/verify-login", {
      method: "POST",
      body: formData,
    });
    if (res.status === 401) {
      setResponseMessage("Acesso não autorizado");
    }
    if (res.ok) {
      setResponseMessage("Autorizado. Redirecionando...");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 1000);
    }
  }
  return (
    <form onSubmit={submit}>
      <div>
        <div>
          <div>
            <p>Logar</p>
            <p>Insira seu e-mail e senha para logar</p>
          </div>
          <div>
            <div>
              <label htmlFor="username">Email</label>
              <input name="username" type="text" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" type="password" placeholder="******" />
            </div>
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </form>
  );
}
