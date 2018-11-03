import React, { Component, Fragment } from 'react';
import Link from './common/link';
import menuItems from '../data/menuitems';
import { styles } from '../constants';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNav: false,
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.closeMobileNavigation = this.closeMobileNavigation.bind(this);
  }

  toggleMobileNav() {
    const { mobileNav } = this.state;
    this.setState({ mobileNav: !mobileNav });
  }

  closeMobileNavigation() {
    this.setState({ mobileNav: false });
  }

  render() {
    const { mobileNav } = this.state;
    const mobileOpenClass = mobileNav ? 'open' : '';

    return (
      <div className={`navigation-wrapper ${mobileOpenClass}`}>
        <nav>
          <div className="logo">
            <Link href="/" onClick={this.closeMobileNavigation}>
              <img alt="JSHeroes Logo" src="/static/img/website-logo.svg" />
            </Link>
          </div>
          <div>
            <div className="hamburger-btn" onClick={this.toggleMobileNav}>
              <div className="first" />
              <div className="middle" />
              <div className="last" />
            </div>
          </div>
          <ul className="menu-items">
            {menuItems.map(item => (
              <li
                className={item.links ? 'with-link' : null}
                key={item.id}
                onClick={this.toggleMobileNav}
              >
                {item.links ? (
                  <Fragment>
                    <span tabIndex="0" role="menu" className="nested-links-label">
                      {item.label}
                    </span>
                    <ul className="menu-items inside">
                      {item.links.map(link => (
                        <li key={link.id}>
                          <Link href={link.url}>
                            <span className="link-label">{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                ) : (
                  <Link href={item.url}>
                    <span className="link-label">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <style jsx>
          {`
            .navigation-wrapper {
              height: 75px;
              border-top: 3px solid ${styles.mainColor6};
              background: black;
            }

            nav {
              margin: 20px 20px 25px 40px;
              display: flex;
              flex: 1;
              justify-content: space-between;
            }

            .logo img {
              width: 150px;
              flex: 1;
            }

            ul.menu-items {
              text-decoration: none;
              margin: 0;
              padding: 0;
            }

            ul.menu-items.inside {
              position: absolute;
              z-index: 10;
              list-style: none;
              background: black;
              padding: 10px 0;
              left: 0;
              display: none;
            }

            ul.menu-items li.with-link:hover ul,
            ul.menu-items li.with-link:focus-within ul {
              display: block;
            }

            ul.menu-items li {
              display: inline-block;
              padding: 5px 20px;
              position: relative;
            }

            ul.menu-items li:last-of-type {
              display: inline-block;
              padding: 5px 0 0 5px;
            }

            ul.menu-items.inside li {
              padding: 5px 20px;
              width: 100%;
              text-align: center;
            }

            ul.menu-items li .nested-links-label {
              color: ${styles.mainColor3};
              font-weight: 400;
            }
            ul.menu-items li .link-label {
              text-transform: capitalize;
            }

            @media (max-width: 768px) {
              nav {
                margin-bottom: 0;
              }

              .navigation-wrapper {
                position: fixed;
                height: 70px;
                top: 0;
                z-index: 3;
                width: 100%;
                border-bottom: 1px solid white;
              }

              .navigation-wrapper.open ul.menu-items:not(.inside) {
                display: block;
                transform: translate(0%, 14%);
                width: 100%;
                transition: all 900ms ease-in;
                opacity: 0.85;
                top: 20px;
              }

              ul.menu-items.inside li {
                display: block;
                padding: 10px 20px;
                text-align: center;
              }

              .navigation-wrapper.open .first {
                display: none;
                opacity: 0;
                position: absolute;
              }
              .navigation-wrapper.open .middle {
                transform: rotate(45deg);
                transform: translate(0, 8px) rotate(45deg);
                background-color: ${styles.mainColor5};
                transition: all 700ms ease-in-out;
              }
              .navigation-wrapper.open .last {
                transform: rotate(-45deg);
                background-color: ${styles.mainColor5};
                transition: all 700ms ease-in-out;
              }

              ul.menu-items li .nested-links-label {
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
              }

              ul .menu-items.inside {
                display: block;
                opacity: 1;
                position: static;
                transform: none;
              }

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
                transition: all 700ms ease-in-out;
              }

              ul.menu-items {
                display: block;
                position: fixed;
                left: 0;
                transform: translate(0%, -200%);
                transition: all 900ms ease-out;
                width: 100%;
                opacity: 0;
                background-color: black;
              }

              .navigation-wrapper ul.menu-items li {
                padding: 10px 20px;
                text-align: center;
                display: block;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
