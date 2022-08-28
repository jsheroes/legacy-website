import { mediaQueries } from '../../constants';
// import CTAButton from '../common/ctaButton';

const Header = () => {
  return (
    <div id="hero" className="hero-wrapper">
      <div className="hero-content">
        <img className="hero-logo" src="/static/img/website_logo_2022.svg" alt="JSHeroes" />
        <div className="hero-text-wrapper">
          <span className="hero-details hero-text-blue">
            <span className="hero-semibold-text">Open-Source</span> Community Event
          </span>
          <p>
            <span className="hero-date">
              May <span className="hero-date-day">18-19th</span> 2023
            </span>
          </p>
          <p className="hero-details">in Cluj-Napoca, Romania</p>
          <p className="hero-details">#ReturnOfTheHeroes</p>
        </div>
        {/* <CTAButton primary url="https://ti.to/jsheroes/2022">
          Buy Ticket
        </CTAButton> */}
      </div>

      <style jsx>
        {`
          .hero-wrapper {
            background: url('/static/img/jsh-photo-homepage.jpg') center center no-repeat;
            background-size: 100%;
            height: 700px;
            display: flex;
            align-items: center;
            margin-top: 0;
          }
          .hero-content {
            text-align: center;
            width: 100%;
          }

          .hero-logo {
            height: 100px;
          }

          .hero-text-wrapper {
            text-align: center;
            color: #fff;
          }

          .hero-details {
            font-size: 20px;
          }

          .hero-semibold-text {
            font-weight: 500;
          }

          .hero-text-blue {
            color: #4d88c9;
          }

          .hero-date {
            padding: 8px 16px;
            border: 1px solid white;
            border-radius: 16px;
            font-size: 32px;
          }

          .hero-date-day {
            font-size: 40px;
          }

          .strikethrough {
            text-decoration: line-through;
          }

          @media (max-width: ${mediaQueries.XL}) {
            .hero-wrapper {
              background-size: 120%;
            }
          }

          @media (max-width: ${mediaQueries.L}) {
            .hero-wrapper {
              height: 500px;
              background-size: 150%;
            }

            .hero-logo {
              height: 70px;
            }

            .hero-details {
              font-size: 16px;
            }

            .hero-date {
              font-size: 24px;
            }

            .hero-date-day {
              font-size: 30px;
            }
          }

          @media (max-width: ${mediaQueries.S}) {
            .hero-wrapper {
              background: url('/static/img/jsh-photo-homepage-tablet.jpg') center center no-repeat;
              margin-top: 50px;
            }

            .hero-content {
              margin-top: 30px;
            }

            .hero-logo {
              height: 70px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;