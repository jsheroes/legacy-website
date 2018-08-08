import { Component } from 'react';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import organizers from '../../data/organizers';
import Organizer from './organizer';

function addObserver() {
  const observer = new IntersectionObserver(handler, {
    threshold: 1,
    rootMargin: '0px',
  });

  const boxes = document.querySelectorAll('.organizer-info-box');
  boxes.forEach(box => observer.observe(box));

  function handler(entries) {
    entries.forEach(element => {
      if (element.isIntersecting && element.intersectionRatio === 1) {
        if (element.target.className.indexOf('active') === -1 && window.innerWidth <= 425) {
          // eslint-disable-next-line no-param-reassign
          element.target.className += ' active';
        }
      } else if (element.target.className.indexOf('active') > -1) {
        // eslint-disable-next-line no-param-reassign
        element.target.className = element.target.className.replace(' active', '');
      }
    });
  }
}

class OrganizersMain extends Component {
  componentDidMount() {
    require('intersection-observer'); // eslint-disable-line global-require
    addObserver();
  }

  render() {
    return (
      <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
        <div className="row container organizers-container">
          <h2>Organizers</h2>
          <p>
            The <strong>JSHeroes</strong> conference is organized by the Cluj JavaScripters{' '}
            <strong>community</strong> and <strong>volunteers</strong>.
          </p>
          <p>
            Our thanks go to all the organizers and volunteers that help us each year in creating
            this remarkable event.
          </p>
          <p>If you`d like to contribute, please do not hesitate to contact us.</p>
          <h3>Core Team</h3>

          <div className="organizer-boxes">
            {organizers.coreTeam.map(organizer => (
              <div key={organizer.name} className="organizer-box">
                <Organizer
                  image={organizer.img}
                  name={organizer.name}
                  role={organizer.role}
                  twitter={organizer.twitter}
                />
              </div>
            ))}
          </div>

          <h3>Still Friends</h3>

          <div className="organizer-boxes">
            {organizers.oldHeroes.map(organizer => (
              <div key={organizer.name} className="organizer-box">
                <Organizer
                  image={organizer.img}
                  name={organizer.name}
                  role={organizer.role}
                  twitter={organizer.twitter}
                />
              </div>
            ))}
          </div>
        </div>
        <style jsx>
          {`
            p {
              text-align: center;
              width: 100%;
            }

            h3 {
              font-weight: 400;
              font-size: 40px;
              margin-top: 40px;
              margin-bottom: 40px;
            }

            h2 {
              text-align: center;
              font-size: 50px;
              color: ${styles.mainColor6};
              margin: 0 auto 80px;
            }

            .organizers-container {
              padding: 100px 0 140px;
              text-align: center;
            }

            a {
              color: ${styles.mainColor5};
              fill: ${styles.mainColor5};
            }

            .organizer-boxes {
              display: flex;
              flex-wrap: wrap;
            }

            .center {
              justify-content: center;
            }

            .organizer-box {
              width: 100%;
            }

            @media (min-width: ${mediaQueries.XS}) {
              .organizer-box {
                width: 40%;
              }
            }

            @media (min-width: ${mediaQueries.S}) {
              .organizer-box {
                width: 33.33%;
              }
              h3 {
                font-size: 30px;
              }
            }

            @media (min-width: ${mediaQueries.L}) {
              .organizer-box {
                width: 20%;
              }
              h3 {
                font-size: 34px;
              }
            }

            @media (max-width: 479px) {
              p {
                font-size: 18px;
                line-height: 1.58;
                letter-spacing: -0.004em;
                padding: 0 20px;
              }
            }

            @media (max-width: ${mediaQueries.S}) {
              h2 {
                margin: 40px 0;
              }
              h3 {
                font-size: 26px;
              }

              .organizers-container {
                padding: 0 20px 50px 20px;
                text-align: center;
              }

              .organizer-boxes {
                justify-content: center;
              }
            }
          `}
        </style>
      </Section>
    );
  }
}

export default OrganizersMain;
