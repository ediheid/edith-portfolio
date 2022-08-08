import { createContext, useContext, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppContext = createContext();

// App Wrapper - (wrapped around App Component)
export const AppWrapper = ({ children }) => {
  // Contact form state
  let [isContactFormOpen, setIsContactFormOpen] = useState(false);

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

  // ? ContactForm functions
  const openContactFormModal = () => {
    setIsContactFormOpen(true);
  };

  const closeContactFormModal = () => {
    setIsContactFormOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isContactFormOpen,
        setIsContactFormOpen,
        openContactFormModal,
        closeContactFormModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// UseContext Function
// To be imported into any Component and called where needed for state to be passed in
// eg. useAppContext().isOpen
export const useAppContext = () => {
  return useContext(AppContext);
};
