import Section from './common/section';
import { styles, mediaQueries } from '../constants';

const Theme = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="theme">
      <h2>Open Source, Accessibility and Mental Health</h2>
      <p>
        <strong>JSHeroes</strong> is mostly focused on technical talks, the{' '}
        <strong>JavaScript</strong> ecosystem and the wonders of the <strong>Web</strong>. But each
        year, we pick a couple of extra topics we want to raise awareness of. In 2019, we tackle a
        major theme which impacts all of us one way or another:{' '}
        <strong>open source software</strong>. We are also committed to bringing on stage speakers
        that explore areas often overlooked by the community, namely:{' '}
        <strong>Web Accessibility</strong>, <strong>Mental Health and Balance</strong>.
      </p>
      <p>
        There were lots of choices to be made for the upcoming edition and one of the most difficult
        ones was about our <strong>focus</strong>. Because we want to reach a greater impact on the
        JavaScript ecosystem, we have decided to limit the number of talks which are addressing
        specific frameworks and libraries inside the greater JavaScript/Web world. Most of them have
        specialized events that are focusing particularly on the needs of those communities.
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

export default Theme;
