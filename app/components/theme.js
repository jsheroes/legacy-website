import Section from './common/section';
import { styles, mediaQueries } from '../constants';

const Theme = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="theme">
      <h2>Let's Reconnect in 2022</h2>
      <p>
        We usually pick a few topics we want to spotlight and a general theme for each JSHeroes
        event. But after two hard years of limited community interaction and in-person events, we
        feel the best thing to do is to <strong>bring the community back together</strong>.
      </p>
      <p>
        So let's focus on <strong>rebuilding</strong> the amazing community we had before. We are
        starting small, but with a clear objective of bringing{' '}
        <strong>the same warm and engaging vibes</strong> that JSHeroes events always had.
      </p>
      <p>
        Being part of an engaging community feels good! This year, communities are back together, to
        share stories and catch up. Connection via peer groups can help us have a healthier mindset,
        improved self worth, and greater enjoyment of life.
      </p>
    </div>
    <style jsx>
      {`
        .list-heading {
          text-align: left;
          margin-bottom: 10px;
        }

        ul {
          font-size: 18px;
          color: ${styles.mainColor3};
          line-height: 32px;
          font-weight: 300;
          margin-top: 10px;
          margin-bottom: 30px;
          margin-left: 30px;
        }

        div {
          padding: 140px 0;
        }

        h2 {
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
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          div {
            padding: 90px 0;
          }

          h2 {
            font-size: 46px;
          }

          p {
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
            line-height: 28px;
            margin-bottom: 20px;
          }
        }
      `}
    </style>
  </Section>
);

export default Theme;
