import Link from '../common/link';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const MascotMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="central-container">
      <div className="header">
        <div className="header-section header-section--image">
          <img className="image-bear-mascot" src="/static/img/bear.png" alt="ecma bear mascot" />
        </div>

        <div className="header-section">
          <h2>
            Meet Ecma, the <span className="logoJS">JS</span>
            <span>Heroes</span> bear mascot
          </h2>

          <p>
            We just needed a mascot to show the world how cute and fuzzy we are. Just kidding, we
            are serious professional people, working hard to organise an awesome JavaScript
            conference each year. Ecma the bear is our way to offer a bit of help to “The Millions
            of Friends” Association and their{' '}
            <Link theme={Link.THEME_DARK} href="https://millionsoffriends.org/en/libearty/">
              LiBearty project.
            </Link>
          </p>

          <p>
            LiBearty is the largest brown bear sanctuary in the world, located near the town of
            Zărnești in the Carpathian Mountains. On 69 hectars of oak forest, it’s currently
            hosting over 100 bears that were saved from awful captivity in cages, zoos, circuses.
          </p>

          <p>
            Romania is home to 40% of the entire brown bear population of Europe, meaning
            approximately 6000 bears. The bears-humans relationship is a complicated one. Their
            natural habitat is becoming more fragmented because of logging activities and the
            expansion of tourist or residential areas, and this causes the bears to leave the
            forests to search for food.
          </p>
        </div>
      </div>

      <p>
        Trophy hunting for bears has been banned in 2016, through the EU Habitats Directive, with
        derogating special conservation measures being possible only if other alternative solutions
        have been implemented unsuccessfully, which is not the case in Romania. Continued viability
        of brown bear populations is largely dependent on a cooperative approach towards research,
        management, conservation, land use, and education. “The Millions of Friends” Association
        recognises these difficult challenges.
      </p>

      <p>
        Support LiBearty by{` `}
        <Link
          theme={Link.THEME_DARK}
          href="https://millionsoffriends.org/en/libearty/adopt-a-bear/"
        >
          virtually adopting a bear.
        </Link>
      </p>

      <p>
        You can even watch the bears live{` `}
        <Link
          theme={Link.THEME_DARK}
          href="https://www.youtube.com/watch?v=-61APDGMjc4&fbclid=IwAR2HQEt_b3DiMiyputmQm7kxAJCVBWmTj5x4PG4rop2viH-KXt165wsfPPg"
        >
          here.
        </Link>
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

        .header {
          display: flex;
          flex-direction: column;
        }

        .header-section {
          width: 100%;
        }

        .header-section--image {
          display: flex;
          justify-content: center;
          padding-bottom: 100px;
        }

        @media (min-width: ${mediaQueries.L}) {
          .header {
            flex-direction: row;
          }
          .header-section {
            width: 50%;
          }
          .header-section--image {
            padding-bottom: 0;
          }
        }

        .logoJS {
          color: ${styles.mainColor6};
        }
      `}
    </style>
  </Section>
);

export default MascotMain;
