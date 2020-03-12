import React from 'react';

import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import { styles } from '../app/constants';

const Covid19 = () => (
  <Layout page="covid-19">
    <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
      <>
        <h1 className="title">Updates related to the outbreak of COVID-19</h1>
        <p>
          We`ve been closely monitoring the situation with the spread of the coronavirus, both in
          Romania and world-wide. Unfortunately, the situation is affecting a lot of events and will
          definitely affect JSHeroes 2020. Whatever the outcome, our first priority is to ensure
          that any actvity we do is risk free and the health of the people around the event is our
          top priority at the moment.
        </p>
        <p>
          As of today (12.03.2020), the Romanian government is forbidding any public event with more
          than 100 attendees until the end of the month and needs to give green light based on a
          review to all other events. There are 49 confirmed cases in Romania, but there is
          consensus that this number will grow as the numbers in Europe are still growing and a lot
          of people from Romania were in contact with people from Italy, France, Spain and other
          countries. The situation is not critical in Romania, but the authorities are pretty much
          in control and are raising more and more restrictions with each passing day.
        </p>
        <p>
          However, we are preparing <strong>three separate scenarios</strong> due to all the
          variables and uncertainties involved.
        </p>
        <h2>Scenario 1 - Event goes as planned</h2>
        <p>
          If things do not escalate in the region and we have the approval of the health authority
          in Romania, we plan on doing the event according to the plan. It will most likely be a
          smaller event, since we do not expect as many attendees as last year and will likely
          suffer some changes because of speaker cancellations, but we will try our best to make
          sure we have the same JSHeroes feel as always. However, this is a rather optimistic plan,
          considering the current development. So scenario 2 or 3 is the likely outcome as we speak.
        </p>
        <h2>Scenario 2 - Event gets moved to the autumn season</h2>
        <p>
          This option involves moving the event somewhere in the autumn season and to try and get a
          similar speaker lineup and pretty much do everything the same way as we`re used to. It is
          far from ideal, as we all have full-time jobs and things move rather organically for the
          spring season. We will be in touch with the community about different options around the
          autumn season.
        </p>
        <h2>Scenario 3 - Event gets cancelled</h2>
        <p>
          Unfortunately this option is also on the table. We are all committed to organizing our
          community event on the long run, but at the end of the day we are a bunch of volunteers
          and we want to make sure we keep a fine balance between how much time we spend doing this
          and the return we get. Public health comes first and it would be silly to put anyone in
          danger considering the current situation.
        </p>
        <h2>Money, tickets, refunds</h2>
        <p>
          In all of the above scenarios we will transfer the conference tickets to the next event
          and will most likely refund the workshop tickets automatically. You can also ask for a
          full refund for the conference tickets at any time, starting now.
        </p>
        <style jsx>
          {`
            .title {
              margin-top: 32px;
            }
          `}
        </style>
      </>
    </Section>
  </Layout>
);

export default Covid19;
