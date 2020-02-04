import React from 'react';
import NextLink from 'next/link';
import { styles } from '../../constants';

const THEME_DARK = 'theme-dark';
const THEME_LIGHT = 'theme-light';
const THEME_LIGHT_CONTRAST = 'theme-light-contrast';

const themes = {
  [THEME_DARK]: THEME_DARK,
  [THEME_LIGHT]: THEME_LIGHT,
  [THEME_LIGHT_CONTRAST]: THEME_LIGHT_CONTRAST,
};

// eslint-disable-next-line max-statements
const Link = ({ href, as, children, theme, openInNewTab, className, ...rest }) => {
  const classNames = [className, themes[theme]].filter(a => a);
  const isRelativeUrl = href && (href[0] === '/' || href[0] === '#');
  const isMailTo = href && href.match(/^mailto/);

  if ((!isRelativeUrl && !isMailTo) || openInNewTab) {
    return (
      <a
        href={href}
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames.join(' ')}
      >
        {children}
        {openInNewTab && <i className="external-icon fa fa-external-link" />}
        <style jsx>
          {`
            a {
              font-weight: 400;
              transition-duration: 0.5s;
              cursor: pointer;
            }

            a.${THEME_LIGHT} {
              color: ${styles.mainColor3};
            }
            a.${THEME_LIGHT}:hover, a.${THEME_LIGHT}:focus {
              color: ${styles.mainColor6};
            }

            a.${THEME_LIGHT_CONTRAST} {
              color: ${styles.mainColor3};
            }
            a.${THEME_LIGHT_CONTRAST}:hover, a.${THEME_LIGHT_CONTRAST}:focus {
              color: ${styles.mainColor1};
            }

            a.${THEME_DARK} {
              color: ${styles.lightaccent};
            }
            a.${THEME_DARK}:hover, a.${THEME_DARK}:focus {
              color: ${styles.mainColor6};
            }

            .external-icon {
              padding-left: 5px;
              font-size: 75%;
            }
          `}
        </style>
      </a>
    );
  }

  return (
    <NextLink href={href} as={as}>
      <a {...rest} className={classNames.join(' ')}>
        {children}
        <style jsx>
          {`
            a {
              font-weight: 400;
              transition-duration: 0.5s;
              cursor: pointer;
            }

            a.${THEME_LIGHT} {
              color: ${styles.mainColor3};
            }
            a.${THEME_LIGHT}:hover, a.${THEME_LIGHT}:focus {
              color: ${styles.mainColor6};
            }

            a.${THEME_LIGHT_CONTRAST} {
              color: ${styles.mainColor3};
            }
            a.${THEME_LIGHT_CONTRAST}:hover, a.${THEME_LIGHT_CONTRAST}:focus {
              color: ${styles.mainColor1};
            }

            a.${THEME_DARK} {
              color: ${styles.lightaccent};
            }
            a.${THEME_DARK}:hover, a.${THEME_DARK}:focus {
              color: ${styles.mainColor6};
            }
          `}
        </style>
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  theme: THEME_LIGHT,
};

Link.THEME_DARK = THEME_DARK;
Link.THEME_LIGHT = THEME_LIGHT;
Link.THEME_LIGHT_CONTRAST = THEME_LIGHT_CONTRAST;

export default Link;
