import React, { Component } from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import menuItems from '../data/menuitems';
import { styles, mediaQueries, emptyFunc } from '../constants';

const sizeL = 992;

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNavUp: false,
      currentHash: '',
      showNavItems: false,
      viewportWidth: 0
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.toggleNavItems = this.toggleNavItems.bind(this);
    this.hideNavItems = this.hideNavItems.bind(this);
  }

  componentDidMount() {
    this.setState({
      viewportWidth: window.innerWidth,
      showNavItems: window.innerWidth > sizeL,
    });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleScroll() {
    const { hideNavUp } = this.state;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50 && !hideNavUp) {
      this.setState({ hideNavUp: true, showNavItems: false });
    } else if (scrollPosition < 50 && hideNavUp) {
      this.setState({ hideNavUp: false });
    }
  }

  handleHashChange(ev) {
    this.setState({ currentHash: ev.newURL.split('#')[1] });
  }

  toggleNavItems () {
    this.setState({
      showNavItems: !this.state.showNavItems
    })
  }

  hideNavItems () {
    this.setState({
      showNavItems: false
    })
  }

  render() {
    const { hideNavUp, showNavItems, viewportWidth } = this.state;
    const navbarChangesMaxL = showNavItems && (viewportWidth < sizeL)
      ? 'navbar-bcg-max-L' : '';

    return (
      <div
        style={this.props.style}
        className={hideNavUp ? 'hideNavUp' : navbarChangesMaxL}
      >
        <nav className="clearfix">
          <Link href='/'>
            <a className={`${navbarChangesMaxL} home-link`}>
              <img alt="JSHeroes Logo" src="static/img/website-logo.svg" />
            </a>
          </Link>
          <button onClick={this.toggleNavItems}>
            <img alt="navbar-icon-bars" src="static/img/navbar-icon.svg" />
          </button>
          <ul
            className={`${ showNavItems ? 'showNavItems' : ''}`}
            onClick={viewportWidth < sizeL ? this.hideNavItems : emptyFunc}
          >
            {
              menuItems.map((item) => {
                const active = `#${this.state.currentHash}` === item.url
                  ? 'active'
                  : '';
                return (
                  <li key={item.id}>
                    <a href={`/${item.url}`} className={active}>{item.label}</a>
                  </li>
                );
              })
            }
          </ul>
        </nav>

        { /*language=CSS*/ }
        <style jsx>{`
          div {
            width: 100%;
            height: 78px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            background-color: ${styles.mainColor2};
            border-top: 6px solid ${styles.mainColor6};
            -webkit-transition: top .2s ease-in-out;
            -moz-transition: top .2s ease-in-out;
            transition: top .2s ease-in-out;
            font-family: Roboto, sans-serif;
            font-weight: 400;
          }

          .navbar-bcg-max-L {
            background-color: ${styles.mainColor1}
          }

          .home-link {
            display: inline-block;
            float: left;
            width: 145px;
            height: inherit;
            padding: 0;
            margin: 17px 15px 15px;
            line-height: 0;
          }

          .home-link img {
            width: inherit;
            height: auto;
          }

          nav {
            height: auto;
            line-height: 72px;
          }

          ul {
            display: inline-block;
            float: right;
          }

          li {
            margin: 0 35px;
            display: inline-block;
          }

          a {
            padding: 5px 15px;
            text-transform: capitalize;
            color: #fff;
            font-size: 18px;
            font-weight: 400;
            text-decoration: none !important;
          }

          .hideNavUp {
            top: -78px;
          }

          .showNavItems {
            display: block;
          }

          .active {
            color: ${styles.mainColor6}
          }

          button {
            display: inline-block;
            float: right;
            margin: 10px 10px 10px 0;
            line-height: 0;
            background-color: transparent;
            border: none;
            outline: none;
          }

          @media (max-width: ${mediaQueries.L}) {/*992px*/
            div {
              height: 50px;
              background-color: transparent;
              border-top: 0;
            }
            nav {
              line-height: 52px;
            }
            .home-link {
              display: none;
              width: 105px;
            }
            .navbar-bcg-max-L .home-link {
              display: inline-block;
            }
            ul {
              display: none;
              width: 100%;
              padding-left: 0;
              text-align: center;
              background-color: ${styles.mainColor1};
            }
            li {
              display: block;
              margin: 0;
              line-height: 50px;
            }
            li:first-child {
              border-top: 1px solid rgba(250, 250, 250, .5);
            }
            a {
              display: block;
              padding: 0;
              font-size: 16px;
            }
            .hideNavUp {
              top: -52px;
            }
          }

          @media (min-width: ${mediaQueries.L}) {
            div {
             border-top: 4px solid ${styles.mainColor6};
            }
            nav {
              line-height: 74px;
            }
            .home-link {
              width: 125px;
              margin: 26px 15px 27px;
            }
            li {
              margin: 0 0 0 40px;
            }
            button {
              display: none;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            div {
             border-top: 6px solid ${styles.mainColor6};
            }
            nav {
              line-height: 71px;
            }
            .home-link {
              width: 145px;
              margin: 24px 15px 24px 45px;
            }
            li {
              margin: 0 30px;
            }
            a {
              font-size: 20px;
            }
          }

        `}</style>
      </div>
    );
  }
}

Nav.propTypes = {
  style: PropTypes.any,
};

