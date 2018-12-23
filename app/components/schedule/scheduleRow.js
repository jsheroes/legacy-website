import { styles, mediaQueries } from '../../constants';
import ActivityDetails from './activityDetails';
import ActivityLocation from './activityLocation';
import ActivityImage from './activityImage';

const getSpeakers = (agendaItem, speakers) => {
  const speakerRef = agendaItem.speakerRef || '';
  const agendaPermalinks = typeof speakerRef === 'string' ? [speakerRef] : speakerRef;
  return agendaPermalinks
    .map(permalink => speakers.find(speaker => speaker.permalink === permalink))
    .filter(speaker => Boolean(speaker));
};

const getActivity = (agendaItem, agendaItemSpeakers, type) => {
  const isWorkshopTab = type === 'workshops';
  const hasSpeakers = agendaItemSpeakers.length >= 1;
  let activity;
  if (hasSpeakers) {
    // activities with at least one speaker: workshops or talks
    activity = isWorkshopTab ? agendaItemSpeakers[0].workshop : agendaItemSpeakers[0].talk;
  } else {
    // activities with no speakers, for example Check-in & Coffee
    activity = {
      title: agendaItem.overrideTitle || 'TBA',
      soldOut: false,
      hasNoSpeakers: true,
    };
  }
  return activity;
};

const ScheduleRow = ({ agendaItem, baseUrl, type, speakers }) => {
  if (!agendaItem) {
    return '';
  }

  const agendaItemSpeakers = getSpeakers(agendaItem, speakers);
  const activity = getActivity(agendaItem, agendaItemSpeakers, type);

  return (
    <div key={activity.title} className="activity-row">
      <ActivityLocation
        time={agendaItem.time}
        room={agendaItem.room}
        hasNoSpeakers={activity.hasNoSpeakers}
      />
      <ActivityImage baseUrl={baseUrl} speakers={agendaItemSpeakers} />
      <ActivityDetails
        title={activity.title}
        speakers={agendaItemSpeakers}
        isSoldOut={activity.soldOut}
        activityType={type}
      />
      <style jsx>
        {`
          .activity-row {
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.7);
            color: ${styles.mainColor3};
            font-weight: 400;
            text-align: center;
          }

          @media screen and (min-width: ${mediaQueries.L}) {
            .activity-row {
              text-align: left;
              flex-direction: row;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScheduleRow;
