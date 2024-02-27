"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setError(false);
    setUserCreated(false);

    setCreatingUser(true);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }

    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4 ">Register</h1>

      {userCreated && (
        <div className="my-4 text-center ">
          User Created. <br /> Now Your Can{" "}
          <Link className="underline" href="/login">
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center ">
          An error has occured
          <br /> Please Try Again Later
        </div>
      )}
      <form className="block max-w-xs  mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          disabled={creatingUser}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          disabled={creatingUser}
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />
        <button type="submit" className=" " disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>

        <button className="flex items-center justify-center gap-4">
          <Image src="/google.png" alt="google" width={24} height={24} />
          Login with with google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account ?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
