import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../Contex/ContexToken";
import { useNavigate } from "react-router-dom";
import LogoImg from './np12blue-retina.webp'
import addImg from './newspaper-rec728.jpg'
import Style from "./Navbar.module.css";

export default function Navbar() {
  const { getToken } = useContext(TokenContext);
  const [userToken, SetUserToken] = useState(null);
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("access_token");
    SetUserToken(null);
    navigate("/Login");
  }

  useEffect(() => {
    async function extToken() {
      const decodeToken = await getToken();
      SetUserToken(decodeToken);
    }
    if (localStorage.getItem("access_token")) {
      extToken();
    } else {
      SetUserToken(null);
    }
  }, [getToken]);

  return (
    <>
    <div className={`${Style.shado}`}>
      <div className={`container w-75 m-auto`}>
        <div className="row mt-3">
          <div className="col-md-4">
            <img src={LogoImg} alt="Logo Img" className="w-100" />
          </div>
          <div className="col-md-8 text-center"> 
            <span className={Style.addTitel}>- Advertisement -</span>
            <img src={addImg} alt="Adds" className="w-100"/>
          </div>
        </div>
        <nav className={`navbar navbar-expand-lg bg-body-white bg-white container`}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse container`} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="Shop">
                FASHION
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="About">
                Gadgets
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="Bloge">
                LIFESTYLE
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="Contact">
                VIDEO
                </Link>
              </li>
              {userToken != null ? (
                <>
                  <li className="nav-item">
                    <p
                      className="nav-link text-uppercase mb-0 me-2 mb-0" style={{ cursor: "pointer" }} onClick={() => Logout()}>
                      LogOut
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="Register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link text-uppercase me-2 mb-0 ${Style.Link}`} to="Login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          </nav>
        </div>
      </div>
    </>
  );
}
