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
      </p>

      <p>
        The health and safety of our staff, partners, and event participants is our top priority.
        This year, we will be implementing new policies and procedures based on the latest guidance
        from national and local health officials on preventing the transmission of COVID-19. We will
        require everyone who joins us to provide <strong>valid proof of vaccination</strong>, wear a{' '}
        <strong>mask</strong> while inside, and follow all other safety protocols as directed by
        event organizers.
      </p>
    </div>

    <style jsx>
      {`
        #venue {
          padding: 40px 0;
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
        }
      `}
    </style>
  </Section>
);

export default Venue;
