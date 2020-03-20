import { styles, mediaQueries, stickerContestInProgress } from '../constants';
import socialmedia from '../data/socialmedia';
import Link from './common/link';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => (
  <footer>
    <div className="footer-links">
      <div>
        <span className="home-link">
          <Link href="/meet-ecma">
            <img alt="JSHeroes Mascot" src="/static/img/bear.png" />
          </Link>
        </span>
      </div>
      <div>
        <span className="headline">JSHeroes 2021</span>
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
      <div>
        <span className="headline">More Info</span>
        {stickerContestInProgress && (
          <div>
            <span className="link">
              <Link href="/sticker-contest">Sticker Contest</Link>
            </span>
          </div>
        )}
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
      <div>
        <span className="headline">Past Editions</span>
        {[2019, 2018, 2017].map(year => (
          <div key={`past_${year}`}>
            <span className="link">
              <Link href={`/${year}`}>{`JSHeroes ${year}`}</Link>
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="copyright">
      <div className="rights">
        <i className="fa fa-copyright" aria-hidden="true" /> {getCurrentYear()} · JSHeroes. All
        rights reserved.
      </div>
      <div className="community">
        Made with <i className="fa fa-heart" aria-hidden="true" /> by
        <span className="sticky-words">&nbsp;JSHeroes Community.</span>
      </div>
      <div className="social-media">
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
          padding: 20px 0px 0;
          background-color: ${styles.mainColor2};
        }

        .footer-links {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
        }

        .home-link {
          display: inline-block;
          padding: 0;
        }

        .home-link img {
          height: auto;
          width: 150px;
        }

        .link {
          font-size: 13px;
        }

        .copyright {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;

          margin-top: 20px;
          padding: 15px 0;
          font-size: 14px;
          background-color: black;
        }

        .headline {
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          margin-top: 20px;
          display: inline-block;
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

          .footer-links {
            flex-flow: column;
          }

          .copyright {
            flex-flow: column;
          }

          .social i {
            font-size: 27px;
          }

          .social span {
            padding-left: 10px;
          }

          .social-media {
            order: 1;
          }

          .community {
            order: 2;
          }

          .rights {
            order: 3;
          }
        }
      `}
    </style>
  </footer>
);

export default Footer;
