import { Navbar } from "./Navbar";
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="md:container md:mx-auto border-t-4 py-8 mt-8">
      Copyright {currentYear}
      <Navbar />
    </footer>
  );
};

export { Footer };