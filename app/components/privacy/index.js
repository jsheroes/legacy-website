import Section from '../common/section';
import Link from '../common/link';
import { styles, mediaQueries } from '../../constants';

const PrivacyMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <h3>Privacy Statement</h3>
      <p>
        When you are using the JSHeroes website you entrust us with your data. The purpose of this
        Privacy Statement is to explain what data we collect, why we collect it, how we use it, and
        also to allow you to decide to what extent you disclose your data.
      </p>
      <h4>Types of data we collect</h4>
      <div>
        <p>Personal information may be collected from you in various ways, for example:</p>
        <ul>
          <li>Email address i.e. when you buy a ticket for the JSHeroes conference</li>
          <li>
            Information you provide when you fill in a form related to one of our campaigns
            (including name, email and other details asked for that you provide), i.e. Adopt a
            JavaScripter, Blood Lust
          </li>
          <li>
            IP address and general location data (through the website log file), device & browser
            data (collected through cookies or similar technology)
          </li>
          <li>
            IP address, date, and time associated with each open and click for an email campaign
            sent through our email service provider (MailChimp)
          </li>
        </ul>
        <p>Anonymous data may be collected from you in various ways, for example:</p>
        <ul>
          <li>
            Information on how you were referred to our site via another website, and the links you
            follow when leaving our site (through Google Analytics)
          </li>
          <li>
            {' '}
            Data on our users behavior and their devices (in particular devices IP address (captured
            and stored only in anonymized form), device screen size, device type (unique device
            identifiers), browser information, geographic location (country only), preferred
            language used to display our website). This is done through Hotjar tracking cookies and
            other technologies. Hotjar stores this information in a pseudonymized user profile.
          </li>
        </ul>
      </div>
      <h4>How we use the data we collect</h4>
      <div>
        <p>We use the data we collect for a number of purposes:</p>
        <ul>
          <li>To provide you with the services you signed up for, or requested</li>
          <li>For security purposes, to ensure that our site is safe and secure</li>
          <li>To send email and marketing communications when we have your permission</li>
          <li>To personalize our services i.e. remember your previous session</li>
          <li>
            To optimize Facebook ads based on collected anonymized data, and build targeted
            audiences
          </li>
          <li>
            For statistical purposes, i.e. website traffic analysis, performance of marketing
            communications
          </li>
          <li>To better understand our users’ experience</li>
        </ul>
      </div>
      <h4>Cookies, Analytics and Traffic Data</h4>
      <div>
        <p>
          Cookies are pieces of information that a website places on your device when you visit a
          website. We do not use advertising cookies, and do not allow third party advertising
          networks to collect information about the users of our Site.
        </p>
        <p>We use several types of cookies:</p>
        <ol>
          <li>
            <strong>Strictly necessary cookies</strong> – there are essential for the normal
            functioning of the website i.e. session cookies. These cookies do not track you and
            cannot be opted out of.
          </li>
          <li>
            <strong>Performance & Analytics</strong> – we use 3rd party analytics tools, Google
            Analytics and Hotjar, to help us analyze how our site is used, through compiled reports.
            These data are exclusively used by us for website activity and performance analysis.
          </li>
          <li>
            <strong>Functionality cookies</strong> – hese remember your preferred language,
            understand your preferences, enable our Youtube videos and Social Media buttons to
            function properly. Whithout these the website loses some functionality, but they are
            optional.
          </li>
          <li>
            <strong>Tracking cookies</strong> – we use the Facebook Pixel to create Custom Audiences
            for our Facebook event ads. The data collected in this way is anonymous to us, however,
            this data is stored and processed by Facebook. Facebook may link this information to
            your Facebook account and also use it for its own promotional purposes, in accordance
            with Facebook’s Data Usage Policy{' '}
            <Link theme={Link.THEME_DARK} href="https://www.facebook.com/about/privacy/">
              https://www.facebook.com/about/privacy/
            </Link>
            .
          </li>
        </ol>
      </div>
      <h4>Managing Cookies</h4>
      <p>
        You can delete or disable cookies through your browser settings. Please note that you may
        not be able to take full advantage of a website if you disable cookies. Click below for
        instructions:
      </p>
      <div>
        <Link
          theme={Link.THEME_DARK}
          href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
        >
          Microsoft Internet Explorer
        </Link>
      </div>
      <div>
        <Link
          theme={Link.THEME_DARK}
          href="https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
        >
          Google Chrome
        </Link>
      </div>
      <div>
        <Link
          theme={Link.THEME_DARK}
          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences?redirectlocale=en-US&redirectslug=Enabling+and+disabling+cookies"
        >
          Mozilla Firefox
        </Link>
      </div>
      <div>
        <Link
          theme={Link.THEME_DARK}
          href="https://support.apple.com/kb/PH21411?viewlocale=en_US&locale=en_US"
        >
          Safari web
        </Link>{' '}
        and{' '}
        <Link theme={Link.THEME_DARK} href="https://support.apple.com/en-us/HT201265">
          iOS
        </Link>
      </div>
      <p>
        To opt-out of Hotjar tracking cookies follow this opt-out{' '}
        <Link theme={Link.THEME_DARK} href="https://www.hotjar.com/legal/compliance/opt-out">
          link
        </Link>
        .
      </p>
      <p>
        To object to the collection of your data by Facebook Pixel, or to the use of your data for
        the purpose of displaying Facebook ads click here:{' '}
        <Link theme={Link.THEME_DARK} href="https://www.facebook.com/settings?tab=ads">
          https://www.facebook.com/settings?tab=ads
        </Link>
        .
      </p>

      <h4>Campaign tracking</h4>
      <p>
        We use email tracking pixels in MailChimp campaigns, these data are organized in reports
        that are solely used to monitor how an email campaign performed and what actions subscribers
        took.
      </p>
      <h4>Sharing your data with 3rd parties</h4>
      <div>
        <p>
          Personal as well as non-personal data collected by us is considered confidential and will
          never be sold or leased to third parties, besides the exceptions mentioned below:
        </p>
        <ul>
          <li>
            When companies perform services on our behalf, i.e. online payments, conference
            registration system, email marketing platform, website analytics.
          </li>
          <li>
            If we are quired by public authorities or other organisation in order to meet a legal or
            regulatory obligation, in accordance with Union or Member State law.
          </li>
        </ul>
        <p>
          We have checked that our 3rd party solution providers adhere to GDPR guidelines on data
          processing and storage:
        </p>
        <ul>
          <li>
            <Link theme={Link.THEME_DARK} href="https://mailchimp.com/legal/privacy/">
              MailChimp
            </Link>{' '}
            Privacy Policy
          </li>
          <li>
            <Link theme={Link.THEME_DARK} href="https://ti.to/privacy">
              Ti.to
            </Link>{' '}
            Privacy Policy
          </li>
          <li>
            <Link theme={Link.THEME_DARK} href="https://www.hotjar.com/legal/policies/privacy">
              Hotjar
            </Link>{' '}
            Privacy Policy
          </li>
          <li>
            <Link
              theme={Link.THEME_DARK}
              href="https://support.google.com/analytics/answer/6004245?hl=en"
            >
              Google Analytics
            </Link>{' '}
            Data Privacy and Security
          </li>
          <li>
            <Link
              theme={Link.THEME_DARK}
              href="https://www.paypal.com/en/webapps/mpp/ua/privacy-full"
            >
              PayPal
            </Link>{' '}
            Privacy Policy
          </li>
          <li>
            <Link
              theme={Link.THEME_DARK}
              href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active"
            >
              Facebook
            </Link>{' '}
            is certified under the Privacy Shield Agreement and thus guarantees compliance with
            European data protection legislation
          </li>
        </ul>
        <p>
          We will not share or sell your personal data to any other 3rd party for their own
          marketing purposes unless we have your permission to do so.
        </p>
      </div>
      <h4>Changes to this statement</h4>
      <p>
        From time to time, we may review this privacy statement. Please check this page occasionally
        to ensure that you are informed of any changes.
      </p>
      <h4>Contact information</h4>
      <p>
        We welcome your views about our website and our privacy policy. In case you want more
        information about how we collect and manage data, or you wish to correct or delete that data
        we might have about you, please contact us at:{' '}
        <Link theme={Link.THEME_DARK} href="mailto:welcome@jsheroes.io">
          welcome@jsheroes.io
        </Link>
      </p>
      <p>Last updated: 8 August, 2018.</p>
    </div>

    <style jsx>
      {`
        .central-container {
          position: relative;
          width: 100%;
          padding: 100px 0 140px;
          margin: 0 auto;
        }
        ul {
          margin-left: 40px;
        }

        h4 {
          margin-top: 20px;
        }

        p {
          margin: 20px 0 20px;
          font-size: 18px;
          color: ${styles.mainColor7};
          line-height: 32px;
          font-weight: 300;
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
            padding: 50px 0 70px;
          }

          p {
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 28px;
          }
        }

        @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
          .central-container {
            padding: 60px 0 80px;
          }

          ul {
            margin-left: 40px;
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
      `}
    </style>
  </Section>
);

export default PrivacyMain;
