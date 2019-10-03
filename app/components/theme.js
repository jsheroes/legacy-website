import Section from './common/section';
import { styles, mediaQueries } from '../constants';

const Theme = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor6 } }}>
    <div id="theme">
      <h2>Our Spotlight for 2020</h2>
      <p>
        Each year at JSHeroes, we pick a couple of <strong>topics</strong> we want to spotlight. It
        is not an exhaustive list, but we usually pick themes and topics we wish to{' '}
        <strong>raise awareness</strong> on, or that we feel need a bit more focus during the event.
        Nevertheless, JSHeroes is still focused on the technical side, the{' '}
        <strong>JavaScript</strong> ecosystem and the wonders of the <strong>Web</strong>.
      </p>
      <p className="list-heading">For 2020, we decided to focus on:</p>
      <ul>
        <li>
          The past and future of <strong>JavaScript</strong> and the <strong>Web</strong> ecosystem
        </li>
        <li>
          The impact of technology in <strong>society</strong>
        </li>
        <li>
          The <strong>hardships</strong> of the day-by-day activities at tech companies
        </li>
      </ul>
      <p>
        Because we want to reach a greater impact on the JavaScript ecosystem, we have decided to
        limit the number of talks which are addressing specific frameworks and libraries inside the
        greater JavaScript/Web world. Most of them have specialized events that are focusing
        particularly on the needs of those communities.
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
