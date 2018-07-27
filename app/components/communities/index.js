import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import Community from './community';

const Communities = ({ communities, baseUrl }) => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <ScrollableAnchor id="communities">
      <div>
        <h2>
          We
          <span>
            {' '}
            <i className="fa fa-heart fa-1x" aria-hidden="true" />
            {' '}
          </span>
          Communities
        </h2>
        <p>
          These JavaScript communities support us by offering their advice, promoting the event,
          participating in the Call for Speakers, fundraising and by having a natural collaborative
          approach.
        </p>
        <ul>
          {communities.map(community => (
            <Community {...community} key={community.title} baseUrl={baseUrl} />
          ))}
        </ul>
        <p>
          <strong>
#humansofjavascript
          </strong>
        </p>
      </div>
    </ScrollableAnchor>

    <style jsx>
      {`
        div {
          padding: 140px 0 140px;
        }

        h2 {
          text-align: center;
          font-size: 54px;
          color: ${styles.mainColor2};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        p {
          margin: 0 0 10px;
          font-size: 18px;
          color: ${styles.mainColor7};
          line-height: 32px;
          font-weight: 300;
          text-align: center;
        }

        ul {
          margin: 35px auto 50px;
          text-align: center;
        }

        .be-a-host,
        .be-a-guest,
        .be-a-host:hover,
        .be-a-guest:hover {
          color: ${styles.mainColor5};
          fill: ${styles.mainColor5};
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          div {
            padding: 90px 0 90px;
          }

          h2 {
            font-size: 46px;
          }

          p {
            font-size: 17px;
            line-height: 30px;
          }
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          div {
            padding: 60px 0 80px;
          }

          h2 {
            font-size: 43px;
          }

          p {
            font-size: 18px;
            line-height: 32px;
          }

          ul {
            margin-top: 30px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          div {
            padding: 55px 0 80px;
          }

          h2 {
            font-size: 33px;
          }

          p {
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 20px;
          }
        }

        .mail-to {
          text-transform: none;
          color: ${styles.mainColor1};
          font-weight: 800;
        }
      `}
    </style>
  </Section>
);

module.exports = Communities;
