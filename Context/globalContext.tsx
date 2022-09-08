import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

interface GlobalContextProps {
  contactOpen: boolean;
  setContactOpen: (contactOpen: boolean) => void;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  contactOpen: false,
  setContactOpen: () => {},
});

export const GlobalContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // ?  Global Window events
  useEffect(() => {
    //  Initialise AOS
    AOS.init();

    // Todo: Seperate nav for web and art
    // Closes mobile nav dropdown if it is open and the user scrolls down the page past 100px
    // window.onscroll = function () {
    //   if (window.scrollY > 100) {
    //     setIsNavOpen(false);
    //   }
    // };

    // Scroll to top on browser refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    // ! (Page needs to be rendered before accessing window)
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        contactOpen: isOpen,
        setContactOpen: setIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
