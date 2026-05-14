import { useEffect, useState } from "react";

import Container from "./Container";

import resumePDF from "../../assets/resume/pavan_resume.pdf";

const navItems = ["About", "Skills", "Projects", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${
          scrolled
            ? `
              backdrop-blur-2xl
              bg-black/20
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <Container>
        <nav
          className="
            mt-6
            glass
            neon-border
            rounded-2xl
            px-6
            py-4
            flex
            items-center
            justify-between
            transition-all
            duration-500
          "
        >
          {/* LOGO */}
          <div
            className="
              font-black
              text-xl
              gradient-text
              tracking-wide
            "
          >
            Pavan Adapa
          </div>

          {/* NAV LINKS */}
          <ul
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-zinc-300
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* RESUME BUTTON */}
          <a
            href={resumePDF}
            download
            className="
              glass
              px-5
              py-2
              rounded-xl
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Resume
          </a>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
