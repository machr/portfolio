import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="md:container md:mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
