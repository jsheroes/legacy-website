import Link from 'next/link';
import { styles, mediaQueries } from '../constants';
import menuItems from '../data/menuitems';


const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-25">
        <img src="static/img/website_logo.png" alt="JS Logo" />
      </div>
      <div className="col-25">
        <span className="headline">
          Participate
        </span>
        <div>
          <a
            href="https://ti.to/cluj-javascripters/jsheroes2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Your Ticket
          </a>
        </div>
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPSo4Zy_M78PHRVFz90v1_SV3IqRcyhvgK2oCDY6ju6NDWeA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a Speaker
          </a>
        </div>
        <div>
          <a
            href="/code-of-conduct"
          >
            Code of Conduct
          </a>

        </div>
      </div>
      <div className="col-25">
        <span className="headline">
          Prior Events
        </span>
        <div>
          <a href="http://2017.jsheroes.io">JSHeroes 2017</a>
        </div>
      </div>
      <div className="col-25">
        <span className="headline">
          Connect with us
        </span>
        <div className="social">
          {
          menuItems.map(item => (
            <span key={item.url}>
              <Link href={`${item.url}`}>
                <a target="_blank">
                  <i className={item.label} aria-hidden="true" />
                </a>
              </Link>
            </span>
            ))
        }
        </div>
      </div>
    </div>
    <div className="row copyright">
      <div className="col-left"><i className="fa fa-copyright" aria-hidden="true" /> 2017 JSHeroes. All rights reserved.</div>
      <div className="col-right">Made with <i className="fa fa-heart" aria-hidden="true" /> by Cluj JavaScripters Community.</div>
    </div>
    <style jsx>{`
      footer {
        color: white;
        padding: 50px 15px 50px;
        background-color: ${styles.mainColor2};
        text-align: center;
      }

      footer a {
        text-decoration: none;
      }

      .row::after {
        clear: both;
        content: " ";
      }

      @media (min-width: ${mediaQueries.S} ) {

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
  
        .row {
          clear: both;
          content: " ";
        }

       .col-25 img {
          display: block
          width: 150px;
          padding-top: 65px;
          padding-left: 20px;
        }
  
        .col-25 {
          text-align: left;
          float: left;
          width: 25%;
          min-width: 200px;
        }

        .col-25 div {
          padding: 7px 0;
        }
  
        .col-25 div:first-of-type {
          padding: 20px 0 10px 0;
        }
  
        .col-left {
          float: left;
          padding-left: 20px;
          margin-right: 20%;
        }

        .col-right {
          float: left;
        }
      }
    
      .col-25 {
        margin: 10px 0;
      }

      @media (max-width: ${mediaQueries.S} ) {
        .col-25  img {
          display: none;
        }

        .col-25 div:first-of-type {
          padding: 10px 0;
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

        .col-left {
          width: 100%;
          text-align: center;
        }

        .col-right {
          width: 100%;
          text-align: center;
        }
      }

      .copyright {
        margin-top: 20px;
        background-color: black;
      }

      .headline {
        text-transform: uppercase;
        padding-bottom: 5px;
        margin-bottom: 15px;
        border-bottom: 2px solid white;
      }
  
      .social::after {
        clear: both;
        content: " ";
      }

      p {
        margin: 0 0 10px;
        color: ${styles.mainColor3};
        font-size: 16px;
        line-height: 32px;
        font-weight: 300;
        background-color: black;
      }
      
      a {
        color: ${styles.mainColor3};
        font-size: 16px;
        text-decoration: underline;
        text-transform: none;
        transition-duration: .5s;
      }
      
      a:hover {
        color: ${styles.mainColor6};
        text-decoration: none;
      }

    `}</style>
  </footer>
);

module.exports = Footer;

