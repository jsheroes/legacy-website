import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/code-of-conduct-hero.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const heroDarkOverlay = {
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'hsla(0,0%,0%,.6) none repeat scroll 0 0',
};

const ConductHero = () => (
  <div>
    <Section section={{ style: heroBcgImg }} mainContainer={{ style: heroDarkOverlay }}>
      <div className="dark-banner-overlay">
        <h2 className="text-center" id="logo">
          The
          <span className="logoJs">JS</span>
          <span className="logoHeroes">Heroes</span> Code of Conduct
        </h2>
      </div>
    </Section>
    <style jsx>
      {`
        .logoJs {
          color: #0098ff;
        }
        .logoHeroes {
          color: #e1ebef;
        }
        .header-logo {
          padding: 10px;
        }
        .dark-banner-overlay {
          width: 100%;
          height: 30%;
          position: absolute;
          left: 0;
          bottom: 0;
          content: '';
          background: hsla(0, 0%, 0%, 0.6) none repeat scroll 0 0;
        }
        h2 {
          margin: 45px auto 30px;
          line-height: 1.1;
          color: ${styles.mainColor3};
          font-size: 54px;
          font-weight: 700;
          text-align: center;
        }
        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          h2 {
            font-size: 46px;
          }
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          h2 {
            font-size: 43px;
          }
        }

        @media (max-width: ${mediaQueries.S}) {
          h2 {
            font-size: 24px;
          }
        }
      `}
    </style>
  </div>
);

export default ConductHero;
