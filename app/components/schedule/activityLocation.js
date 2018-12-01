import { mediaQueries } from '../../constants';

const ActivityLocation = ({ time, room, hasNoSpeakers }) => (
  <div className="activity-location">
    <div className="room-and-time">
      <div>{time}</div>
      {room && <div>{room}</div>}
    </div>

    <style jsx>
      {`
        .activity-location {
          flex: 1;
        }

        .room-and-time {
          margin-top: ${hasNoSpeakers ? '0' : '20'}px;
        }

        @media screen and (min-width: ${mediaQueries.L}) {
          .room-and-time {
            margin: 0;
          }
        }
      `}
    </style>
  </div>
);

export default ActivityLocation;
