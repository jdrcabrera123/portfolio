import React from "react";
import { Link } from "react-router-dom";
export default function SliderHomePage() {
  return (
    <div>
      <div className="cardBoxHome">
        <div className="slideCard">
          <div className="imgIn"></div>
          <h2 className="titleCard">Project Name</h2>
          <p className="descriptionCard"> react, mongoDB, node</p>
          <button className="btnWatch">
            <a href="">Watch</a>
          </button>
        </div>
      </div>
      <div className="seeAll">
        <p>See all</p>
        <Link to="/programming">
          <svg
            className="arrow"
            width="46"
            height="38"
            viewBox="0 0 46 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM43 21.5C44.3807 21.5 45.5 20.3807 45.5 19C45.5 17.6193 44.3807 16.5 43 16.5V21.5ZM3 21.5H43V16.5H3V21.5Z"
              fill="#1B2189"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
