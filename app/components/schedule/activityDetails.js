import { styles, mediaQueries } from '../../constants';

const ActivityDetails = ({ title, speakers, isSoldOut }) => {
  const activityTitle = isSoldOut ? `${title} ( SOLD OUT )` : title;

  return (
    <div className="activity-details">
      <div className="activity-title">{activityTitle}</div>
      {speakers.map(speaker => (
        <div className="speaker-details" key={speaker.permalink}>
          <span className="speaker-name">{speaker.fullName}</span>
          <span className="speaker-position">, {speaker.position}</span>
          {speaker.company && <span className="speaker-company">, {speaker.company}</span>}
        </div>
      ))}
      <style jsx>
        {`
          .activity-details {
            flex: 2;
          }

          .activity-title {
            text-align: center;
            font-weight: ${speakers.length === 0 ? '400' : '700'};
          }

          .speaker-name {
            color: ${styles.mainColor6};
          }

          .speaker-position,
          .speaker-company {
            display: none;
          }

          @media screen and (min-width: ${mediaQueries.L}) {
            .speaker-position,
            .speaker-company {
              display: inline;
            }

            .activity-details {
              padding: ${speakers.length === 0 ? '15px 0' : '0'};
            }

            .activity-title {
              text-align: ${speakers.length === 0 ? 'center' : 'left'};
            }
          }
        `}
      </style>
    </div>
  );
};

export default ActivityDetails;
