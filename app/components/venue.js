import Section from './common/section';
import { styles, mediaQueries } from '../constants';
import Link from './common/link';

const venueURL =
  'https://www.google.com/maps?saddr&daddr=Grand Hotel Italia, Strada Trifoiului 2, Cluj-Napoca 400478, Romania';

const Venue = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="venue">
      <h2>Venue and Covid-19 Plan</h2>
      <p>
        We are hosting the JSHeroes 2022 conference at the <strong>Grand Hotel Italia</strong>{' '}
        (Vasile Conta Street number 2, Cluj-Napoca, Romania).
      </p>

      <p>
        See directions on{' '}
        <Link theme={Link.THEME_LIGHT_CONTRAST} href={venueURL}>
          Google Maps
        </Link>
        .
      </p>

      <p>
        The health and safety of our staff, partners, and event participants is our top priority.
        We are following the latest policies and procedures issued by our
        national and local health officials on preventing the transmission of COVID-19. Wearing masks is recommended, but not enforced.
        If you do not have a mask with you, we can provide one at the registration.
      </p>
    </div>

    <style jsx>
      {`
        #venue {
          padding: 140px 0;
        }

        p {
          color: ${styles.mainColor3};
          font-size: 18px;
        }

        h2 {
          font-size: 54px;
          color: ${styles.mainColor3};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          h2 {
            font-size: 28px;
          }

          p {
            font-size: 16px;
          }

          #venue {
            padding: 40px 0;
          }
        }
      `}
    </style>
  </Section>
);

export default Venue;
