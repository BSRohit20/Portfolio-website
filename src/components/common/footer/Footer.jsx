import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Process", url: "Process" },
  { id: 4, name: "Portfolio", url: "Portfolio" },
  { id: 5, name: "Blog", url: "Blog" },
  { id: 6, name: "Services", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-10 pb-10 content max-2xl:px-3">
      <div className="flex justify-center items-center h-full w-full text-neutral-200">
        {/* Footer content removed */}
      </div>
    </div>
  );
};

export default Footer;
