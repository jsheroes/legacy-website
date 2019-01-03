import { mediaQueries, styles } from '../constants';
import Section from './common/section';
import Link from './common/link';

const Statistics = () => (
  <Section>
    <h2>Stats</h2>
    <div className="statistics">
      <div className="statistics-box">
        <h3>Attendees</h3>
        <ul>
          <li>2017 - 450 attendees</li>
          <li>2018 - 600 attendees (80% romanians, 20% other nationalities) </li>
          <li>2019 - 700 attendees (estimated)</li>
        </ul>
      </div>
      <div className="statistics-box">
        <h3>
          <Link href="https://www.youtube.com/c/jsheroes" theme="theme-light-contrast" openInNewTab>
            Youtube
          </Link>
        </h3>
        <ul>
          <li>Subscribers - 672 </li>
          <li>Views - more than 28.3K (lifetime) </li>
          <li>Hours of content watched - more than 2.5K (lifetime)</li>
        </ul>
      </div>
      <div className="statistics-box">
        <h3>
          <Link href="https://www.facebook.com/jsheroes" theme="theme-light-contrast" openInNewTab>
            Facebook
          </Link>
        </h3>
        <ul>
          <li>Page Followers - 1.1K</li>
          <li>Community Group - 1.3K</li>
        </ul>
      </div>
      <div className="statistics-box">
        <h3>
          <Link href="https://twitter.com/jsheroes" theme="theme-light-contrast" openInNewTab>
            Twitter
          </Link>
        </h3>
        <ul>
          <li>Followers - 1.6K </li>
          <li>Tweets - over 1.6K</li>
        </ul>
      </div>
      <div className="statistics-box">
        <h3>
          <Link href="https://www.meetup.com/jsheroes" theme="theme-light-contrast" openInNewTab>
            Meetup.com
          </Link>
        </h3>
        <ul>
          <li>Members - 1.5K</li>
          <li>Meetups Organized - 76 </li>
        </ul>
      </div>
      <div className="statistics-box">
        <h3>Other</h3>
        <ul>
          <li>300+ CfP applications for JSHeroes 2019</li>
          <li>More than 20 volunters for the conference and local community </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        .statistics {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-bottom: 100px;
        }

        .statistics-box {
          width: 30%;
          margin-top: 30px;
          background-color: rgb(0, 152, 255);
          padding: 5px 5px 15px 5px;
        }

        ul li {
          color: white;
          font-size: 14px;
          margin-left: 20px;
          margin-top: 10px;
        }

        h2 {
          text-align: center;
          font-size: 46px;
          color: ${styles.mainColor2};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        h3 {
          text-align: center;
          padding: 10px 0;
          font-size: 20px;
          font-weight: 400;
          color: ${styles.mainColor3};
          border-bottom: 1px solid white;
        }

        @media (max-width: ${mediaQueries.S}) {
          .statistics-box {
            width: 45%;
          }
        }

        @media (max-width: ${mediaQueries.XS}) {
          .statistics-box {
            width: 90%;
          }
        }
      `}
    </style>
  </Section>
);

export default Statistics;
