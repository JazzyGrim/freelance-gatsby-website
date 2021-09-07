import React, { useEffect, useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import "../styles/navigation.css";

export default function Navbar() {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = event => {
    if (window.scrollY > 0) setNavShadow(true);
    else setNavShadow(false);
  };

  return (
    <nav className={navShadow ? "navShadow" : ""}>
      <div>
        <h3 id="navLogo">Mateo S.</h3>
        <ul id="navList">
          <li className="navListitem" onClick={() => scrollTo("main")}>
            Naslovnica
          </li>
          <li
            className="navListitem"
            onClick={() => scrollTo("section[name='about']")}
          >
            O Meni
          </li>
          <li
            className="navListitem"
            onClick={() => scrollTo("section[name='contact']")}
          >
            Kontakt
          </li>
        </ul>
        <button
          onClick={() => scrollTo("section[name='contact']")}
          id="navButton"
        >
          Pošaljite upit
        </button>
      </div>
    </nav>
  );
}
