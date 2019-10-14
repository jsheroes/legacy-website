import Section from './common/section';
import { styles, mediaQueries } from '../constants';
import Link from './common/link';
import CTAButton from './common/ctaButton';

const Funds = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="section-wrapper" id="funds">
      <h2 className="title">Announcing Our Support Funds!</h2>
      <p className="description">
        We are super excited to announce two awesome initiatives that we are putting under the same
        umbrella, called the support funds. They are:
      </p>
      <div className="funds-wrapper">
        <div className="fund-container">
          <h3>
            <span aria-hidden>🎓</span> Scholarship Fund - €3,000
          </h3>
          <ul>
            <li>
              Aimed at helping underrepresented or underprivileged tech enthusiasts to join the
              event
            </li>
            <li>When you buy a ticket, you can <Link href="https://ti.to/cluj-javascripters/jsheroes-2020" theme={Link.THEME_DARK}>add a donation for the scholarship fund</Link></li>
            <li>Can cover a variety of costs: ticket, accommodation, transport</li>  
          </ul>

          <CTAButton align="left" url="https://jsheroes-form.typeform.com/to/EAPVUS">
            Apply for the scholarship fund
          </CTAButton>
        </div>
        <div className="fund-container">
          <h3>
            <span aria-hidden>💻</span> Open Source Fund - €5,000
          </h3>
          <ul>
            <li>Aimed at supporting open source projects financially</li>
            <li>
              Money are transfered through{' '}
              <Link href="https://opencollective.com/jsheroes1" theme={Link.THEME_DARK}>
                open-collective
              </Link>
            </li>
            <li>
              We are currently backing{' '}
              <Link href="https://opencollective.com/eslint" theme={Link.THEME_DARK}>
                ESLint
              </Link>{' '}
              and{' '}
              <Link href="https://opencollective.com/babel" theme={Link.THEME_DARK}>
                Babel
              </Link>{' '}
              with $200/month
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .section-wrapper {
          padding: 90px 0;
        }

        .funds-wrapper {
          display: flex;
          flex-wrap: wrap;
        }

        .fund-container {
          width: 50%;
        }

        .fund-container h3 {
          font-size: 28px;
        }

        .fund-container ul {
          margin: 10px 30px;
        }

        .title {
          font-size: 54px;
          color: ${styles.mainColor2};
          font-weight: 700;
          margin: 0 auto 30px;
          text-align: center;
        }

        .description {
          margin: 0 0 40px;
          font-size: 18px;
          color: ${styles.mainColor2};
          line-height: 32px;
          font-weight: 300;
          text-align: center;
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          .section-wrapper {
            padding: 90px 0;
          }

          .title {
            font-size: 46px;
          }

          .description {
            line-height: 30px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          .description {
            text-align: left;
          }

          .section-wrapper {
            padding: 80px 0;
          }

          .title {
            font-size: 33px;
          }

          .description {
            line-height: 28px;
            margin-bottom: 20px;
          }

          .fund-container {
            width: 100%;
            margin: 20px 0;
          }
        }
      `}
    </style>
  </Section>
);

export default Funds;
