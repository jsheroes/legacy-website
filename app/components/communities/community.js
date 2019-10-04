import Link from '../common/link';

const Community = ({ href, title, img, baseUrl }) => (
  <li>
    <Link href={`${href}`} title={`${title}`}>
      <img src={`${baseUrl}/communities/${img}`} alt={`${title}`} />
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
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        img:hover {
          filter: grayscale(0%);
        }
      `}
    </style>
  </li>
);

export default Community;
