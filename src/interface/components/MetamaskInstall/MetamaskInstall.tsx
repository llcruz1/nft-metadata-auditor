import React from "react";
import "./MetamaskInstall.scss";

function MetamaskInstall() {
  return (
    <>
      <h1>You need Metamask installed to use this application.</h1>
      <br />
      <div className="download-btn">
        <h1>
          <a target="_blank" rel="noReferrer" href="https://metamask.io/download/">
            Download it here
          </a>
        </h1>
      </div>
      <br />
      <p>If you already have it installed, try activating the extension on your browser.</p>
    </>
  );
}

export default MetamaskInstall;
