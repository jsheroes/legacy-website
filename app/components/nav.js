import React, { Component } from 'react';
import Link from 'next/link';
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
          <div className="logo-wrapper">
            <Link href="/">
              <a className="logo" onClick={this.closeMobileNavigation}>
                <img alt="JSHeroes Logo" src="/static/img/website-logo.svg" />
              </a>
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
                <a href={item.url}>{item.label}</a>

                {item.links ? (
                  <ul className="menu-items inside">
                    {item.links.map(link => (
                      <li key={link.id}>
                        {link.url.startsWith('http') || link.url.startsWith('mailto') ? (
                          <a href={`${link.url}`}>{link.label}</a>
                        ) : (
                          <Link href={link.url}>
                            <a>{link.label}</a>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
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

            .logo-wrapper {
              boder: 1px solid green;
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

            ul.menu-items li.with-link:hover ul {
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

            ul.menu-items li a {
              color: white;
              font-size: 18px;
              text-transform: capitalize;
              font-weight: 400;
            }

            ul.menu-items li a:hover {
              color: ${styles.mainColor5};
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
                transform: translate(0%, 25%);
                width: 100%;
                transition: all 900ms ease-in;
                opacity: 0.85;
                top: 20px;
              }

              .navigation-wrapper.open ul li {
                display: block;
                padding: 10px 20px;
                text-align: center;
              }

              .navigation-wrapper.open ul li.with-link {
                display: none;
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
