import { styles, mediaQueries } from '../constants';
import socialmedia from '../data/socialmedia';
import Link from './common/link';

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <span className="home-link">
          <Link href="/">
            <img alt="JSHeroes Logo" src="/static/img/website-logo.svg" />
          </Link>
        </span>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">JSHeroes 2019</span>
        <div>
          <span className="link">
            <Link href="https://ti.to/cluj-javascripters/jsheroes-2019">Buy Your Ticket</Link>
          </span>
        </div>
        <div>
          <span className="link">
            <Link href="/become-a-sponsor">Become a Sponsor</Link>
          </span>
        </div>
        <div>
          <span className="link">
            <Link href="/speak-at-jsheroes">Give a Talk at JSHeroes</Link>
          </span>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">More Info</span>
        <div>
          <span className="link">
            <Link href="/code-of-conduct">Code of Conduct</Link>
          </span>
        </div>
        <div>
          <span className="link">
            <Link href="/privacy">Privacy Statement</Link>
          </span>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">Past Editions</span>
        <div>
          <span className="link">
            <Link href="/2018">JSHeroes 2018</Link>
          </span>
        </div>
        <div>
          <span className="link">
            <Link href="/2017">JSHeroes 2017</Link>
          </span>
        </div>
      </div>
    </div>
    <div className="row copyright">
      <div className="col-sm-4 rights">
        <i className="fa fa-copyright" aria-hidden="true" /> 2018 · JSHeroes. All rights reserved.
      </div>
      <div className="col-sm-4 community">
        Made with <i className="fa fa-heart" aria-hidden="true" /> by
        <span className="sticky-words">&nbsp;JSHeroes Community.</span>
      </div>
      <div className="col-sm-4 social-media">
        <div className="social">
          {socialmedia.map(item => (
            <span key={item.url}>
              <Link href={`${item.url}`} aria-label={item.alt}>
                <i className={item.label} aria-hidden="true" />
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* language=CSS */}
    <style jsx>
      {`
        footer {
          color: white;
          padding: 20px 15px 0;
          background-color: ${styles.mainColor2};
          flex-shrink: 0;
        }

        .col-md-3 div {
          margin: 5px 0;
        }

        .home-link {
          display: inline-block;
          width: 150px;
          padding: 0;
          margin: 60px 20px 35px;
        }

        .home-link img {
          width: inherit;
          height: auto;
        }

        .link {
          font-size: 13px;
        }

        @media (min-width: ${mediaQueries.S}) {
          .social span {
            padding-left: 10px;
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
            margin: 5px 0;
          }

          .col-sm-4.social-media {
            order: 1;
            margin-bottom: 10px;
          }
          .col-sm-4.community {
            order: 2;
            margin-bottom: 10px;
          }
          .col-sm-4.rights {
            order: 3;
            margin-bottom: 10px;
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
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          margin-top: 20px;
          display: inline-block;
        }
      `}
    </style>
  </footer>
);

export default Footer;
