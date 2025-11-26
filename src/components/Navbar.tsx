const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-6 lg:px-16 sm:px-12 flex justify-between items-center z-50 bg-light shadow-md">
      <div
        className="text-4xl font-extrabold text-green cursor-pointer font-logo-family text-stroke text-shadow-bottom"
        onClick={() => scrollToSection("introduction")}
      >
        GAMZE
      </div>
      <div className="flex gap-8">
        <button
          onClick={() => scrollToSection("introduction")}
          className="text-lg text-dark hover:text-orange transition-colors"
        >
          Introduction
        </button>
        <button
          onClick={() => scrollToSection("information")}
          className="text-lg text-dark hover:text-orange transition-colors"
        >
          Information
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
