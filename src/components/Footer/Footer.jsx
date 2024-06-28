import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__home">
          <img src="src/assets/Group 63 (1).svg" />
        </div>

        <div className="footer__learning">
          <img src="src/assets/Group 63 (2).svg " />
        </div>

        <div className="footer__ranking">
          <img src="src/assets/Group 63 (4).svg" />
        </div>

        <div className="footer__badges">
          <img src="src/assets/Group 63 (3).svg" />
        </div>

        <div className="footer__profile">
          <img src="src/assets/Group.png" />
        </div>
      </section>
    </>
  );
}

export default Footer;
