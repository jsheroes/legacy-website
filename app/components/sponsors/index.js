import Section from "../common/section";
import { styles, mediaQueries } from "../../constants";
import Sponsor from "./sponsor";
import CTAButton from "../common/ctaButton";

const Sponsors = ({ baseUrl, sponsors }) => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div id="sponsors">
      <h2>Event Sponsors</h2>
      {sponsors.length > 0 && (
        <div>
          <p>
            These are the companies that support our event financially through
            the <b>€2,000</b> standard package:
          </p>
          <ul>
            {sponsors.map((sponsor) => (
              <Sponsor {...sponsor} key={sponsor.title} baseUrl={baseUrl} />
            ))}
          </ul>
        </div>
      )}
      <CTAButton url="/become-a-sponsor">Become a Sponsor</CTAButton>
    </div>
    <style jsx>
      {`
        #sponsors {
          padding: 140px 0 0;
        }

        h2 {
          text-align: center;
          font-size: 54px;
          color: ${styles.mainColor2};
          font-weight: 700;
          margin: 50px auto 30px;
        }

        h3 {
          font-size: 28px;
        }

        p {
          margin: 0 0 10px;
          font-size: 18px;
          color: ${styles.mainColor7};
          line-height: 32px;
          font-weight: 300;
          text-align: center;
        }

        ul {
          margin-top: 35px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .causes {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
        }

        .cause {
          display: block;
          width: 320px;
          text-align: center;
        }

        .impact-sponsor {
          margin-top: 15px;
          width: 280px;
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        .impact-sponsor:hover {
          -webkit-filter: grayscale(0%);
          -moz-filter: grayscale(0%);
          filter: grayscale(0%);
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.L}) {
          #sponsors {
            padding: 90px 0 0;
          }

          h2 {
            font-size: 46px;
          }

          p {
            font-size: 17px;
            line-height: 30px;
          }

          .cause {
            width: 260px;
          }
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          #sponsors {
            padding: 70px 0 0;
          }

          h2 {
            font-size: 43px;
          }

          p {
            font-size: 18px;
            line-height: 32px;
          }

          .cause {
            width: 230px;
          }

          .impact-sponsor {
            width: 230px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          #sponsors {
            padding: 80px 0 0;
          }

          h2 {
            font-size: 33px;
          }

          h3 {
            font-size: 22px;
          }

          p {
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 20px;
          }

          .causes {
            flex-direction: column;
          }

          .cause {
            width: 100%;
            display: flex;
          }

          .impact-sponsor {
            width: 188px;
          }

          .cause > div {
            width: 50%;
          }
        }

        @media only screen and (max-width: 500px) {
          .cause {
            display: block;
            margin-bottom: 40px;
          }

          .cause > div {
            width: 100%;
          }
        }
      `}
    </style>
  </Section>
);
export default Sponsors;
