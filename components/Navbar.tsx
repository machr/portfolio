import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/uses">Uses</Link>
      <Link href="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
