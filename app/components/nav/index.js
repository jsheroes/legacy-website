import React, { Component } from 'react';
import { withRouter } from 'next/router';

import menuItems from '../../data/menuitems';
import { mediaQueries, styles } from '../../constants';
import Link from '../common/link';
import HamburgerMenu from './hamburgerMenu';
import NavItem from './navItem';
import NestedNavItem from './nestedNavItem';

class Nav extends Component {
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

  filterMenuItems() {
    const {
      router: { pathname },
    } = this.props;

    // A fairly naive pathname matching approach.
    // Might be worth performing a more complex
    // comparison if such needs arise.
    const urlMatchesRoute = url => {
      if (url instanceof RegExp) {
        return url.test(pathname);
      }
      return url === pathname;
    };

    const shouldItemBeVisible = ({ whitelist, blacklist }) => {
      if (whitelist && !whitelist.some(urlMatchesRoute)) {
        return false;
      }

      if (blacklist && blacklist.some(urlMatchesRoute)) {
        return false;
      }

      return true;
    };

    return (
      menuItems
        // Filter top level items.
        .filter(shouldItemBeVisible)
        // And also filter nested ones.
        .map(item =>
          item.links ? { ...item, links: item.links.filter(shouldItemBeVisible) } : item,
        )
    );
  }

  render() {
    const { mobileNav } = this.state;
    const mobileOpenClass = mobileNav ? 'open' : '';

    return (
      <header id="menu" className={`navigation-wrapper ${mobileOpenClass}`}>
        <nav>
          <div className="logo">
            <Link href="/" onClick={this.closeMobileNavigation}>
              <img alt="JSHeroes Logo" src="/static/img/website_logo_2022.svg" />
            </Link>
          </div>
          <div>
            <HamburgerMenu isOpen={mobileNav} onClick={this.toggleMobileNav} />
          </div>
          <ul className="menu-items">
            {this.filterMenuItems().map(item => (
              <li
                className={item.links ? 'with-link' : null}
                key={item.id}
                onClick={this.toggleMobileNav}
              >
                {item.links ? (
                  <NestedNavItem label={item.label} links={item.links} />
                ) : (
                  <NavItem url={item.url}>{item.label}</NavItem>
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
              margin: 18px 20px;
              display: flex;
              flex: 1;
              justify-content: space-between;
            }

            .logo img {
              width: 150px;
              flex: 1;
              margin-top: 5px;
            }

            ul.menu-items li {
              display: inline-block;
              padding: 5px 15px;
              position: relative;
            }

            ul.menu-items li:last-of-type {
              padding: 5px 0 0 5px;
            }

            @media (max-width: ${mediaQueries.S}) {
              nav {
                margin-bottom: 0;
              }

              .navigation-wrapper {
                position: fixed;
                height: 70px;
                top: 0;
                z-index: 3;
                width: 100%;
              }

              .navigation-wrapper.open ul.menu-items {
                display: block;
                transform: translate(0, 70px); // Nav's height - the bottom-border
                width: 100%;
                transition: all 400ms ease-out;
                opacity: 0.85;
                top: 0;
              }

              ul.menu-items {
                display: block;
                position: fixed;
                left: 0;
                transform: translate(0%, -100%);
                transition: all 400ms ease-out;
                width: 100%;
                opacity: 0;
                background-color: black;

                padding-bottom: 20px;
              }

              .navigation-wrapper ul.menu-items li {
                padding: 10px 20px;
                text-align: center;
                display: block;
              }

              .navigation-wrapper ul.menu-items li.with-link {
                padding: 0;
              }
            }
          `}
        </style>
      </header>
    );
  }
}

export default withRouter(Nav);
