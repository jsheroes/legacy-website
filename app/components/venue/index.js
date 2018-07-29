import ScrollableAnchor from 'react-scrollable-anchor';
import GoogleMap from './google.map';

import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const Venue = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <ScrollableAnchor id="venue">
      <div>
        <h2>Venue: Grand Hotel Italia</h2>
        <p>Trifoiului Street number 2, Cluj-Napoca, Romania</p>

        <GoogleMap />
      </div>
    </ScrollableAnchor>

    <style jsx>
      {`
        div {
          padding: 140px 0;
        }

        h2 {
          text-align: center;
          font-size: 54px;
          color: ${styles.mainColor3};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        p {
          margin: 0 0 40px;
          font-size: 18px;
          color: ${styles.mainColor3};
          line-height: 32px;
          font-weight: 300;
          text-align: center;
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          div {
            padding: 90px 0;
          }

          h2 {
            font-size: 46px;
          }

          p {
            font-size: 17px;
            line-height: 30px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          div {
            padding: 80px 0;
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
      `}
    </style>
  </Section>
);

export default   Venue;
