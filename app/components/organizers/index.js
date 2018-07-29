import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/conference-photo.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const OrganizersHeader = () => (
  <div>
    <Section section={{ style: heroBcgImg }} />
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

export default OrganizersHeader;
