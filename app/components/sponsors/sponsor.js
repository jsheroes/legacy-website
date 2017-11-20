import Link from 'next/link';
import { mediaQueries } from '../../constants';

const Sponsor = props => (
  <li>
    <Link href={`${props.href}`}>
      <a target="_blank">
        <img
          src={`static/img/sponsors/${props.img}`}
          title={`${props.title}`}
          alt={`${props.title}`}
        />
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
        max-width: 188px;
        vertical-align: middle;
        border: 0;
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        filter: grayscale(100%);
        transition: all .5s ease;
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

module.exports = Sponsor;
