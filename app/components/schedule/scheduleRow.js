import { styles } from '../../constants';
import speakers from '../../data/2018/speakers';

const ScheduleRow = ({ agendaItem, activeTab, baseUrl }) => {
  // eslint-disable-line complexity
  if (!agendaItem) {
    return '';
  }

  const singleSpeaker = typeof agendaItem.speakerRef === 'string';

  const firstSpeaker = singleSpeaker
    ? speakers.find(s => s.permalink === agendaItem.speakerRef)
    : speakers.find(s => s.permalink === agendaItem.speakerRef[0]);

  const secondSpeaker = singleSpeaker
    ? null
    : speakers.find(s => s.permalink === agendaItem.speakerRef[1]);

  if (!firstSpeaker) {
    // TBA in agenda
    return (
      <div key={agendaItem.time} className="activity-row clearfix">
        <div className="activity-details">
          <span>{agendaItem.overrideTitle || 'TBA'}</span>
        </div>
        <div className="activity-location">
          <div className="room-and-time">
            <div>{agendaItem.time}</div>
          </div>
        </div>
        <style jsx>
          {`
            .activity-row {
              padding: 20px 0;
              border-bottom: 1px solid rgba(255, 255, 255, 0.7);
              width: 100%;
              height: 100px;
              color: ${styles.mainColor3};
              font-weight: 400;
              text-align: center;
            }

            @media screen and (min-width: 1000px) {
              .activity-row {
                text-align: none;
              }
              .activity-details {
                width: 85%;
                height: 100%;
                float: right;
              }

              .activity-location {
                text-align: left;
                width: 15%;
                height: 100%;
              }

              .room-and-time {
                margin-top: 20px;
              }

              .activity-details span {
                margin-top: 20px;
                display: block;
              }
            }
          `}
        </style>
      </div>
    );
  }

  const isWorkshopTab = activeTab === 0;
  const activity = isWorkshopTab ? firstSpeaker.workshop : firstSpeaker.talk;
  const activityTitle = activity.soldOut ? `${activity.title} ( SOLD OUT )` : activity.title;

  return (
    <div key={activity.title} className="activity-row clearfix">
      <div className="activity-details">
        <div className="activity-title">{activityTitle}</div>
        <div>
          <a className="speaker-name">{firstSpeaker.fullName}</a>
          <span className="speaker-position">,{firstSpeaker.position}</span>
          {firstSpeaker.company && <span className="speaker-company">{firstSpeaker.company}</span>}
        </div>
        {secondSpeaker && (
          <div>
            <a className="speaker-name">{secondSpeaker.fullName}</a>
            <span className="speaker-position">,{secondSpeaker.position}</span>
            {secondSpeaker.company && (
              <span className="speaker-company">{secondSpeaker.company}</span>
            )}
          </div>
        )}
      </div>
      <div className="activity-location">
        <div className="room-and-time">
          <div>{agendaItem.time}</div>
          <div>{agendaItem.room && agendaItem.room}</div>
        </div>
        <div className="speaker-image">
          <img src={`${baseUrl}/speakers/${firstSpeaker.img}`} alt={firstSpeaker.fullName} />
          {secondSpeaker && (
            <img
              className="second-image"
              src={`${baseUrl}/speakers/${secondSpeaker.img}`}
              alt={secondSpeaker.fullName}
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .activity-row {
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.7);
            width: 100%;
            color: ${styles.mainColor3};
            font-weight: 400;
            text-align: center;
          }

          .activity-title {
            font-weight: 700;
          }

          .activity-title a {
            color: ${styles.mainColor3};
          }

          .red {
            color: tomato;
          }

          .second-image {
            margin-left: 10px;
          }

          .speaker-name {
            color: ${styles.mainColor6};
          }

          .speaker-company {
            display: block;
          }

          .speaker-company:before {
            content: '';
          }

          .speaker-position {
            display: none;
          }

          .speaker-image {
            display: none;
          }

          .content-section {
            margin-bottom: 20px;
            float: left;
            width: 100%;
          }

          .room-and-time {
            margin-top: 20px;
          }

          @media screen and (min-width: 1000px) {
            .activity-row {
              text-align: left;
            }

            .activity-location {
              width: 35%;
              float: left;
            }

            .activity-details {
              width: 65%;
              float: right;
            }

            .speaker-position {
              display: inline;
            }

            .speaker-company {
              display: inline;
            }

            .speaker-company:before {
              content: ', ';
            }

            .speaker-image {
              display: block;
              width: 45%;
              float: left;
            }

            .speaker-image img {
              width: 60px;
              height: 60px;
              border: 1px solid #ccc;
              filter: grayscale(100%);
            }

            .room-and-time {
              width: 55%;
              float: left;
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScheduleRow;
