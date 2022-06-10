import React from "react";
import CV from "../../assest/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1Nae96dBG_tBB6OjsocCNP_dW2eUm45il/view?usp=sharing"
        target="_blank"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
