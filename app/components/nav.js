import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menuItems from '../data/menuitems';
import { styles, mediaQueries } from '../constants';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideNav: false,
      currentHash: '',
      showNavItems: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.toggleNavItems = this.toggleNavItems.bind(this);
    this.hideNavItems = this.hideNavItems.bind(this);
  }

  componentDidMount() {
    this.setState({
      showNavItems: window.innerWidth > 768,
    });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('hashchange', this.handleHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('hashchange', this.handleHashChange);
  }

  handleScroll() {
    const { hideNav } = this.state;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 50 && !hideNav) {
      this.setState({ hideNav: true, showNavItems: false });
    } else if (scrollPosition < 50 && hideNav) {
      this.setState({ hideNav: false });
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
    const { showNavItems } = this.state;

    return (
      <div
        style={this.props.style}
        className={this.state.hideNav ? 'hideNav' : ''}
      >
        <nav className="clearfix">
          <img alt="website-logo" src="static/img/website_logo.png" />
          <button onClick={this.toggleNavItems}>
             <i className='fa fa-bars' aria-hidden='true' /> 
          </button>
          <ul
            className={`${ showNavItems ? '' : 'hideNavItems'}`}
            onClick={this.hideNavItems}
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
            border-top: 3px solid ${styles.mainColor6};
            -webkit-transition: top .2s ease-in-out;
            -moz-transition: top .2s ease-in-out;
            transition: top .2s ease-in-out;
            font-family: Roboto, sans-serif;
            font-weight: 400;
          }

          img {
            display: inline-block;
            float: left;
            padding-top: 21px;
            padding-left: 23px;
            transform: scale(0.7);
          }
          
          nav {
            height: auto;
            line-height: 75px;

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

          .hideNav {
            top: -78px;
          }

          .hideNavItems {
            display: none;
          }

          .active {
            color: ${styles.mainColor6}
          }

          button {
            display: inline-block;
            float: right;
            margin: 10px 20px 10px 0;
            line-height: 28px;
            font-size: 28px;
            color: ${styles.mainColor3};
            background-color: transparent;
            border: none;
            outline: none;
          }

          @media (max-width: ${mediaQueries.S}) {/*768px*/
            div {
              height: 52px;
              background-color: ${styles.mainColor1};
              border-top: 2px solid ${styles.mainColor1};
            }
            img {
              display: none;
            }
            ul {
              width: 100%;
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
            .hideNav {
              top: -52px;
            }
          }

          @media (max-width: ${mediaQueries.S}) {
             /*li {*/
              /*display: block;*/
              /*margin: 0;*/
              /*border-bottom: solid 1px white;*/
            /*}*/
          }

          @media (min-width: ${mediaQueries.S}) {
             {/* li {
              margin: 0 17px;
            }  */}
          }

          @media (min-width: ${mediaQueries.L}) {
             {/* li {
              margin: 0 15px;
            }  */}
            button {
              display: none;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            {/* li {
              margin: 0 25px;
            } */}
          }

        `}</style>
      </div>
    );
  }
}

Nav.propTypes = {
  style: PropTypes.any,
};