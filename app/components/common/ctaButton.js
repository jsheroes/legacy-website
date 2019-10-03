import React, { Fragment } from 'react';
import Link from 'next/link';
import { styles } from '../../constants';

const CTAButton = ({ url, primary = false, children, align = 'center' }) => {
  const relativeUrl = url && url[0] === '/';
  const backgroundColor = primary ? styles.mainColor6 : styles.mainColor3;
  const foregroundColor = primary ? styles.mainColor3 : styles.mainColor6;
  return (
    <Fragment>
      <div className={`button-wrapper ${align}`}>
        {relativeUrl && (
          <Link href={url}>
            <a className="button">{children}</a>
          </Link>
        )}
        {!relativeUrl && (
          <a className="button" target="_blank" rel="noopener noreferrer" href={url}>
            {children}
          </a>
        )}
      </div>
      <style jsx>
        {`
          .button-wrapper {
            margin-top: 40px;
            margin-bottom: 40px;
          }

          .center {
            text-align: center;
          }
          .left {
            text-align: left;
          }

          .right {
            text-align: right;
          }

          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: ${backgroundColor};
            color: ${foregroundColor};
            border: 1px solid ${styles.mainColor6};
            transition: all 0.5s;
            margin: auto;
            border-radius: 4px;
            font-size: 18px;
            font-weight: 500;
          }

          .button:hover,
          .button:focus {
            color: ${backgroundColor};
            background-color: ${foregroundColor};
          }
        `}
      </style>
    </Fragment>
  );
};

export default CTAButton;
