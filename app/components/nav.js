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
      currentHash: ''
    }
    this.handleHashChange = this.handleHashChange.bind(this)
  }
  handleHashChange (ev) {
    this.setState({ currentHash: ev.newURL.split('#')[1] })
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.handleHashChange)
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.handleHashChange)
  }

  render () {
    return (
      <div>
        <div className="nav-wrapper">
          <div className='bigNav'>
            <nav>
              <ul>
                {this.props.page === 'code-of-conduct' &&
                <Link href="/index"><a target="_blank"><img src="static/img/website_logo.png" alt="logo" className="site-logo"/></a></Link>
                }
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
          .site-logo {
            max-width: 140px;
          }
          .bigNav {
            background-color: transparent;
            transition: background-color .4s;
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
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            line-height: 75px;
            -webkit-transition: line-height .3s ease-out;
            -moz-transition: line-height .3s ease-out;
            transition: line-height .3s ease-out;
          }

          nav {
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
            .bigNav .fa {
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
