import React from 'react';
import Section from './common/section';
import { mediaQueries, styles } from '../constants';

const Updates = () => {
  return (
    <Section>
      <div id="news" className="wrapper text-left">
        <h1>See You in 2023</h1>
        <p>
          We had a blast in 2022 and we were super happy to see you all in person again after 3
          years. So based on this experience, we're coming back in 2023 with a two-day event, a
          format that used to be our way to go in a pre-pandemic world.
        </p>

        <p>Looking forward to seeing you all back in Cluj, on the 18th and 19th of May 2023!</p>
      </div>

      <style jsx global>
        {`
          .wrapper {
            max-width: 1100px;
            padding-top: 45px;
          }

          .wrapper p {
            margin-bottom: 20px;
            font-size: 18px;
          }

          .wrapper a {
            font-weight: bold;
            color: ${styles.mainColor5};
          }

          .wrapper a:hover {
            color: ${styles.mainColor6};
          }

          .wrapper h1 {
            margin: 0 0 30px;
            font-size: 46px;
            font-weight: 700;
            color: ${styles.mainColor4};
          }

          @media (max-width: ${mediaQueries.S}) {
            .wrapper h1 {
              font-size: 32px;
            }

            .wrapper p {
              font-size: 16px;
            }
          }
        `}
      </style>
    </Section>
  );
};

export default Updates;