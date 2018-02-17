import ScrollableAnchor from 'react-scrollable-anchor';
import Link from 'next/link';
import Router from 'next/router';
import Section from '../../components/common/section';
import { styles, mediaQueries } from '../../constants';

const Organizers = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor1 } }}>
    <ScrollableAnchor id={'organizers'}>
      <div>
        <h2>Organizers</h2>

        <p>
        The <strong>JSHeroes</strong> Conference relies on <strong>volunteers</strong> and the Cluj JavaScripters community to organize and drive the event.
        </p>
        <p>
        They contribute hours of their time each year and we value this immensely.
        </p>
        <p>
        Thanks to all

          <Link href={'/organizers'}>
            <a
              className="link"
              onMouseEnter={() => { Router.prefetch('/organizers'); }}
            >
              <strong> who supported us!</strong>
            </a>
          </Link>

        </p>
      </div>
    </ScrollableAnchor>
    <style jsx>{`
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

      .link {
        color: ${styles.mainColor6};
      }

      p {
        margin: 0 0 20px;
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
    `}</style>
  </Section>
);

module.exports = Organizers;
