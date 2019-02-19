import { Component } from 'react';
import Section from '../common/section';
import { mediaQueries } from '../../constants';
import CTAButton from '../common/ctaButton';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 800,
      logoFixed: false,
      showMedia: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.updateHeroSize = this.updateHeroSize.bind(this);
    this.buildMedia = this.buildMedia.bind(this);
    this.setSize = this.setSize.bind(this);
  }

  componentDidMount() {
    this.setSize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {
      passive: true,
    });
    window.removeEventListener('resize', this.updateHeroSize);
  }

  setSize() {
    const rect = document.getElementById('logo').getBoundingClientRect();
    const docEl = document.documentElement;
    const logoElementOffsetTop = rect.top + (window.pageYOffset || docEl.scrollTop || 0);

    this.setState({
      logoOffsetTop: logoElementOffsetTop,
      windowHeight: window.innerHeight,
      showMedia: true,
    });
    window.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
    window.addEventListener('resize', this.updateHeroSize);
  }

  handleScroll() {
    const { logoOffsetTop } = this.state;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > logoOffsetTop) {
      this.setState({ logoFixed: true });
    } else {
      this.setState({ logoFixed: false });
    }
  }

  updateHeroSize(ev) {
    this.setState({
      windowHeight: ev.target.innerHeight,
    });
  }

  buildMedia() {
    const { showMedia } = this.state;

    if (!showMedia) {
      return '';
    }

    const media = (
      <div>
        <img
          className="background-image"
          src="/static/img/speakers_and_organizers.jpg"
          alt="background"
        />
        <style jsx>
          {`
            .background-image {
              width: 100%;
              height: auto;
              left: 50%;
              opacity: 0.5;
              top: 0;
              position: absolute;
              transform: translateX(-50%);
            }

            @media (max-width: 1230px) {
              .background-image {
                width: auto;
                height: 100%;
              }
            }
          `}
        </style>
      </div>
    );

    return media;
  }

  render() {
    const { windowHeight, logoFixed } = this.state;
    const heroBcgImg = {
      position: 'relative',
      overflow: 'hidden',
      height: windowHeight,
    };

    const heroDarkOverlay = {
      display: 'block',
      width: '100%',
      height: '100%',
      padding: '0',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'hsla(0,0%,0%,.6) none repeat scroll 0 0',
    };

    const media = this.buildMedia();

    return (
      <div>
        <Section section={{ style: heroBcgImg }} mainContainer={{ style: heroDarkOverlay }}>
          <div id="hero" className="header-wrapper">
            {media}
            <div className="headOverlay" />

            <div className="header-container">
              <div>
                <div className="header-logo">
                  <div className={logoFixed ? 'hide' : ''} id="logo">
                    <span className="logoJs">JS</span>
                    <span className="logoHeroes">Heroes</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="header-text">
                  <p>Open-Source Community Event</p>
                  <p>April 11-12th, 2019 in Cluj-Napoca, Romania</p>
                </div>
              </div>
              <div className="call-to-action-buttons">
                <CTAButton primary url="https://ti.to/cluj-javascripters/jsheroes-2019">
                  Buy Your Conference Ticket
                </CTAButton>

                <CTAButton
                  secondary
                  url="https://ti.to/cluj-javascripters/workshops-day-jsheroes-2019"
                >
                  Buy Your Workshop Ticket
                </CTAButton>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              .logoJs {
                color: #0098ff;
              }
              .logoHeroes {
                color: #e1ebef;
              }
              .header-wrapper {
                width: inherit;
                height: inherit;
              }
              .header-container {
                position: absolute;
                top: 40%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                max-width: 100%;
                margin-top: 0;
              }
              .header-logo {
                height: 45px;
                margin-bottom: 40px;
              }
              .header-logo > div {
                display: block;
                margin: 0 auto;
                width: 250px;
                font-size: 54px;
                font-weight: bold;
                opacity: 1;
                transition: opacity 0.1s linear;
              }
              .header-logo > div .logoJs {
                letter-spacing: -3px;
              }
              .header-logo > div .logoHeroes {
                letter-spacing: -1px;
              }

              .header-text {
                text-align: center;
                margin-top: 15px;
                color: #fff;
              }
              .header-text p {
                font-size: 20px;
              }

              .call-to-action-buttons {
                display: flex;
                width: 100%;
                justify-content: space-between;
                width: ${mediaQueries.S};
                margin: 0 auto;
              }

              .headOverlay {
                background-color: rgba(0, 50, 84, 0.2);
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
              }

              .float-right {
                float: right;
              }
              .float-left {
                float: left;
              }

              .header-container {
                text-align: center;
                margin-top: 80px;
                width: 100%;
              }
              .header-container .header-btn {
                float: none;
              }

              @media (max-width: ${mediaQueries.S}) {
                .header-logo {
                  margin-top: 50px;
                }
                .header-logo img {
                  width: 50%;
                }
                .header-text {
                  margin-bottom: 30px;
                }
                .header-container {
                  margin-top: 60px;
                }

                .call-to-action-buttons {
                  width: 90%;
                  margin: 0 auto;
                  display: block;
                }

                .call-to-action-buttons .button-wrapper {
                  display: block;
                  margin: 10px;
                }
              }
            `}
          </style>
        </Section>
      </div>
    );
  }
}

export default Header;
