import React from 'react';
import Section from './common/section';
import { mediaQueries, styles } from '../constants';

const Updates = () => {
    return (
      <Section>
        <div id="news" className="wrapper text-left">
          <h1>JSHeroes is back!</h1>
          <p>
            Hey folks! Did you miss us? Because we definitely missed you! We missed the busy
            hallways, the full-house conference room, the enriching keynotes to share with
            like-minded people, coffee breaks, laughs, and most of all, we missed the unique vibes
            we are creating together!
          </p>
          <p>
            Are you ready for the <strong>#ReturnOfTheHeroes</strong>? Even if the pandemic is not
            over, we decided to take action and organize our community event this June. We’ll embody
            the JSHeroes experience into a <strong>one-day in-person event</strong>, designed with a
            limit of <strong>300</strong> people. It will be a new format and a new type of
            challenge for us. But we promise we’ll do our best to create the same fun, engaging and
            cozy experience that you all came to know as <strong>JSHeroes</strong>.
          </p>
        </div>

        <style jsx global>
          {`
            .wrapper {
              max-width: 1100px;
              padding-top: 45px;
            }

            .wrapper p {
              margin-bottom: 20px;
              font-size: 16px;
            }

            .wrapper a {
              font-weight: bold;
              color: ${styles.mainColor5};
            }

            .wrapper a:hover {
              color: ${styles.mainColor6};
            }

            .wrapper h1 {
              margin: 0 0 50px;
              font-size: 32px;
              font-weight: 700;
              color: ${styles.mainColor4};
            }

            @media (max-width: ${mediaQueries.S}) {
              .wrapper h1 {
                font-size: 52px;
              }

              .wrapper p {
                font-size: 18px;
              }
            }
          `}
        </style>
      </Section>
  );
};

export default Updates;
