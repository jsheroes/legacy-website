import { mediaQueries } from '../../constants';
// import CTAButton from '../common/ctaButton';

const Header = () => {
  return (
    <div id="hero" className="hero-wrapper">
      <div className="hero-content">
        {/* <img className="hero-logo" src="/static/img/website-logo.svg" alt="JSHeroes" />
        <div className="hero-text">
          <p>
            <span className="black-stripe">Open-Source Community Event</span>
          </p>
          <p>
            <span className="black-stripe">
              April 23-24th, 2020 in Cluj-Napoca, Romania
            </span>
          </p>
          
        </div> */}
        {/* <CTAButton primary url="https://ti.to/cluj-javascripters/jsheroes-2020">
          Buy Your Conference Ticket
        </CTAButton> */}
      </div>

      <style jsx>
        {`
          .hero-wrapper {
            background: url('/static/img/speakers_and_organizers_grayscale.jpg') center top
              no-repeat;
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
            height: 60px;
            padding-left: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 40px;
            background-color: rgba(0, 0, 0, 0.6);
          }

          .hero-text {
            text-align: center;
            margin-top: 15px;
            color: #fff;
          }

          .hero-text p {
            font-size: 20px;
            font-weight: 500;
          }

          .strikethrough {
            text-decoration: line-through;
          }

          .black-stripe {
            background-color: rgba(0, 0, 0, 0.6);
            padding: 5px 20px;
          }

          @media (max-width: ${mediaQueries.XL}) {
            .hero-wrapper {
              height: 500px;
              background-size: 150%;
              background-position: center center;
            }
          }

          @media (max-width: ${mediaQueries.S}) {
            .hero-wrapper {
              height: 100vh;
              background-size: 400%;
              background-position: top center;
              margin-top: 70px;
            }

            .hero-content {
              margin-top: 70px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
