import Router from 'next/router';
import Link from '../common/link';
import { styles, mediaQueries } from '../../constants';

const ActivityDetails = ({ title, speakers = [], isSoldOut, activityType }) => {
  const activityTitle = isSoldOut ? `${title} ( SOLD OUT )` : title;
  const titleContent =
    speakers.length > 0 && activityType === 'workshops' ? (
      <Link
        href={`/workshops?name=${speakers[0].workshop.permalink}`}
        as={`/workshops/${speakers[0].workshop.permalink}`}
        onMouseEnter={() => {
          Router.prefetch(`/workshops?name=${speakers[0].workshop.permalink}`);
        }}
      >
        {activityTitle}
      </Link>
    ) : (
      activityTitle
    );

  return (
    <div className="activity-details">
      <div className="activity-title">{titleContent}</div>
      {speakers.map(speaker => (
        <div className="speaker-details" key={speaker.permalink}>
          <span className="speaker-name">
            <Link
              href={`/speakers?name=${speaker.permalink}`}
              as={`/speakers/${speaker.permalink}`}
              onMouseEnter={() => {
                Router.prefetch(`/speakers?name=${speaker.permalink}`);
              }}
              theme={Link.THEME_DARK}
            >
              {speaker.fullName}
            </Link>
          </span>
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
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ActivityDetails;
