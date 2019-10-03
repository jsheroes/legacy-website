import Section from './common/section';
import { styles, mediaQueries } from '../constants';
import Link from './common/link';

const venueURL =
  'https://www.google.com/maps?saddr&daddr=Grand Hotel Italia, Strada Trifoiului 2, Cluj-Napoca 400478, Romania';

const Venue = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="venue">
      <div className="left-side">
        <h2>Venue: Grand Hotel Italia</h2>
        <p>Vasile Conta Street number 2, Cluj-Napoca, Romania</p>

        <Link theme={Link.THEME_LIGHT_CONTRAST} href={venueURL}>
          Directions on Google Maps
        </Link>
      </div>
      <div className="right-side">
        <Link theme={Link.THEME_LIGHT_CONTRAST} href={venueURL}>
          <img className="map-image" src="/static/img/venue.png" alt="Venue location on the map" />
        </Link>
      </div>
    </div>

    <style jsx>
      {`
        .map-image {
          max-width: 100%;
        }

        #venue {
          display: flex;
          flex-wrap: wrap;
          padding: 40px 0;
        }

        .left-side {
          width: 50%;
          margin-bottom: 20px;
        }

        .right-side {
          width: 50%;
        }

        p {
          color: ${styles.mainColor3};
        }

        h2 {
          font-size: 34px;
          color: ${styles.mainColor3};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          h2 {
            font-size: 28px;
          }

          .left-side {
            width: 100%;
          }

          .right-side {
            width: 100%;
          }
        }
      `}
    </style>
  </Section>
);

export default Venue;
