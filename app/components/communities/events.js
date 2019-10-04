import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import Community from './community';

const Events = ({ events, baseUrl }) => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div id="communities">
      <h2>Our Friends</h2>
      <p>
        Other tech events that we support or that support us through advertising, cross-promotion
        and participation in the event:
      </p>
      <ul>
        {events.map(community => (
          <Community {...community} key={community.title} baseUrl={baseUrl} />
        ))}
      </ul>
    </div>

    <style jsx>
      {`
        div {
          padding: 50px 0 0 0;
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
          margin: 30px auto;
          text-align: center;
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          h2 {
            font-size: 46px;
          }

          p {
            font-size: 17px;
            line-height: 30px;
          }
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          h2 {
            font-size: 43px;
          }

          p {
            font-size: 18px;
            line-height: 32px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          h2 {
            font-size: 33px;
          }

          p {
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 20px;
          }
        }
      `}
    </style>
  </Section>
);

export default Events;
