import uuid from 'uuid';
import React from 'react';

import { styles, mediaQueries } from '../../constants';

const Component = ({ year, items = getPhotoItems(year) }) => (
  <React.Fragment>
    <div className="grid-container">
      {items.map(({ type, key, value }, index) => (
        <div key={key} className={`grid-item-${type}-${index + 1}`}>
          {type === 'text' && (
            <div className="text-wrapper upper">
              <strong className="title">
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                  {value.title}
                </a>
              </strong>
            </div>
          )}
          {type === 'photo' && (
            <picture>
              <source
                media={`(max-width: ${mediaQueries.XS})`}
                srcSet={`static/img/${year}/photo_gallery/small/${value.src}`}
              />
              <source
                media={`(max-width: ${mediaQueries.XL}) and (min-width: ${mediaQueries.XS})`}
                srcSet={`static/img/${year}/photo_gallery/medium/${value.src}`}
              />
              <img
                src={`static/img/${year}/photo_gallery/large/${value.src}`}
                alt="gallery item"
                className="image-wrapper"
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

function getPhotoItems(year) {
  const items = [];

  for (let index = 1; index <= 12; index += 1) {
    items.push({
      type: 'photo',
      key: uuid.v4(),
      value: { src: `jsheroes-${year}-gallery-${index}.png` },
    });
  }

  const data = getData(year);

  for (let index = 0; index < data.length; index += 1) {
    items.splice((index + 1) * 5 - 1, 0, {
      type: 'text',
      key: uuid.v4(),
      value: { ...data[index] },
    });
  }

  return items;
}

function getData(year) {
  let [photosUrl, videosUrl] = [];

  switch (year) {
    case 2019:
      photosUrl =
        'https://www.facebook.com/pg/jsheroes/photos/?tab=album&album_id=2275719352665968';
      videosUrl =
        'https://www.youtube.com/watch?v=jdr9eQGq97g&list=PLB9NqTp0uKrR8WFXitMvLMGd-kGGZ4RkX';
      break;
    case 2018:
      photosUrl =
        'https://www.facebook.com/pg/jsheroes/photos/?tab=album&album_id=2044909715746934';
      videosUrl = 'https://www.youtube.com/playlist?list=PLB9NqTp0uKrRn_C80xQK8QEeO-vaBmN_9';
      break;
    default:
      break;
  }

  return [
    {
      title: `View all ${year} photos`,
      url: photosUrl,
    },
    {
      title: `Watch all ${year} videos`,
      url: videosUrl,
    },
    {
      title: `Check out ${year} website`,
      url: `/${year}`,
    },
  ];
}

export default Component;
