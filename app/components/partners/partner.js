import Link from '../common/link';
import { mediaQueries } from '../../constants';

const Partner = ({ href, className, img, title, baseUrl }) => (
  <li>
    <Link href={href}>
      <span className={className}>
        <img
          className="lazyload"
          data-src={`${baseUrl}/partners/${img}`}
          title={title}
          alt={title}
        />
      </span>
    </Link>

    {/* language=CSS */}
    <style jsx>
      {`
        li {
          display: inline-block;
          margin: 0 15px 10px;
          list-style: outside none none;
          font-size: 16px;
          font-weight: 300;
          line-height: 30px;
        }

        span {
          width: 188px;
          height: auto;
        }

        span.smaller-logo {
          width: 125px;
        }

        img {
          width: inherit;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          vertical-align: middle;
          border: 0;
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        img:hover {
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

          span.smaller-logo {
            width: 188px;
          }
        }
      `}
    </style>
  </li>
);

export default Partner;
