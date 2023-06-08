import "./styles.css";
import logoBlanco from "./logoBlanco.png";
// import logoAzul from "./logoAzul-sinFondo-recortado.png";
import logoAzul from "./logoMasChicoAzul.png";
import { useEffect, useState } from "react";
import ContactButton from "../contact-button/ContactButton";

export const Navbar3 = () => {
  // EL MEJOR
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isVisible = window.pageYOffset === 0;
  //     setIsNavbarVisible(isVisible);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  // opcion 2 - header sticky
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scroll < 600 || scroll + windowHeight >= documentHeight) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const resetLinks = () => {
    navLinks.forEach((link) => link.classList.remove("active"));
  };

  const handleScroll = () => {
    const { pageYOffset } = window;

    sections.forEach((section) => {
      const { id, offsetTop, clientHeight } = section;
      const offset = offsetTop - 1;

      if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
        resetLinks();
        navLinks.forEach((link) => {
          if (link.dataset.scroll === id) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  document.addEventListener("scroll", handleScroll);

  return (
    <>
    {!isNavbarVisible && (
      <nav className={`${isNavbarVisible ? "fixed" : "show"}`}>
        <img src={isNavbarVisible ? logoBlanco : logoAzul} alt="Logo de mi sitio web"/>
        <div className={`nav-items ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
          <a data-scroll="home" href="#home" class="active">HOME</a>
          <a data-scroll="servicies" href="#servicies">QUE HACEMOS</a>
          <a data-scroll="areas" href="#areas">AREAS</a>
          <a data-scroll="team" href="#team">QUIENES SOMOS</a>
          <ContactButton />
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
        </div>
      </nav>
    )}
    </>
  );
};
