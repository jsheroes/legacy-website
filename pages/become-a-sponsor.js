import React from 'react';

import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import Statistics from '../app/components/statistics';
import Link from '../app/components/common/link';
import { styles, mediaQueries } from '../app/constants';

const BecomeASponsorPage = () => (
  <Layout page="become-a-sponsor">
    <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
      <div className="header-image" />
      <div className="central-container">
        <h1>Become A Sponsor</h1>
        <p>
          View the&nbsp;
          <Link openInNewTab theme={Link.THEME_DARK} href="/static/brochure.pdf">
            Sponsorship Brochure
          </Link>
        </p>
        <p>
          <strong>JSHeroes</strong> is an event by and for the JavaScript community, both local and
          international. Our aim is to provide top-notch content to keep developers up to date with
          the <strong>latest technologies</strong>, as well as to help them level up their technical
          skills.
        </p>
        <p>
          The conference itself is a perfect occasion to bring together international and local
          speakers, passionate developers and companies that believe in our mission. Whoever has
          organized a conference knows the amount of <strong>energy</strong>, time and financial
          resources that it requires. The financial support received from companies is helping us
          offer a high quality experience, while also keeping the price of a ticket to an acceptable
          level for the local market.
        </p>
        <p>
          We want to emphasize the <strong>educational</strong> aspect of the conference, this is
          definitely a place where you can meet new developers, learn about the market`s demands and
          expectations. Being developers ourselves, we are fond of <strong>smart</strong> and
          non-intrusive promotional methods and materials. We can provide feedback and consultancy
          to get the most out of your participation at JSHeroes.
        </p>

        <strong>Interested in sponsoring JSHeroes?</strong>
        <p>
          Send us an email at{' '}
          <Link theme={Link.THEME_DARK} href="mailto:contact@jsheroes.io">
            contact@jsheroes.io
          </Link>
          . We will follow-up and send you our current offer. Or you can download our{' '}
          <Link openInNewTab theme={Link.THEME_DARK} href="/static/brochure.pdf">
            Sponsorship Brochure
          </Link>{' '}
          for more info.
        </p>
        <strong>What you get?</strong>
        <ul>
          <li>Direct access to 600+ developers</li>
          <li>
            Venue to advertise your company, product, service to a group of passionate and dedicated
            developers
          </li>
          <li>Opportunity to touch base with the community about your products or new ideas</li>
          <li>The chance to increase your JavaScript developer team`s knowledge</li>
        </ul>
      </div>
      <Statistics />
      <style jsx>
        {`
          .central-container {
            width: 100%;
            padding: 250px 0 30px;
            margin: 0 auto;
          }

          .header-image {
            position: absolute;
            left: 0;
            right: 0;
            color: white;
            margin: 0;
            background-image: url('/static/img/become-a-sponsor-header.png');
            height: 200px;
            background-position: left;
            background-repeat: no-repeat;
            background-size: cover;
          }

          ul {
            margin-left: 40px;
          }

          h1 {
            text-align: center;
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
              padding: 250px 0 70px;
            }

            .header-image {
              background-image: url('/static/img/become-a-sponsor-header-smaller.png');
            }

            p {
              margin-bottom: 20px;
              font-size: 16px;
              line-height: 28px;
            }
          }

          @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
            .central-container {
              padding: 250px 0 80px;
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
              padding: 250px 0 100px;
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
  </Layout>
);

export default BecomeASponsorPage;
