import Link from 'next/link';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import Sponsor from './sponsor';
import BecomeASponsorButton from './becomeASponsorButton';

const Sponsors = ({ baseUrl, sponsors }) => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div id="sponsors">
      <h2>Our Sponsors</h2>
      {sponsors.length > 0 && (
        <div>
          <p>
            If you wish to participate as a sponsor to our event contact us&nbsp;
            <Link href="mailto: contact@jsheroes.io">
              <a className="mail-to" target="_top">
                <strong>welcome@jsheroes.io</strong>
              </a>
            </Link>
          </p>
          <p>These are the companies that joined our mission</p>
          <ul>
            {sponsors.map(sponsor => (
              <Sponsor {...sponsor} key={sponsor.title} baseUrl={baseUrl} />
            ))}
          </ul>
        </div>
      )}
      <BecomeASponsorButton />
    </div>
    <style jsx>
      {`
        div {
          padding: 140px 0 0;
        }

        h2 {
          text-align: center;
          font-size: 54px;
          color: ${styles.mainColor2};
          font-weight: 700;
          margin: 0 auto 30px;
        }

        p {
          margin: 0 0 10px;
          font-size: 18px;
          color: ${styles.mainColor7};
          line-height: 32px;
          font-weight: 300;
          text-align: center;
        }

        ul {
          margin-top: 35px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          div {
            padding: 90px 0 0;
          }

          h2 {
            font-size: 46px;
          }

          p {
            font-size: 17px;
            line-height: 30px;
          }
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          div {
            padding: 70px 0 0;
          }

          h2 {
            font-size: 43px;
          }

          p {
            font-size: 18px;
            line-height: 32px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          div {
            padding: 80px 0 0;
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

        .mail-to {
          text-transform: none;
          color: ${styles.mainColor1};
          font-weight: 800;
        }
      `}
    </style>
  </Section>
);
export default Sponsors;
