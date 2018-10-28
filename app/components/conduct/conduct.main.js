import Link from 'next/link';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const ConductMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <h2>
        The <span className="logoJS">JS</span>
        <span>Heroes</span> Code of Conduct
      </h2>

      <p>
        <strong>
          All attendees, speakers, sponsors and volunteers at our conference are required to agree
          with the following code of conduct.
        </strong>{' '}
        As organisers of JSHeroes, the JSHeroes community will enforce this code throughout the
        event. We expect cooperation from all participants to help ensure a safe environment for
        everybody.
      </p>
      <p>
        <strong>The JSHeroes community commits</strong> to providing a safe and friendly facility
        for all JSHeroes events, respecting each and every individual in the community and
        responding promptly to all reports of misconduct with our full attention.
      </p>

      <p>
        <strong>What we expect from each of you</strong> is to treat everyone with respect, refrain
        from using offensive language and imagery, and to report any derogatory or offensive
        behaviour to a member of the JSHeroes community or JSHeroes staff directly, or through email
        at{' '}
        <Link href="mailto: welcome@jsheroes.io">
          <a target="_top">welcome@jsheroes.io</a>
        </Link>
      </p>

      <p>
        JSHeroes understands the importance of community and wants to ensure that we provide a
        fantastic environment for everyone to learn and share skills regardless of gender, gender
        identity and expression, age, sexual orientation, disability, physical appearance, body
        size, race, ethnicity, religion (or lack thereof), or technology choices.
      </p>

      <p>
        We do not tolerate harassment of conference participants in any form. Sexual language and
        imagery is not appropriate for any conference venue, including talks, meetups, parties,
        Twitter and other online media. Conference participants violating these rules may be
        sanctioned or expelled from the conference without a refund at the discretion of the
        conference organisers.
      </p>

      <p>
        We value your attendance and your participation in the JSHeroes community and expect
        everyone to accord to the community Code of Conduct at all JSHeroes venues and events.
      </p>
    </div>

    <style jsx>
      {`
        .central-container {
          position: relative;
          width: 100%;
          padding: 100px 0 140px;
          margin: 0 auto;
          text-align: left;
        }

        .logoJS {
          color: ${styles.mainColor6};
        }

        h2 {
          text-align: center;
        }

        hr {
          margin-top: 20px;
          margin-bottom: 20px;
          height: 0;
          border: 0;
          border-top: 1px solid #eee;
        }

        p {
          margin: 0 0 40px;
          font-size: 18px;
          color: ${styles.mainColor7};
          line-height: 32px;
          font-weight: 300;
        }

        a {
          color: ${styles.mainColor5};
          fill: ${styles.mainColor5};
        }

        @media (max-width: 479px) {
          p {
            font-size: 18px;
            line-height: 1.58;
            letter-spacing: -0.004em;
          }
        }

        @media (max-width: ${mediaQueries.S}) {
          .central-container {
            padding: 50px 16px 70px;
          }

          h2 {
            margin-bottom: 50px;
          }

          p {
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 28px;
          }
        }

        @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
          .central-container {
            padding: 60px 32px 80px;
          }

          h2 {
            margin-bottom: 60px;
          }

          p {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 30px;
          }
        }

        @media (min-width: ${mediaQueries.L}) and (max-width: ${mediaQueries.XL}) {
          .central-container {
            padding: 80px 0 100px;
          }

          h2 {
            margin-bottom: 80px;
          }

          p {
            margin-bottom: 30px;
            font-size: 17px;
            line-height: 30px;
          }
        }

        @media (min-width: ${mediaQueries.L}) {
          .central-container {
            width: 66.7%;
          }

          h2 {
            margin-bottom: 80px;
          }
        }
      `}
    </style>
  </Section>
);

export default ConductMain;
