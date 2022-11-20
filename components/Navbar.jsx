import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-gray-50 shadow mt-4" >
      <div className="flex justify-end items-center px-4 mx4">
        <Link className="py-3 md:py-5 md:block" href="/">Home</Link>
        <Link className="py-3 md:py-5 md:block" href="/about">About</Link>
        <Link className="py-3 md:py-5 md:block" href="/uses">Uses</Link>
        <Link className="py-3 md:py-5 md:block" href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
