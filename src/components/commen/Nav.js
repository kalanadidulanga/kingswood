import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Header from "./Header";
import "./Nav.css";
import "./Header.css";
import "./Menu.css";

export default function Nav() {
  const [menu, setMenu] = useState("");
  const [background, setBackground] = useState("");

  const menuClick = () => {
    console.log("hello");
    if (menu == "active") {
      setMenu("");
      setBackground("");
    } else {
      setMenu("active");
      setBackground("active");
    }
  };

  const window = () => {
    setMenu("");
    setBackground("");
  };

  return (
    <>
      <Header></Header>
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="nav-content-1">
              <ul>
                <li>
                  <Link to="../">Home</Link>
                </li>
                <li>
                  <Link to="../about">About</Link>
                </li>
                <li>
                  <Link to="../contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="nav-content-2">
              <Link to="../">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="nav-content-3">
              <ul>
                <li>
                  <Link to="../events">Events</Link>
                </li>
                <li>
                  <Link to="../branch">Branch</Link>
                </li>
                <li>
                  <Link to="../admission">Admission</Link>
                </li>
              </ul>
            </div>
            <div className="nav-content-4">
              <div className={`menu-icon ${menu}`} onClick={menuClick}>
                <div className="menu-line menu-line-1"></div>
                <div className="menu-line menu-line-2"></div>
                <div className="menu-line menu-line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <menu className={menu}>
        <div className="menu-logo">
          <div>
            <div className="menu-logo-image">
              <img src={logo} alt="" />
            </div>
            <h1>Kingswood British Collage</h1>
          </div>
        </div>
        <div className="menu-content">
          <ul>
            <li>
              <Link to="../">Home</Link>
            </li>
            <li>
              <Link to="../about">About</Link>
            </li>
            <li>
              <Link to="../facilities">Facilities</Link>
            </li>
            <li>
              <Link to="../contact">Contact</Link>
            </li>
            <li>
              <Link to="../branch">Branch</Link>
            </li>
            <li>
              <Link to="../admission">Admission</Link>
            </li>
          </ul>

          <div className="menu-contact">
            <ul>
              <li>
                <i class="bi bi-telephone"></i>
                <p>0773838366</p>
              </li>
              <li>
                <i class="ri-map-pin-line"></i>
                <p>489, Pallama Road , Bangadeniya</p>
              </li>
              <li>
                <i class="bi bi-envelope"></i>
                <p>info@kingswoodbritish.com</p>
              </li>
            </ul>
          </div>
          <div className="menu-social-media">
            <ul>
              <li>
                <a href="">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-youtube-fill"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="menu-copyright">
            <p>
              Copyright &copy; 2024{" "}
              <a href="https://www.fuchsius.com">Fuchsius</a> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </menu>

      <div className={`menu-background ${background}`} onClick={window}></div>
    </>
  );
}
