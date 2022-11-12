import React from "react";
import ethereumLogo from "../../images/ethereumLogo.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="main-title">
      <div>
        <img src={ethereumLogo} alt="Ethereum Logo" />
      </div>
      <div>
        <h1>NFT</h1>
        <h1>Metadata</h1>
        <h1>Auditor</h1>
      </div>
    </div>
  );
}

export default Header;
