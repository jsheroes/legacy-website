import Section from '../common/section';
import Link from '../common/link';
import CTAButton from '../common/ctaButton';
import { styles, mediaQueries } from '../../constants';

const DiversityTickets = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <h2>Apply for our Diversity Tickets</h2>
      <p>
        At JSHeroes,<strong> we strive for an inclusive and diverse community</strong>. This has
        determined us over the years to put together a diversity program in order to help
        underrepresented groups in tech to attend this community event. This includes but isn’t
        limited to: women, people of color, LGBTQIA+ people, and disabled people.
      </p>
      <p>
        The ticket includes{' '}
        <strong>
          admission to the conference (11-12 April), catering for the day of the conference, coffee
          breaks and admission to the parties organised for the conference attendees
        </strong>
        . All attendees, speakers, sponsors and staff at JSHeroes 2019 are required to agree with
        the{' '}
        <Link href="/code-of-conduct" openInNewTab theme="theme-dark">
          code of conduct
        </Link>{' '}
        of the event. Please make sure to read it before applying. Also note that traveling and
        accommodation costs will need to be supported by you.
      </p>
      <p>
        There will be several tickets available, some offered by the conference organizers and some
        bought with a regular ticket. To apply for one diversity ticket, you need to{' '}
        <strong>fill in a form and wait for a confirmation</strong> from the team before planning
        anything. We are looking forward to learning a little bit about your story so far and the
        impact attending JS Heroes will have on your future path.
      </p>
      <p>Please mind that only applications in English will be taken into account. Thank you!</p>
      <CTAButton
        primary
        url="https://docs.google.com/forms/d/e/1FAIpQLScein5Y_hLum7UPkc4weDZcL3372HYm7K24x0DUqGvkgEbg2A/viewform"
      >
        Apply to Diversity Tickets
      </CTAButton>
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

export default DiversityTickets;
