import Link from 'next/link';
import { styles, mediaQueries } from '../constants';
import socialmedia from '../data/socialmedia';

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-3 col-sm-4 hidden-sm hidden-xs">
        <Link href="/">
          <a className="home-link">
            <img alt="JSHeroes Logo" src="/static/img/website-logo.svg" />
          </a>
        </Link>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">
Participate
        </span>
        <div>
          <a
            href="https://ti.to/cluj-javascripters/jsheroes-2019"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Your Ticket
          </a>
        </div>
        <div>
          <Link href="/code-of-conduct">
            <a>
Code of Conduct
            </a>
          </Link>
        </div>
        <div>
          <Link href="/privacy">
            <a>
Privacy Stament
            </a>
          </Link>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">
Prior Events
        </span>
        <div>
          <a href="http://2017.jsheroes.io" rel="noopener noreferrer" target="_blank">
            JSHeroes 2017
          </a>
        </div>
        <div>
          <a href="/2018">
JSHeroes 2018
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">
Connect with us
        </span>
        <div className="social">
          {socialmedia.map(item => (
            <span key={item.url}>
              <Link href={`${item.url}`}>
                <a target="_blank">
                  <i className={item.label} aria-hidden="true" />
                </a>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="row copyright">
      <div className="col-sm-6">
        <i className="fa fa-copyright" aria-hidden="true" />
        {' '}
2018 · JSHeroes. All rights reserved.
      </div>
      <div className="col-sm-6">
        Made with
        <i className="fa fa-heart" aria-hidden="true" />
        {' '}
by
        <span className="sticky-words">
JSHeroes Community.
        </span>
      </div>
    </div>

    {/* language=CSS */}
    <style jsx>
      {`
        footer {
          color: white;
          padding: 50px 15px 0;
          background-color: ${styles.mainColor2};
          flex-shrink: 0;
        }

        .col-md-3 div {
          padding: 4px 0;
        }

        .home-link {
          display: inline-block;
          width: 150px;
          padding: 0;
          margin: 65px 20px 65px;
        }

        .home-link img {
          width: inherit;
          height: auto;
        }

        @media (min-width: ${mediaQueries.S}) {
          .social {
            width: 170px;
          }

          .social span {
            padding-left: 10px;
            padding-bottom: 10px;
            width: 55px;
            float: left;
          }

          .social i {
            font-size: 27px;
          }
        }

        @media (max-width: ${mediaQueries.S}) {
          footer {
            text-align: center;
          }

          .social {
            padding-top: 20px;
            width: 100%;
          }

          .social span {
            padding-left: 20px;
            padding-bottom: 20px;
            width: 55px;
          }

          .social i {
            font-size: 27px;
          }
          .col-md-3 div {
            margin: 15px 0;
          }
        }

        .copyright {
          margin-top: 20px;
          padding: 5px 0;
          font-size: 14px;
          background-color: black;
          padding: 20px;
        }

        .copyright .col-sm-5 {
          padding-left: 35px;
        }

        .headline {
          text-transform: uppercase;
          padding-bottom: 5px;
          margin-bottom: 10px;
          margin-top: 10px;
          border-bottom: 2px solid white;
          display: inline-block;
        }

        a {
          color: ${styles.mainColor3};
          font-size: 16px;
          text-decoration: none;
          text-transform: none;
          transition-duration: 0.5s;
        }

        a:hover {
          color: ${styles.mainColor6};
          text-decoration: none;
        }
      `}
    </style>
  </footer>
);

module.exports = Footer;
