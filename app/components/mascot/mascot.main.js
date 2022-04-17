import Link from '../common/link';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const MascotMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="page-container">
      <h2>
        Meet Ecma, the <span className="page-text-logo">JS</span>
        <span>Heroes</span> bear mascot
      </h2>

      <p>
        We just needed a mascot to show the world how cute and fuzzy we are. Just kidding, we are
        serious professional people, working hard to organise an awesome JavaScript conference each
        year. Ecma the bear is our way to offer a bit of help to “The Millions of Friends”
        Association and their{' '}
        <Link theme={Link.THEME_DARK} href="https://millionsoffriends.org/en/libearty/">
          LiBearty project.
        </Link>
      </p>

      <p>
        <b>AMP LiBearty</b> is the largest brown bear sanctuary in the world, located near the town of
        Zărnești in the Carpathian Mountains. On 69 hectars of oak forest, with trees where the
        bears can climb, swimming pools where they can splash, food according to their diets studied
        by the veterinarians and the necessary medical care. It’s currently hosting over{' '}
        <b>100 bears</b> that were saved from awful captivity in cages, zoos, circuses.
      </p>

      <div className="page-section">
        <div className="page-subsection">
          <p>
            Romania is home to 40% of the <b>entire brown bear population</b> of Europe, meaning
            approximately 6000 bears. The bears-humans relationship is a complicated one. Their
            natural habitat is becoming more fragmented because of logging activities and the
            expansion of tourist or residential areas, and this causes the bears to leave the
            forests to search for food. Trophy hunting for bears has been banned in 2016, through
            the EU Habitats Directive, with derogating special <b>conservation measures</b> being
            possible only if other alternative solutions have been implemented unsuccessfully, which
            is not the case in Romania.
          </p>
        </div>

        <div className="page-subsection page-subsection--right">
          <img
            className="page-image"
            src="static/img/mascot/liberty-bear-photo.png"
            alt="liberty bear"
          />
        </div>
      </div>
      <p>
        Continued viability of brown bear populations is largely dependent on a cooperative approach
        towards research, management, conservation, land use, and education. “The Millions of
        Friends” Association recognises these difficult challenges.
      </p>

      <p>
        Support AMP LiBearty by{` `}
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
          href="https://www.youtube.com/watch?v=V3aTpIxIGDg"
        >
          here.
        </Link>
      </p>
    </div>
    <style jsx>
      {`
        .page-container {
          position: relative;
          width: 100%;
          padding: 100px 0 140px;
          margin: 0 auto;
          text-align: left;
        }

        .page-text-logo {
          color: ${styles.mainColor6};
        }

        .page-image {
          border-radius: 50%;
          width: 200px;
          height: 200px;
        }

        .page-section {
          display: flex;
          flex-direction: column;
        }

        .page-subsection {
          width: 100%;
        }

        .page-subsection--right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: ${mediaQueries.S}) {
          .page-section {
            flex-direction: row;
          }

          .page-subsection {
            width: auto;
          }

          .page-subsection--right {
            padding-bottom: 0;
            padding-left: 50px;
          }
        }
      `}
    </style>
  </Section>
);

export default MascotMain;
