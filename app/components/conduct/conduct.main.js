import Link from 'next/link';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const ConductMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <h3>The extended version</h3>
      <hr />
      <br />
      <p>
        <strong>
          All attendees, speakers, sponsors and volunteers at our conference are required to agree
          with the following code of conduct.
        </strong>{' '}
        As organisers of JSHeroes, the JSHeroes Community will enforce this code throughout the
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
        from using offensive language and imagery and to report any derogatory or offensive
        behaviour to a member of the JSHeroes community or JSHeroes staff directly, or through email{' '}
        <Link href="mailto: welcome@jsheroes.io">
          <a target="_top">welcome@jsheroes.io</a>
        </Link>
        .
      </p>

      <p>
        <strong>JSHeroes understands the importance of community</strong> and wants to ensure that
        we provide a fantastic environment for everyone to learn and share skills regardless of
        gender, gender identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
      </p>

      <p>
        We do not tolerate harassment of conference participants in any form.{' '}
        <strong>Sexual language and imagery is not appropriate for any conference venue</strong>,
        including talks, meetups, parties, Twitter and other online media. Conference participants
        violating these rules may be sanctioned or expelled from the conference{' '}
        <em>without a refund</em> at the discretion of the conference organisers.
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
          text-align: center;
        }

        h3 {
          margin: 0 auto 30px;
          line-height: 1.1;
          font-size: 44px;
          font-weight: 700;
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
          h3 {
            font-size: 26px;
          }

          .central-container {
            padding: 50px 0 70px;
          }

          p {
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 28px;
          }
        }

        @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
          h3 {
            font-size: 30px;
          }

          .central-container {
            padding: 60px 0 80px;
          }

          p {
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 30px;
          }

          .section-padding {
            padding: 70px 0;
          }
        }

        @media (min-width: ${mediaQueries.L}) and (max-width: ${mediaQueries.XL}) {
          h3 {
            font-size: 34px;
          }

          .central-container {
            padding: 80px 0 100px;
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
        }

        @media (min-width: ${mediaQueries.XL}) {
          .central-container {
            text-align: left;
          }
        }
      `}
    </style>
  </Section>
);

export default ConductMain;
