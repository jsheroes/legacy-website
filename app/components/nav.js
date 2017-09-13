import { Component } from 'react'
import PropTypes from 'prop-types'

import menuItems from '../data/menuitems'
import Link from 'next/link'
import { styles, mediaQueries } from '../constants'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 100,
      smallNav: false,
      currentHash: '',
      logoFixed: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleHashChange = this.handleHashChange.bind(this)
  }
  handleHashChange (ev) {
    this.setState({ currentHash: ev.newURL.split('#')[1] })
  }

  handleScroll () {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop

    if (scrollPosition > this.state.logoOffsetTop) {
      this.setState({logoFixed: true})
    } else {
      this.setState({logoFixed: false})
    }
  }

  componentDidMount () {
    const rect = document.getElementById('logo').getBoundingClientRect()
    const docEl = document.documentElement
    const logoElementOffsetTop = rect.top + (window.pageYOffset || docEl.scrollTop || 0)

    this.setState({
      logoOffsetTop: logoElementOffsetTop
    })

    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('hashchange', this.handleHashChange)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('hashchange', this.handleHashChange)
  }

  render () {
    return (
      <div>
        <div className="nav-wrapper">
          <div className={ this.state.logoFixed ? 'fixed-logo-wrapper show' : 'fixed-logo-wrapper' }>
            <Link href="/">
              <a target="_blank" className="logo-anchor">
                <img src="static/img/website_logo.png" alt="logo" className={ this.state.logoFixed ? 'logo-fixed show' : 'logo-fixed' }/>
              </a>
            </Link>
          </div>
          <div
            style={this.props.style}
            className={this.state.logoFixed ? 'smallNav' : 'bigNav'}
          >
            <nav>
              <ul>
                {menuItems.map((item, key) => {
                  const active = `#${this.state.currentHash}` === item.url
                    ? 'active'
                    : ''
                  return (
                    <li key={key}>
                      <Link href={`${item.url}`}>
                        <a className={active} target="_blank">
                          <i className={item.label} aria-hidden="true"></i>
                        </a>
                      </Link>
                    </li>
                  )
                })}
                <p className="nav-links">
                  <Link href="https://2017.jsheroes.io"><a target="_blank">JSHeroes 2017</a></Link>
                  <Link href="/code-of-conduct"><a target="_blank">Code of Conduct</a></Link>
                </p>
              </ul>
            </nav>
          </div>
        </div>
        <style jsx >{`
          .nav-wrapper .fixed-logo-wrapper {
            height: 45px;
            width: 150px;

            position: fixed;
            top: 10px;
            left: 50%;
          }
          .nav-wrapper .fixed-logo-wrapper.show {
            z-index: 101;
          }
          .nav-wrapper .fixed-logo-wrapper .logo-fixed {
            opacity: 0;
            width: 100%;
            transform:translate(-75px);
            transition: opacity .2s linear;
          }
          .nav-wrapper .fixed-logo-wrapper .logo-fixed.show {
            opacity: 1;
            transition: opacity .2s linear;
          }
          .nav-wrapper .smallNav {
            background-color: rgba(0,0,0,0.3);
            -webkit-transition: all .3s linear;
            line-height: 60px!important;
            transition: all .3s linear;
            z-index: 100;
          }
          .nav-wrapper .bigNav {
            background-color: transparent;
            -webkit-transition: all .3s linear;
            transition: all .3s linear;
          }
          .nav-wrapper .smallNav ul {
            opacity: 0;
            overflow: hidden;
            height: 0;
            transition: opacity .5s linear;
          }
          .nav-links {
            float: right;
          }
          .nav-links a:hover {
            color: #0098ff;
            transition: color 0.5s;
          }
          .nav-links a {
            font-size: 16px;
            margin-right: 20px;
            text-decoration: none;
          }
          .nav-wrapper div {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            line-height: 75px;
            -webkit-transition: line-height .3s ease-out;
            -moz-transition: line-height .3s ease-out;
            transition: line-height .3s ease-out;
          }

          nav {
            min-height: 55px;
            padding: 0 15px;
            margin: 0 auto;
          }

          .nav-wrapper ul {
            float: right;
            display: inline-block;
          }

          .nav-wrapper ul li {
            padding: 0 5px;
            display: inline-block;
          }

          .nav-wrapper ul p a {
            font-size: 20px;
          }

          .nav-wrapper ul li:hover {
            transform: scale(2);
            transition: all 0.5s;
          }

          .nav-wrapper a {
            color: #fff;
            font-size: 23px;
            font-weight: 300;
          }

          .nav-wrapper img {
            display: inline-block;
            vertical-align: middle;
            padding-bottom: 12px;
            transform: scale(0.8);
            transition: transform .3s linear;
          }

          .nav-wrapper .active {
            color: ${styles.mainColor6}
          }

          @media (max-width: ${mediaQueries.L}) {
            .nav-wrapper a {
              font-size: 16px;
            }

            .nav-wrapper li {
              margin-right: 20px;
              line-height: 50px;
            }

            .nav-wrapper ul {

              width: 100%;
              text-align: center;
            }
          }

          @media (max-width: ${mediaQueries.S}) {
            .nav-wrapper ul {
              text-align: right;
            }
            .nav-wrapper ul .nav-links a:nth-child(2) {
              margin: 0;
            }
            .nav-wrapper li {
              display: block;
              margin: 0;
            }
            .nav-links {
              float: none;
              line-height: 1px;
            }
            .bigNav .fa, .smallNav .fa {
              font-size: 22px;
            }
          }

          @media (min-width: ${mediaQueries.S}) {
            nav {
              width: 720px;
            }

            .nav-wrapper li {
              margin: 0 15px;
            }
          }

          @media (min-width: ${mediaQueries.L}) {
            nav {
              width: 960px;
            }

            .nav-wrapper li {
              padding: 0 15px;
            }
          }

          @media (min-width: ${mediaQueries.XL}) {
            nav {
              width: 1140px;
            }

            .nav-wrapper li {
              padding: 0 25px;
            }
          }

        `}</style>
      </div>
    )
  }
}

Nav.propTypes = {
  style: PropTypes.any,
  page: PropTypes.string
}
