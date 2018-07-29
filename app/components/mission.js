import ScrollableAnchor from 'react-scrollable-anchor';
import Section from './common/section';
import { styles, mediaQueries } from '../constants';

const Mission = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <ScrollableAnchor id="mission">
      <div>
        <h2>Our Mission</h2>
        <p>
          We believe that the <strong>community model</strong> is the best environment for learning,
          so part of our mission is to inspire and help other communities. We’ll{' '}
          <strong>publish all data</strong> about this conference, in full transparency. This way,
          whenever the next javascripters want to <strong>take over</strong> this event, they can{' '}
          <strong>build on</strong> our knowledge and the event’s brand.
        </p>
        <p>
          Our vision is for a <strong>connected global community</strong>, and for this we’ve
          designed the event to be JSHeroes, <strong>a series</strong> of Open-Source Community
          Events by <strong>JavaScript Communities worldwide</strong>.
        </p>
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

export default Mission;
