import Section from './common/section';
import Link from './common/link';
import { styles, mediaQueries } from '../constants';

const Mission = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="mission">
      <h2>An Open-Source Community Event</h2>
      <p>
        We believe that the <strong>community</strong> and the <strong>open-source</strong> models
        are well suited for our core values: learning, teaching and knowledge sharing. Our mission
        is to inspire other communities with the concept of <strong>open-source events</strong>.
      </p>
      <p>
        We’re <strong>publishing all data</strong> about this conference, in{' '}
        <Link
          theme={Link.THEME_LIGHT_CONTRAST}
          href="https://medium.com/cluj-javascripters/jsheroes-2019-transparency-report-3731539de52f"
        >
          <span className="link">full transparency</span>
        </Link>
        . We are also available at any time for inquires and we`re really looking forward to{' '}
        <strong>sharing</strong> our knowledge about{' '}
        <strong>organizing international events</strong>. This way, whenever a community wants to{' '}
        <strong>start</strong> something similar, they can <strong>build</strong> on our knowledge.
      </p>
    </div>
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

        .link {
          text-decoration: underline;
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

export default Mission;
