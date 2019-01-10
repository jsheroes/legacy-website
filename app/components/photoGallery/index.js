import uuid from 'uuid';
import React from 'react';

import { styles, mediaQueries } from '../../constants';

function getPhotoItems() {
  const items = [];

  for (let index = 1; index <= 12; index += 1) {
    items.push({
      type: 'photo',
      key: uuid.v4(),
      value: { src: `jsheroes-2018-gallery-${index}.png` },
    });
  }

  const data = [
    {
      title: 'View all 2018 photos',
      url: 'https://www.facebook.com/pg/jsheroes/photos/?tab=album&album_id=2044909715746934',
    },
    {
      title: 'Watch all 2018 videos',
      url: 'https://www.youtube.com/playlist?list=PLB9NqTp0uKrRn_C80xQK8QEeO-vaBmN_9',
    },
    {
      title: 'View all 2017 photos',
      url: 'https://www.facebook.com/jsheroes/photos/?tab=album&album_id=1903947609843146',
    },
  ];

  for (let index = 0; index < 3; index += 1) {
    items.splice((index + 1) * 5 - 1, 0, {
      type: 'text',
      key: uuid.v4(),
      value: { ...data[index] },
    });
  }

  return items;
}

const Component = ({ items = getPhotoItems() }) => (
  <React.Fragment>
    <div className="grid-container">
      {items.map(({ type, key, value }, index) => (
        <div key={key} className={`grid-item-${type}-${index + 1}`}>
          {type === 'text' && (
            <div className="text-wrapper upper">
              <h4 className="title">
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                  {value.title}
                </a>
              </h4>
            </div>
          )}
          {type === 'photo' && (
            <picture>
              <source
                media={`(max-width: ${mediaQueries.XS})`}
                srcSet={`static/img/photo_gallery/small/${value.src}`}
              />
              <source
                media={`(max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.XS})`}
                srcSet={`static/img/photo_gallery/medium/${value.src}`}
              />
              <img
                data-src={`static/img/photo_gallery/large/${value.src}`}
                alt="gallery item"
                className="image-wrapper lazyload"
              />
            </picture>
          )}
        </div>
      ))}
    </div>

    <style jsx>
      {`
        .grid-container {
          display: grid;
          grid-template-columns: auto auto auto auto 156px;
          justify-content: center;
        }

        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .text-wrapper {
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .title {
          width: 75px;
        }

        a {
          color: white;
        }

        .upper {
          text-transform: uppercase;
        }

        .grid-item-text-5,
        .grid-item-text-15 {
          background-color: ${styles.mainColor6};
          word-break: break-word;
        }

        .grid-item-text-10 {
          background-color: black;
          word-break: break-word;
        }

        @media (max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.S}) {
          .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto;
          }

          .text-wrapper {
            height: 70px;
          }

          .title {
            width: 100%;
          }

          .grid-item-text-5 {
            grid-row: 7;
            grid-column: 1 / span 4;
          }

          .grid-item-text-10 {
            grid-row: 8;
            grid-column: 1 / span 4;
          }

          .grid-item-text-15 {
            grid-row: 9;
            grid-column: 1 / span 4;
          }
        }

        @media (max-width: ${mediaQueries.S}) {
          .grid-container {
            display: grid;
            grid-template-columns: auto auto;
          }

          .text-wrapper {
            height: 70px;
          }

          .title {
            width: 100%;
          }

          .grid-item-text-5 {
            grid-row: 7;
            grid-column: 1 / span 2;
          }

          .grid-item-text-10 {
            grid-row: 8;
            grid-column: 1 / span 2;
          }

          .grid-item-text-15 {
            grid-row: 9;
            grid-column: 1 / span 2;
          }
        }
      `}
    </style>
  </React.Fragment>
);

export default Component;
