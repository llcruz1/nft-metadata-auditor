import React from "react";
import "./Loader.scss";

interface LoaderProps {
  showOverlay: boolean;
}

function Loader({ showOverlay }: LoaderProps) {
  return (
    <>
      {showOverlay && <div className="overlay"></div>}
      <div className="spinner">
        <span className="ball-1"></span>
        <span className="ball-2"></span>
        <span className="ball-3"></span>
        <span className="ball-4"></span>
        <span className="ball-5"></span>
        <span className="ball-6"></span>
        <span className="ball-7"></span>
        <span className="ball-8"></span>
      </div>
    </>
  );
}

export default Loader;
