import React, { Fragment } from 'react';
import { styles } from '../../constants';

const Button = ({ primary = false, children }) => {
  const backgroundColor = primary ? styles.mainColor6 : styles.mainColor3;
  const foregroundColor = primary ? styles.mainColor3 : styles.mainColor6;

  return (
    <Fragment>
      <button className="button">{children}</button>

      <style jsx>
        {`
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: ${backgroundColor};
            color: ${foregroundColor};
            border: 1px solid #0098ff;
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

export default Button;
