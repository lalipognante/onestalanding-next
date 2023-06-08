import "./styles.css";
import logoBlanco from "./logoBlanco.png"
import logoAzul from "./logoAzul-sinFondo.png"
import { useEffect, useRef, useState } from "react";
import ContactButton from "../contact-button/ContactButton";

export const Navbar2 = () => {
  // const lastScrollTop = useRef(0);

  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       var { pageYOffset } = window;
  //       if (pageYOffset > lastScrollTop.current) {
  //         // downward scroll
  //         setIsNavbarVisible(false);
  //       } else if (pageYOffset < lastScrollTop.current) {
  //         // upward scroll
  //         setIsNavbarVisible(true);
  //       } // else was horizontal scroll
  //       lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
  //     },
  //     { passive: true }
  //   );
  // }, []);

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

  const [isNavbarVisible2, setIsNavbarVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const heroTop = heroRect.top;
        const heroBottom = heroRect.bottom;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + window.innerHeight;

        setIsNavbarVisible(scrollTop <= heroTop && scrollBottom >= heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${isNavbarVisible2 ? "fixed" : ""}`}>
        <img src={isNavbarVisible2 ? logoBlanco : logoAzul} alt="Logo de mi sitio web"/>
        <div className="nav-items">
          <a href="/">HOME</a>
          <a href="/">QUE HACEMOS</a>
          <a href="/">AREAS</a>
          <a href="/">QUIENES SOMOS</a>
          <ContactButton />
        </div>
      </nav>
    </>
  );
};
