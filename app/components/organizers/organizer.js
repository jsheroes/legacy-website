import { styles, mediaQueries } from '../../constants';

const Organizer = ({ role, image, name, twitter }) => (
  <div>
    <div className="organizer-info-box">
      <img src={`static/img/organizers/${image}`} alt={name} />
      <div className="organizer-hover" />
      <div className="organizer-details">
        <h5>{name}</h5>
        <h6>{role}</h6>
        {twitter && (
          <h6>
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
              @{twitter}
            </a>
          </h6>
        )}
      </div>
    </div>

    <style jsx>
      {`
        .organizer-info-box {
          width: auto;
          position: relative;
          overflow: hidden;
        }
        a {
          color: ${styles.mainColor3};
        }
        img {
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
        }
        .organizer-hover {
          height: 100%;
          left: 0;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.5s ease-out;
          width: 100%;
          background: rgba(0, 152, 255, 0.8) none repeat scroll 0 0 !important;
          z-index: 1;
        }
        .organizer-info-box.active .organizer-hover {
          opacity: 1;
        }
        .organizer-info-box.active .organizer-details {
          transform: translateY(-50%);
          opacity: 1;
        }
        .organizer-details h5 {
          font-size: 24px;
          color: ${styles.mainColor3};
        }
        .organizer-details h6 {
          font-size: 16px;
          color: ${styles.mainColor3};
        }
        .organizer-details {
          position: absolute;
          top: 50%;
          transform: translateY(100px);
          transition: 0.2s ease-out;
          opacity: 0;
          width: 100%;
          z-index: 2;
          text-align: center;
          cursor: pointer;
        }
        @media (min-width: ${mediaQueries.XS}) {
          .organizer-info-box:hover .organizer-hover {
            opacity: 1;
          }
          .organizer-info-box:hover .organizer-details {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      `}
    </style>
  </div>
);

export default Organizer;
