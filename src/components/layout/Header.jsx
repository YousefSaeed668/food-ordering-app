"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const session = useSession();
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">
          ST PIZZA
        </Link>
        <Link href="/">Home</Link>
        <Link href="/Menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <button
            onClick={() => {
              signOut();
            }}
            className="bg-primary text-white px-8 rounded-full py-2"
          >
            Logout
          </button>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href="/login" className="">
              Signin
            </Link>
            <Link
              href="/register"
              className="bg-primary text-white px-8 rounded-full py-2"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
