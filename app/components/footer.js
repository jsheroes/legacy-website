import Link from 'next/link';
import { styles, mediaQueries } from '../constants';
import socialmedia from '../data/socialmedia';

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <Link href="/">
          <a className="home-link">
            <img alt="JSHeroes Logo" src="/static/img/website-logo.svg" />
          </a>
        </Link>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">JSHeroes 2019</span>
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
          <Link href="/become-a-sponsor">
            <a>Become a Sponsor</a>
          </Link>
        </div>
        <div>
          <a
            href="https://jsheroes-form.typeform.com/to/IHohur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a>Give a Talk at JSHeroes</a>
          </a>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">Connect with us</span>
        <div>
          <a href="/adopt-a-jser">Adopt a Javascripter</a>
        </div>
        <div>
          <a href="/code-of-conduct">Code of Conduct</a>
        </div>
        <div>
          <a href="/privacy">Privacy Statement</a>
        </div>
      </div>
      <div className="col-md-3 col-sm-4">
        <span className="headline">Past Editions</span>
        <div>
          <a href="/2018">JSHeroes 2018</a>
        </div>
        <div>
          <a href="/2017">JSHeroes 2017</a>
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
              <Link href={`${item.url}`}>
                <a aria-label={item.alt} target="_blank" rel="noopener noreferrer">
                  <i className={item.label} aria-hidden="true" />
                </a>
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
          font-family: Roboto, sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          margin-top: 20px;
          display: inline-block;
        }

        a {
          color: ${styles.mainColor3};
          font-family: Roboto, sans-serif;
          font-weight: 400;
          font-size: 13px;
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

export default Footer;
