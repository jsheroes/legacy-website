import React from 'react';

import { styles } from '../../constants';
import NavItem from './navItem';

const NestedNavItem = ({ label, links }) => (
  <div role="menubar" tabIndex="0" className="nested-nav-item">
    <span className="nested-links-label">{label}</span>
    <ul role="menu" className="menu-items">
      {links.map(link => (
        <li role="menuitem" key={link.id}>
          <NavItem url={link.url}>{link.label}</NavItem>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        .nested-nav-item:hover ul,
        .nested-nav-item:focus-within ul {
          display: block;
        }

        .nested-links-label {
          color: ${styles.mainColor3};
          font-weight: 400;
        }

        .menu-items {
          position: absolute;
          z-index: 10;
          list-style: none;
          background: black;
          padding: 10px 0;
          left: 0;
          right: 0;
          display: none;
        }

        .menu-items li {
          padding: 5px 20px;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 768px) {
          .nested-links-label {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;

            padding: 16px 20px 10px;
            display: block;
          }

          .menu-items {
            display: block;
            opacity: 1;
            position: static;

            padding: 0;
          }

          .menu-items li {
            display: block;
            padding: 10px 20px;
            text-align: center;
          }
        }
      `}
    </style>
  </div>
);

export default NestedNavItem;
