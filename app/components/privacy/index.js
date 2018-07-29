import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const PrivacyMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <h4>Privacy Statement</h4>
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
            Data on our users’ behavior and their devices (in particular device`s IP address
            (captured and stored only in anonymized form), device screen size, device type (unique
            device identifiers), browser information, geographic location (country only), preferred
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
            For statistical purposes, i.e. website traffic analysis, performance of marketing
            communications
          </li>
          <li>To better understand our users’ experience</li>
        </ul>
      </div>
      <h4>Cookies policy</h4>
      <div>
        <p>
          Cookies are pieces of information that a website places on your device when you visit a
          website. We do not use advertising cookies, and do not allow third party advertising
          networks to collect information about the users of our Site. We use several types of
          cookies:
        </p>
        <ol>
          <li>
            Strictly necessary cookies – there are essential for the normal functioning of the
            website i.e. session cookies. These cookies do not track you and cannot be opted out of.
          </li>
          <li>
            erformance & Functionality cookies – these remember your preferred language, understand
            your preferences, enable our Youtube videos and Social Media buttons to function
            properly. Whithout these the website loses some functionality, but they are optional.
          </li>
          <li>
            Analytics cookies – we use 3rd party analytics tools, Google Analytics and Hotjar, to
            help us analyze how our site is used, through compiled reports. These data are
            exclusively used by us for website activity and performance analysis. These can also be
            opted out of.
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
        <a
          href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
          rel="noopener noreferrer"
          target="_blank"
        >
          Microsoft Internet Explorer
        </a>
      </div>
      <div>
        <a
          href="https://support.google.com/chrome/answer/95647?hl=en&p=cpn_cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Chrome
        </a>
      </div>
      <div>
        <a
          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences?redirectlocale=en-US&redirectslug=Enabling+and+disabling+cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Firefox
        </a>
      </div>
      <div>
        <a
          href="https://support.apple.com/kb/PH21411?viewlocale=en_US&locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Safari web
        </a>{' '}
        and
        <a
          href="https://support.apple.com/en-us/HT201265"
          target="_blank"
          rel="noopener noreferrer"
        >
          iOS
        </a>
      </div>
      <p>
        To opt-out of Hotjar tracking cookies follow this opt-out
        <a
          href="https://www.hotjar.com/legal/compliance/opt-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
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
            <a
              href="https://mailchimp.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MailChimp
            </a>{' '}
            Privacy Policy
          </li>
          <li>
            <a href="https://ti.to/privacy" target="_blank" rel="noopener noreferrer">
              Ti.to
            </a>{' '}
            Privacy Policy
          </li>
          <li>
            <a
              href="https://www.hotjar.com/legal/policies/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hotjar
            </a>{' '}
            Privacy Policy
          </li>
          <li>
            <a
              href="https://support.google.com/analytics/answer/6004245?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics
            </a>{' '}
            Data Privacy and Security
          </li>
          <li>
            <a
              href="https://www.paypal.com/en/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal
            </a>{' '}
            Privacy Policy
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
        <a href="mailto:welcome@jsheroes.io">welcome@jsheroes.io</a>
      </p>
      <p>Last updated: 4 June, 2018.</p>
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
