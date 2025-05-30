import React, { useEffect, useState, useContext } from 'react';
import './NavBar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import sunIcon from "../../../public/assets/images/nightIcon.svg";  
import moonIcon from "../../../public/assets/images/sun.svg";
import { ThemeContext } from '../../context/ThemeContext';

const NavBar = ({ name, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: "home", ref: refs.home, name: "Home" },
    { id: "about", ref: refs.about, name: "About me" },
    { id: "education", ref: refs.education, name: "Education" },
    { id: "project", ref: refs.project, name: "Projects" },
    { id: "contact", ref: refs.contact, name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const current = sections[i].ref.current;
        const next = sections[i + 1]?.ref.current;

        if (
          current?.offsetTop !== undefined &&
          scrollPos >= current.offsetTop &&
          (!next?.offsetTop || scrollPos < next.offsetTop)
        ) {
          setActiveIndex(i);
          break;
        }
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="container">
      <nav className={`${theme === 'light' ? 'nav-light' : 'nav-dark'}`}>
        <p>{name}</p>

        <ul className="big-scr-ul">
          {sections.map((section, index) => (
            <li key={section.id}>
             <a
  href="#"
  className={activeIndex === index ? "active" : ""}
  onClick={(e) => {
    e.preventDefault(); 
    section.ref.current?.scrollIntoView({ behavior: "smooth" });
    
  }}
>
  {section.name}
</a>

            </li>
          ))}
        </ul>

        <GiHamburgerMenu
          className={`burger ${isOpen ? "open" : "hidden"} ${theme === 'light' ? 'burger-light' : 'burger-dark'}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className={`menue ${isOpen ? "open" : "hidden"} ${theme === 'light' ? 'menue-light' : 'menue-dark'}`}>
          <IoMdClose className="close-icon" onClick={() => setIsOpen(!isOpen)} />
          <ul className="mobile-menu">
            {sections.map((section, index) => (
              <li key={section.id}>
              <a
  href="#"
  className={activeIndex === index ? "active" : ""}
  onClick={(e) => {
    e.preventDefault(); 
    section.ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); 
  }}
>
  {section.name}
</a>

              </li>
            ))}
          </ul>

          <div className={`switche-mode ${theme === 'light' ? 'switche-mode-light' : 'switche-mode-dark'}`} onClick={toggleTheme}>
            <p>dark mode</p>
            <div className="container-shape">
              <div className="body-switch">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        </div>

        <img
          src={theme === 'light' ? sunIcon : moonIcon}
          alt="Theme Icon"
          className="icon"
          onClick={toggleTheme}
        />
      </nav>
    </div>
  );
};

export default NavBar;
