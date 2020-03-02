import Link from '../common/link';
import { mediaQueries } from '../../constants';

const Sponsor = ({ href, title, img, baseUrl, longText }) => (
  <li>
    <Link href={href}>
      <img
        className={`logo-sponsor ${longText ? 'logo-sponsor--long' : ''}`}
        src={`${baseUrl}/sponsors/${img}`}
        title={title}
        alt={title}
      />
    </Link>

    <style jsx>
      {`
        li {
          display: inline-block;
          margin: 10px 15px;
          list-style: outside none none;
          font-size: 16px;
          font-weight: 300;
          line-height: 30px;
        }

        .logo-sponsor {
          width: 188px;
          vertical-align: middle;
          border: 0;
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        .logo-sponsor--long {
          width: 245px;
        }

        .logo-sponsor:hover {
          -webkit-filter: grayscale(0%);
          -moz-filter: grayscale(0%);
          filter: grayscale(0%);
        }

        @media (max-width: ${mediaQueries.L}) and (min-width: ${mediaQueries.S}) {
          li {
            margin-bottom: 25px;
            margin-left: 30px;
            margin-right: 30px;
          }
        }

        @media only screen and (max-width: ${mediaQueries.S}) {
          li {
            margin-bottom: 31px;
            margin-left: 12px;
            margin-right: 12px;
          }
        }
      `}
    </style>
  </li>
);

export default Sponsor;
