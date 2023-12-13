import "./errorBoundary.scss";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <div className="errorContent">
            <div>
              <h1>Uh oh! Looks like you found nothing here.</h1>
              <br />
              Go back to the homepage if you dare!
            </div>
            <div>
              <Link className="btn" to={"/"}>
                Go Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorBoundary;
