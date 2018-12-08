import { mediaQueries } from '../../constants';

const ActivityImage = ({ baseUrl, speakers }) => (
  <div className="activity-image">
    {speakers.map(speaker => (
      <img
        key={speaker.permalink}
        className="activity-image-speaker"
        src={`${baseUrl}/speakers/${speaker.img}`}
        alt={speaker.fullName}
      />
    ))}
    <style jsx>
      {`
        .activity-image {
          display: none;
        }

        @media screen and (min-width: ${mediaQueries.L}) {
          .activity-image {
            flex: 0.5;
            display: block;
          }

          .activity-image-speaker {
            width: 60px;
            height: 60px;
            border: 1px solid #ccc;
            filter: grayscale(100%);
            margin-right: 10px;
          }
        }
      `}
    </style>
  </div>
);

export default ActivityImage;
