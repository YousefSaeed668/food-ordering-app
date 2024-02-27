import Link from "next/link";
function Header() {
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
        <Link href="/login" className="">
          Login
        </Link>
        <Link
          href="/register"
          className="bg-primary text-white px-8 rounded-full py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
