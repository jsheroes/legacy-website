import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const ContestMain = () => (
  <Section>
    <div className="central-container">
      <h2>
        {' '}
        <span className="logojs">JSHeroes</span> Sticker Contest
      </h2>
      <section>
        <strong>The creative brief</strong>
        <div>
          JSHeroes is an <strong>open-source</strong> community event, this means we rely on the
          free time and skills of the community to organize the event each year. We are currently
          preparing the 3rd edition taking place in April 11-12, 2019.
        </div>
        <div>
          We love everything related to communities, and
          <strong> we love stickers</strong> - we collect them, trade them, and sometimes even stick
          them on our laptops. Some of us like to use them on mugs and T-shirts, whatever the case,
          we love these things!
        </div>
        <div>
          Our aim is to expand our pool of stickers with new and creative ones that people would
          love to use. The people we reach are web/software developers, UI/UX designers.
        </div>
      </section>

      <section>
        <strong>Prizes</strong>
        <div>
          <strong>1st</strong> PRIZE: 1 ticket to JSHeroes conference
        </div>
        <div>
          <strong>2nd</strong> PRIZE: 1 ticket to JSHeroes conference
        </div>
        <div>
          <strong>3rd</strong> PRIZE: Design and UI/UX books you’ll love
        </div>
        <div>
          Each sticker will be voted on individually and all submissions will be ranked according to
          the number of votes. If a candidate has more than 1 sticker selected, only the top 1st
          sticker will receive a prize.
        </div>
      </section>

      <section>
        <strong>Competition schedule</strong>
        <div>
          Sticker submission: <strong>January 16 – 26</strong>, 2019
        </div>
        <div>
          JSHeroes team voting: <strong>January 27-28</strong>, 2019
        </div>
        <div>
          Winners announcement: <strong>January 31</strong>, 2019
        </div>
      </section>

      <section>
        <strong>Requirements</strong>
        <div>• Each candidate can submit a maximum of two stickers.</div>
        <div>
          • All images must be submitted as a high-resolution, Adobe Illustrator or Photoshop file
          AND a JPEG at 300 dpi or higher.
        </div>
      </section>

      <section>
        <strong>Design criteria</strong>
        <div>
          1. Stickers designs must be original work and incorporate the{' '}
          <strong>JSHeroes logo</strong>
        </div>
        <div>2. JavaScript technology / community-related</div>
        <div>3. Be simple, be funny if possible.</div>
      </section>

      <section>
        <strong>Submission rules</strong>
        <div>
          Please submit your stickers as a compressed or zip file to: <u>welcome@jsheroes.io</u>
        </div>
        <div>
          Use email Subject: <strong> JSHeroes stickers competition</strong>
        </div>
        <div>
          In the email body include: your <stronng>full name</stronng>, and any sticker explanation{' '}
          <strong>notes.</strong>
        </div>
        <div>If you do not follow the submission rules your submission may not be successful.</div>
      </section>

      <section>
        <strong>Permissions</strong>
        <div>
          • Entrants assert that they either own or have the rights to all content used in their
          designs. Entrants using third-party material (i.e. material not owned by the entrant) must
          have received explicit permission from the owner to use these materials.
        </div>
        <div>
          • Also, entrants grant the JSHeroes community <strong>royalty-free</strong>, perpetual,
          irrevocable, non-exclusive right and license to the images.
        </div>
        <div>
          • Entrants will agree to authorize JSHeroes community members to use and share their
          stickers within the JSHeroes community for non-commercial and commercial use.
        </div>
        <div>
          Feel free to share your stickers on Twitter with the <strong>#jsheroesstickers</strong>{' '}
          hashtag to get the buzz going about the contest.
        </div>
      </section>

      <section>
        <strong>Good luck and have fun!</strong>
        <div>JSHeroes Team</div>
      </section>
    </div>
    <style jsx>
      {`
        .central-container {
          position: relative;
          width: 100%;
          max-width: 1096px;
          padding: 100px 0 140px;
          margin: 0 auto;
          text-align: left;
        }

        h2 {
          font-size: 39px;
          text-align: center;
          margin-bottom: 80px;
          color: ${styles.mainColor2};
        }

        .logojs {
          color: ${styles.mainColor6};
        }

        .space {
          height: 30px;
        }

        div {
          color: #555555;
          font-size: 18px;
        }

        section {
          margin: 20px 0px;
        }

        strong {
          color: ${styles.mainColor1};
        }

        @media (max-width: ${mediaQueries.S}) {
          h2 {
            font-size: 32px;
            line-height: 40px;
          }
        }
      `}
    </style>
  </Section>
);
export default ContestMain;
