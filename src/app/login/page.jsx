"use client";
import { signIn } from "next-auth/react";

import Image from "next/image";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgess, setLoginInProgress] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Login</h1>

      <form className="block max-w-xs  mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          disabled={loginInProgess}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          disabled={loginInProgess}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button type="submit" disabled={loginInProgess}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>

        <button className="flex items-center justify-center gap-4">
          <Image src="/google.png" alt="google" width={24} height={24} />
          Login with with google
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
