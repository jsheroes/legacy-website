import Link from 'next/link';
import { mediaQueries } from '../../constants';

const Community = ({
  href, title, img, year,
}) => (
  <li>
    <Link href={`${href}`}>
      <a target="_blank" title={`${title}`}>
        <img src={`static/img/communities/${year}/${img}`} alt={`${title}`} />
      </a>
    </Link>

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

        img {
          width: 95px;
          max-width: 100%;
          margin-bottom: 15px;
          border: 0;
          vertical-align: middle;
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        img:hover {
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
          img {
            width: 95px;
          }

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

module.exports = Community;
