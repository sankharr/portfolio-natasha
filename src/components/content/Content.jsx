// packages
import React from "react";

// styling
import "./Content.scss";

// assets
import mainImage from "../../assets/mainImage.png";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";

// navitems array
const navItems = ["my process", "client reviews", "download cv"];

// works array
const worksArray = [work1, work3];

function Content() {
  return (
    <div className="Content">
      <div className="Content__firstSection ">
        {navItems.map((item) => (
          <button key={item} className="Content__navButton">
            {item}
          </button>
        ))}
      </div>
      {/* <div className="Content__secondSection"> */}
      <img src={mainImage} className="Content__secondSection" />
      {/* </div> */}
      <div className="Content__thirdSection">
        <h1>Why Me</h1>
        <p>
          UI Designer competent at creating user-friendly interfaces with an
          easily navigable design. Translates high-level requirements into
          necessary interaction flows and artifacts.
        </p>
        <p>
          Specializes in creating clean, artful designs that are both intuitive
          and functional.
        </p>
        <button>schedule a call</button>
        <h1>Latest Work</h1>
        <div className="Content_cardArray">
          {worksArray.map((item, index) => (
            <img src={item} />
          ))}
        </div>

        <p>view all</p>
      </div>
    </div>
  );
}

export default Content;
