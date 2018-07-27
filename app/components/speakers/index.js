import { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import data from '../../data/index';
import Speaker from './speaker';

function addObserver() {
  const observer = new IntersectionObserver(handler, {
    threshold: 1,
    rootMargin: '0px',
  });

  const boxes = document.querySelectorAll('.speaker-info-box');
  boxes.forEach(box => observer.observe(box));

  function handler(entries) {
    entries.forEach((element) => {
      if (element.isIntersecting && element.intersectionRatio === 1) {
        if (element.target.className.indexOf('active') === -1 && window.innerWidth <= 425) {
          element.target.className += ' active';
        }
      } else if (element.target.className.indexOf('active') > -1) {
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
    const { year, speakers } = this.props;
    const title = `Our ${year} Heroes`;
    const isCurrentYear = year === data.currentYear;
    return (
      <Section>
        <ScrollableAnchor id="speakers">
          <div className="speakers-section">
            <div className={`row section-header ${isCurrentYear && 'year'}`}>
              <h2>
                {title}
              </h2>
              {isCurrentYear && (
                <div>
                  <p>
                    The speakers that joined our mission are experts recognized by global
                    communities. They are people who define our working environment every day. Most
                    of them are for the first time in Romania and they’re really looking forward to
                    our community event!
                  </p>
                </div>
              )}
              {!isCurrentYear && (
                <h3>
                  You can find all the recorded talks on our youtube channel
                  <a
                    href="https://www.youtube.com/watch?v=Zx2moTy-yAg&list=PLB9NqTp0uKrRn_C80xQK8QEeO-vaBmN_9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    2018 playlist
                  </a>
                </h3>
              )}
            </div>
            <div className="speaker-boxes">
              {speakers.map(speaker => (
                <div key={speaker.name} className="speaker-box">
                  <Speaker speaker={speaker} year={year} currentYear={isCurrentYear} />
                </div>
              ))}
            </div>
          </div>
        </ScrollableAnchor>

        <style jsx>
          {`
            .speakers-section {
              padding-top: 30px;
              padding-bottom: 30px;
              // margin: 30px 0;
            }

            h3 {
              text-align: center;
            }
            .speakers-section .section-header {
              margin-bottom: 45px;
              padding-right: 15px;
              padding-left: 15px;
            }
            .speakers-section .section-header.year {
              margin-bottom: 45px;
              padding-right: 15px;
              padding-left: 15px;
              padding-top: 70px;
            }

            .speakers-section .section-header h2 {
              text-align: center;
              font-size: 33px;
              color: ${styles.mainColor4};
              font-weight: 700;
              margin: 0 auto 30px;
            }

            .speakers-section .section-header p {
              width: 98%;
              margin-bottom: 20px;
              font-size: 16px;
              color: #555;
              line-height: 28px;
              font-weight: 300;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
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
