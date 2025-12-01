import { useState, useEffect } from "react";
import type { MenuItem } from "../types";
import { NAVBAR_SCROLL_OFFSET, SECTION_IDS } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { id: SECTION_IDS.INFORMATION, label: "Information" },
    { id: SECTION_IDS.EXPERIENCE, label: "Experience" },
    { id: SECTION_IDS.PROJECTS, label: "Projects" },
    { id: SECTION_IDS.CONTACT, label: "Contact" },
  ];

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const sections = menuItems.map((item) => item.id);

    const onScroll = () => {
      const scrollPos = container.scrollTop + NAVBAR_SCROLL_OFFSET;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          return;
        }
        setActive("");
      }
    };

    onScroll();
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-6 px-6 md:px-16 flex justify-between items-center z-50 bg-light shadow-md md:bg-transparent md:shadow-none">
      <div
        className={`text-4xl font-extrabold cursor-pointer font-logo-family text-stroke text-shadow-bottom transition-colors text-green ${
          active === SECTION_IDS.INFORMATION || active === SECTION_IDS.PROJECTS
            ? "md:text-light"
            : "md:text-green"
        }`}
        onClick={() => scrollToSection(SECTION_IDS.INTRODUCTION)}
      >
        GAMZE
      </div>
      <div className="flex gap-6 md:gap-8">
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 md:gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm md:text-lg text-dark hover:text-orange transition-colors ${
                active === item.id ? "border-b-2 border-orange" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dark hover:text-orange transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            {menuOpen ? (
              <>
                <span className="block w-full h-0.5 bg-dark rotate-45 translate-y-1" />
                <span className="block w-full h-0.5 bg-dark -rotate-45 -translate-y-1" />
              </>
            ) : (
              <>
                <span className="block w-full h-0.5 bg-dark" />
                <span className="block w-full h-0.5 bg-dark" />
                <span className="block w-full h-0.5 bg-dark" />
              </>
            )}
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-light shadow-lg md:hidden">
          <div className="flex flex-col py-4 px-12 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg text-dark hover:text-orange transition-colors py-2 ${
                  active === item.id ? "text-orange font-bold" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
