import "./styles.css";
import logoBlanco from "./nuevoLogo-Web-2-BLANCO.png";
import logoAzul from "./nuevoLogo-Web-2.png";
import { useEffect, useState } from "react";
import ContactButton from "../contact-button/ContactButton";

export const FixedNavbar = () => {
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
      if (scroll > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
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

  return (
    <>
      {isNavbarVisible && (
        <header>
          <div className="new-container">
            <nav id="navbar" className="navbar">
              <div className="navbar__logo">
                <img src={logoBlanco} alt="Logo de mi sitio web" />
              </div>
              <div className={`navbar__links ${isMobileMenuOpen ? "mobile-menu-full" : ""}`}>
                {isMobileMenuOpen ?
                  <>
                    <div className="mobile-menu-container-logo">
                      <img src={logoAzul} alt="Logo de mi sitio web" />
                    </div>
                    <lu className="mobile-menu-container-items">
                      <li className="mobile-menu-items top"><a data-scroll="home" href="#home" class="active-fixed">HOME</a></li>
                      <li className="mobile-menu-items"><a data-scroll="servicies" href="#servicies">QUE HACEMOS</a></li>
                      <li className="mobile-menu-items"><a data-scroll="areas" href="#areas">AREAS</a></li>
                      <li className="mobile-menu-items"><a data-scroll="team" href="#team">QUIENES SOMOS</a></li>
                      <ContactButton />
                    </lu>
                  </> :
                  <>
                    <a data-scroll="home" href="#home" class="active-fixed">HOME</a>
                    <a data-scroll="servicies" href="#servicies">QUE HACEMOS</a>
                    <a data-scroll="areas" href="#areas">AREAS</a>
                    <a data-scroll="team" href="#team">QUIENES SOMOS</a>
                  </>}
              </div>
              <div className="navbar__buttons">
                <ContactButton />
              </div>
              <div className="mobile-menu-icon-fixed" onClick={toggleMobileMenu}>
                {/* {isMobileMenuOpen
                  ? <div className="mobile-menu-container-logo">
                    <img src={logoAzul} alt="Logo de mi sitio web" />
                    <i className={'fas fa-times'} />
                  </div>
                  : <i className={'fas fa-bars'} />
                } */}
                <i className={`fas ${isMobileMenuOpen ? "fa-times gray" : "fa-bars"}`} />
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};
