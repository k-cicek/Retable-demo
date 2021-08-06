import React from "react";
import "./Navbar.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-background">
      <div class="container">
        <a class="navbar-brand" href="/">
        <img
            src="https://retable.io/static/media/retableLogoWhite.78b22a6a.png"
            width="125"
            alt="React Bootstrap logo"
          />
          <span className="beta-logo">BETA</span>
        </a>
        <button
          class="hammenu navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav navbar-position">
            <a class="nav-link active text-white " aria-current="page" href="/">
              <span class="mt_upgrade-badge ">UPGRADE</span>   
            </a>
            <a class="nav-link text-white" href="https://github.com/k-cicek">
              <img
                className="mr-2 sb-avatar__image"
                width="20px"
                height="20px"
                src="https://avatars.githubusercontent.com/u/79858870?v=4"
                alt="Kevser Çiçek"
              />
              <span class="name-text px-1">Kevser Çiçek</span>
            </a>
            <a
              class="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
             <ExitToAppIcon fontSize="medium" style={{ color: "white" }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
