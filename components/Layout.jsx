import { Navbar } from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
