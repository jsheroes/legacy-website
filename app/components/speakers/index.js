import { Component } from 'react';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import data from '../../data/index';
import PersonSpotlight from '../personSpotlight';
import ambassadors from '../../data/ambassadors';
import CTAButton from '../common/ctaButton';

function addObserver() {
  const observer = new IntersectionObserver(handler, {
    threshold: 1,
    rootMargin: '0px',
  });

  const boxes = document.querySelectorAll('.speaker-info-box');
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

class Speakers extends Component {
  componentDidMount() {
    require('intersection-observer'); // eslint-disable-line global-require
    addObserver();
  }

  render() {
    const { year, speakers, baseUrl } = this.props;
    const title = `Our ${year} Heroes`;
    const isCurrentYear = year === data.currentYear;
    const yearPrefix = isCurrentYear ? '' : `/${year}`;
    const { cfpOpen } = data;
    const speakerUrl = `${baseUrl}/speakers/`;
    const ambassadorUrl = `/static/img/ambassadors/`;
    return (
      <Section>
        <div id="speakers" className="speakers-section">
          <div className={` section-header ${isCurrentYear && 'year'}`}>
            <h2>{title}</h2>
            {isCurrentYear && (
              <div>
                <p>Say hello to the first speakers from 2022!</p>
              </div>
            )}
          </div>

          <div className="speaker-boxes">
            {speakers.map(speaker => (
              <div key={speaker.name} className="speaker-box">
                <PersonSpotlight
                  person={speaker}
                  baseUrl={speakerUrl}
                  yearPrefix={yearPrefix}
                  activeLink
                />
              </div>
            ))}
          </div>

          {isCurrentYear && cfpOpen && (
            <CTAButton url="/speak-at-jsheroes">Give a Talk at JSHeroes</CTAButton>
          )}

          {isCurrentYear && (
            <div className="section-header" id="ambassadors">
              <h2>And Our Awesome Ambassadors</h2>
              <div>
                <p>
                  An amazing group of people who said yes to the challenge of working with us at
                  making JSHeroes awesome! You may know some of them from the previous editions of
                  JSHeroes. We want to thank them for all their amazing work and we are making them
                  part of the community indefinitely!
                </p>
                <div className="speaker-boxes">
                  {ambassadors.map(ambassador => (
                    <div key={ambassador.name} className="speaker-box">
                      <PersonSpotlight person={ambassador} baseUrl={ambassadorUrl} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <style jsx>
          {`
            .speakers-section .section-header {
              margin-bottom: 45px;
              margin-top: 45px;
            }

            .speakers-section .section-header h2 {
              font-size: 33px;
              color: ${styles.mainColor4};
              font-weight: 700;
              margin: 0 auto 30px;
            }

            .speakers-section .section-header p {
              width: 98%;
              margin-bottom: 20px;
              font-size: 16px;
              line-height: 28px;
              font-weight: 300;
            }

            @media (min-width: ${mediaQueries.S}) {
              .speakers-section .section-header h2 {
                font-size: 33px;
              }
              .speakers-section .section-header p {
                font-size: 16px;
                line-height: 28px;
                margin-bottom: 20px;
              }
            }

            @media (min-width: ${mediaQueries.L}) {
              .speakers-section .section-header h2 {
                font-size: 46px;
              }
              .speakers-section .section-header p {
                font-size: 17px;
                line-height: 30px;
                margin-bottom: 30px;
              }
            }

            @media (min-width: ${mediaQueries.XL}) {
              .speakers-section .section-header h2 {
                font-size: 52px;
              }
              .speakers-section .section-header p {
                font-size: 18px;
                line-height: 32px;
                margin-bottom: 40px;
              }
            }

            .speaker-boxes {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }

            .speaker-box {
              width: 100%;
            }

            @media (min-width: ${mediaQueries.XS}) {
              .speaker-box {
                width: 50%;
              }
            }

            @media (min-width: ${mediaQueries.S}) {
              .speaker-box {
                width: 33.33%;
              }
            }

            @media (min-width: ${mediaQueries.L}) {
              .speaker-box {
                width: 25%;
              }
            }
          `}
        </style>
      </Section>
    );
  }
}

export default Speakers;
