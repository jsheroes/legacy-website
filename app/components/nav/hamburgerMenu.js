import React from 'react';

import { mediaQueries, styles } from '../../constants';

const HamburgerMenu = ({ isOpen, onClick }) => (
  <div className={`hamburger-btn ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="first" />
    <div className="middle" />
    <div className="last" />
    <style jsx>
      {`
        @media (max-width: ${mediaQueries.HAMBURGER_MENU}) {
          .hamburger-btn {
            display: block;
            width: 35px;
            height: 34px;
            float: right;
            background-color: black;
            position: static;
          }

          .hamburger-btn div {
            opacity: 1;
            margin: 5px;
            background: white;
            width: 25px;
            height: 3px;
            position: static;
            transition: all 400ms ease-out;
          }

          .open .first {
            transform: translate(0, 8px) rotate(45deg);
            background-color: ${styles.mainColor5};
            transition: all 400ms ease-out;
          }

          .open .middle {
            transform: rotate(-45deg);
            background-color: ${styles.mainColor5};
            transition: all 400ms ease-out;
          }

          .open .last {
            opacity: 0;
          }
        }
      `}
    </style>
  </div>
);

export default HamburgerMenu;
