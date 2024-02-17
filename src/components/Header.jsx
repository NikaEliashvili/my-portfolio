import React from "react";
import { HashLink } from "react-router-hash-link";
import { LuMenu } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
export default function Header() {
  const [windowWidth, setWindowWidth] = React.useState(
    window.innerWidth
  );
  const [isMenuOn, setMenuOn] = React.useState(false);
  const [isClickedBtn, setIsClickedBtn] = React.useState(false);
  if (windowWidth > 650 && isMenuOn) {
    setMenuOn(false);
    setIsClickedBtn(false);
  }

  function menuShow() {
    setIsClickedBtn((prev) => !prev);
    setMenuOn((prev) => !prev);
  }

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  function closeNavbar() {
    setMenuOn(false);
  }

  return (
    <header>
      <div className="logo">
        <HashLink to="/">Nika</HashLink>
        {/* <img src={reactLogo} alt="" /> */}
      </div>
      {windowWidth <= 650 ? (
        <button className="header-btn" onClick={menuShow}>
          {isClickedBtn ? <FaXmark /> : <LuMenu />}
        </button>
      ) : null}
      {windowWidth > 650 ? (
        <nav className="nav">
          <ul className={`nav__list`}>
            <li className="nav__item">
              <HashLink to="/" className="nav__link">
                Home
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink to="/#services" className="nav__link">
                Services
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink to="/#about" className="nav__link">
                About
              </HashLink>
            </li>
            <li className="nav__item">
              <HashLink to="/#work" className="nav__link">
                Projects
              </HashLink>
            </li>
          </ul>
        </nav>
      ) : (
        isMenuOn && (
          <nav className="nav onClick">
            <ul className={`nav__list onClick`}>
              <li className="nav__item">
                <HashLink
                  onClick={closeNavbar}
                  to="/"
                  className="nav__link"
                >
                  Home
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink
                  onClick={closeNavbar}
                  to="/#services"
                  className="nav__link"
                >
                  Services
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink
                  onClick={closeNavbar}
                  to="/#about"
                  className="nav__link"
                >
                  About
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink
                  onClick={closeNavbar}
                  to="#work"
                  className="nav__link"
                >
                  Projects
                </HashLink>
              </li>
            </ul>
          </nav>
        )
      )}
    </header>
  );
}
