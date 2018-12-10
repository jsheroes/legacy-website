import { styles } from '../constants';
import Section from './common/section';
import Link from './common/link';

const Statistics = () => (
  <Section>
    <h2>Stats</h2>
    <div className="statistics">
      <div>
        <h3>Attendees</h3>
        <ul>
          <li>2017 - 450 attendees</li>
          <li>2018 - 600 attendees ( 80% romanians, 20% other nationalities) </li>
          <li>2019 - 700 attendees ( estimated )</li>
        </ul>
      </div>
      <div>
        <h3>
          <Link
            href="https://www.youtube.com/c/jsheroes"
            theme="theme-light-contrast"
            openInNewTab
            outsideClass="small"
          >
            Youtube
          </Link>
        </h3>
        <ul>
          <li>Subscribers - 672 </li>
          <li>Views - more than 28.3K (lifetime) </li>
          <li>Hours of content watched - more than 2.5K (lifetime)</li>
        </ul>
      </div>
      <div>
        <h3>
          <Link
            href="https://www.facebook.com/jsheroes"
            theme="theme-light-contrast"
            openInNewTab
            outsideClass="small"
          >
            Facebook
          </Link>
        </h3>
        <ul>
          <li>Page Followers - 1.1K</li>
          <li>Community Group - 1.3K</li>
        </ul>
      </div>
      <div>
        <h3>
          <Link
            href="https://twitter.com/jsheroes"
            theme="theme-light-contrast"
            openInNewTab
            outsideClass="small"
          >
            Twitter
          </Link>
        </h3>
        <ul>
          <li>Followers - 1.6K </li>
          <li>Tweets - over 1.6K</li>
        </ul>
      </div>
      <div>
        <h3>
          <Link
            href="https://www.meetup.com/jsheroes"
            theme="theme-light-contrast"
            openInNewTab
            outsideClass="small"
          >
            Meetup.com
          </Link>
        </h3>
        <ul>
          <li>Members - 1.5K</li>
          <li>Meetups Organized - 76 </li>
        </ul>
      </div>
      <div>
        <h3>Other</h3>
        <ul>
          <li>300+ CfP applications for JSHeroes 2019</li>
          <li>More than 20 volunters for the conference and local community </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        ul li {
          color: white;
          font-size: 14px;
          margin-left: 20px;
          margin-top: 10px;
        }

        .statistics {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .statistics div {
          width: 30%;
          background-color: rgb(0, 152, 255);
          padding: 5px;
          margin-top: 30px;
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
        @media (max-width: 768px) {
          .statistics div {
            width: 45%;
            background-color: rgb(0, 152, 255);
            padding: 5px;
          }
        }
      `}
    </style>
  </Section>
);
export default Statistics;
