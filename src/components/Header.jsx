import logo from "../assets/logo.svg";
import BackgroundImage from "./BackgroundImg.jsx";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");

  const navLink = "px-10 font-sans";
  const navHover = "hover:text-black";
  const activeLink = "underline underline-offset-8 decoration-blue-200";

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <header id="home">
      <BackgroundImage url=".src/assets/Van-Gogh-portrait.jpg">
        <nav className="w-full bg-black/20 fixed shadow-md z-50">
          <div className="flex flex-wrap justify-between p-4">
            <div>
              <ul className="flex space-x-6 text-xl">
                <li>
                  <HashLink
                    smooth
                    to="/#home"
                    className={`${navLink} ${navHover} ${
                      activeTab === "home" ? activeLink : ""
                    }`}
                    onClick={() => handleTabClick("home")}
                  >
                    HOME
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#about"
                    className={`${navLink} ${navHover} ${
                      activeTab === "about" ? activeLink : ""
                    }`}
                    onClick={() => handleTabClick("about")}
                  >
                    ABOUT
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="/#works"
                    className={`${navLink} ${navHover} ${
                      activeTab === "works" ? activeLink : ""
                    }`}
                    onClick={() => handleTabClick("works")}
                  >
                    WORKS
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="">
              <img src={logo} className="w-auto h-8 mr-10" />
            </div>
          </div>
        </nav>
        <div className="flex items-end h-screen">
          <h1 className="text-8xl pl-10 mb-16">
            THE LIFE & <br />
            WORK <br />
            OF <br />
            VINCENT <br />
            VAN GOGH
          </h1>
        </div>
      </BackgroundImage>
    </header>
  );
}
