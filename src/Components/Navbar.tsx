import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import logoDark from "../assets/logo_dark.svg";
import logoLight from "../assets/logo_light.svg";
import { useTheme } from "../Context/useTheme";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Participation", id: "participation" },
  { label: "Contact", id: "contact" },
];

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-2 shadow-sm shadow-slate-200/70 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-slate-950/40">
      <button
        type="button"
        aria-label="Switch to light theme"
        onClick={() => setTheme("light")}
        className={`grid size-7 place-items-center rounded-full text-base transition-colors ${
          isDark
            ? "text-slate-500 hover:text-blue-300"
            : "text-blue-600"
        }`}
      >
        <FiSun aria-hidden="true" />
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle between dark and light mode"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative h-7 w-12 rounded-full p-0.5 transition-colors ${
          isDark
            ? "bg-blue-500"
            : "bg-slate-200"
        }`}
      >
        <span
          className={`block size-6 rounded-full bg-white shadow-md shadow-slate-950/20 transition-transform duration-300 ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      <button
        type="button"
        aria-label="Switch to dark theme"
        onClick={() => setTheme("dark")}
        className={`grid size-7 place-items-center rounded-full text-base transition-colors ${
          isDark
            ? "text-blue-300"
            : "text-slate-400 hover:text-blue-600"
        }`}
      >
        <FiMoon aria-hidden="true" />
      </button>
    </div>
  );
};

const Navbar = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-sm shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/40">
      <nav className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex shrink-0 items-center"
        >
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Naveen.dev"
            className="h-10 w-auto"
          />
        </button>

        <div className="hidden justify-center md:flex">
          <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1 shadow-inner shadow-slate-200/80 dark:bg-slate-900 dark:shadow-slate-950/60">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 lg:px-5 ${
                activeSection === item.id
                  ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                  : "text-slate-700 hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <ThemeSwitch />

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/85 text-slate-700 shadow-sm transition-all md:hidden dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-100"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 px-5 py-3 shadow-lg md:hidden dark:border-white/10 dark:bg-slate-950/95">
          <div className="mx-auto grid max-w-6xl gap-2 rounded-3xl bg-slate-100 p-2 dark:bg-slate-900">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  activeSection === item.id
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-700 hover:bg-white/80 dark:text-slate-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
