import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

interface GlobalContextProps {
  contactOpen: boolean;
  setContactOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openContactFormModal: () => void;
  closeNav: () => void;
  navVisible: boolean;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  contactOpen: false,
  setContactOpen: () => {},
  navOpen: false,
  setNavOpen: () => {},
  openContactFormModal: () => {},
  closeNav: () => {},
  navVisible: true,
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState(true);

  // ? Functions
  const openContactFormModal = () => {
    setIsContactOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  // ?  Global Window events
  useEffect(() => {
    //  Initialise AOS
    AOS.init();

    // Close mobile nav dropdown if it is open and the user scrolls down the page past 100px
    // !
    // Todo: Crate same for art page view nav dropdown when built
    window.onscroll = function () {
      if (window.scrollY > 100) {
        setIsNavOpen(false);
      }
    };

    // Scroll to top on browser refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    // (Page needs to be rendered before accessing window)
  }, []);

  // ? Hide nav bar on scroll down and display on scroll up
  const handleScroll = () => {
    const currentPosition = window.scrollY;

    setVisible(prevScrollPos > currentPosition || currentPosition < 20);

    setPrevScrollPos(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  // ? Stops scrolling on site whenever contact modal is open
  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <GlobalContext.Provider
      value={{
        contactOpen: isContactOpen,
        setContactOpen: setIsContactOpen,
        navOpen: isNavOpen,
        setNavOpen: setIsNavOpen,
        openContactFormModal: openContactFormModal,
        closeNav: closeNav,
        navVisible: visible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
