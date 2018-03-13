import { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../../components/common/section';
import { mediaQueries } from '../../constants';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowHeight: 800,
      top: 0,
      logoFixed: false,
      logoElementOffsetTop: 0,
      showMedia: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.updateHeroSize = this.updateHeroSize.bind(this);
    this.buildMedia = this.buildMedia.bind(this);
  }

  componentDidMount() {
    const rect = document.getElementById('logo').getBoundingClientRect();
    const docEl = document.documentElement;
    const logoElementOffsetTop = rect.top + (window.pageYOffset || docEl.scrollTop || 0);

    this.setState({
      logoOffsetTop: logoElementOffsetTop,
      windowHeight: window.innerHeight,
      showMedia: true,
    });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('resize', this.updateHeroSize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
    window.removeEventListener('resize', this.updateHeroSize);
  }

  handleScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > this.state.logoOffsetTop) {
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

    const media = window.innerWidth > 1000 ?
      (
        <video preload="auto" autoPlay muted loop poster="/static/img/video-cover.png">
          <source src="/static/video/js-hero-loop.mp4" type="video/mp4" />
          <style jsx>{`
            video {
              left: 50%;
              top: 0;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              position: absolute;
              transform: translateX(-50%);
            }
          `}</style>
        </video>
      )
      :
      (
        <div>
          <img className="background-image" src="/static/img/mobile_photo_jsheroes2018.jpg" alt="background" />
          <style jsx>{`
            .background-image {
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              left: 50%;
              top: 0;
              position: absolute;
              transform: translateX(-50%);
            }

            @media (max-width: 705px) {
              .background-image {
              width: auto;
              height: 100%;
              }
            }
          `}</style>
        </div>
      );

    return media;
  }

  render() {
    const heroBcgImg = {
      position: 'relative',
      overflow: 'hidden',
      height: this.state.windowHeight,
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
        <Section
          section={{ style: heroBcgImg }}
          mainContainer={{ style: heroDarkOverlay }}
        >
          <ScrollableAnchor id={'hero'}>
            <div className="header-wrapper">
              { media }
              <div className="headOverlay" />

              <div className="container header-container">
                <div className="row">
                  <div className="col-md-12 header-logo">
                    <div className={this.state.logoFixed ? 'hide' : ''} id="logo">
                      <span className="logoJs">JS</span><span className="logoHeroes">Heroes</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 header-text">
                    <p>Open-Source Community Event</p>
                    <p>18-20 April 2018, Cluj-Napoca, Romania</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <a
                      href="https://ti.to/cluj-javascripters/jsheroes2018"
                      target="_blank"
                      className="header-btn header-btn-left float-right"
                      rel="noopener noreferrer"
                    >
                      Buy your Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollableAnchor>

          <style jsx>{`
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
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            margin-top: 0;
          }
          .header-logo {
            height: 45px;
          }
          .header-logo>div {
            display: block;
            margin: 0 auto;
            width: 250px;
            font-size: 54px;
            font-weight: bold;
            opacity: 1;
            transition: opacity .1s linear;
          }
          .header-logo>div .logoJs {
            letter-spacing: -3px;
          }
          .header-logo>div .logoHeroes {
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

          .header-btn-left, .header-btn-right{
            background-color: rgba(0, 152, 255, 0.8);
            padding: 10px 50px;
            color: #fff;
            border: 2px solid #0098ff;
            transition: all 0.5s;
            text-decoration: none;
            cursor: pointer;
            margin-top: 150px;
            border-radius: 4px;
            font-size: 20px;
          }
          .header-btn-left:hover, .header-btn-right:hover {
            background-color: #0098ff;
            border: 2px solid #fff;
            transition: all 0.5s;
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

          .header-container .col-xs-12 {
            text-align: center;
            margin-top: 80px;
          }
          .header-container .col-xs-12 .header-btn {
            float: none;
          }

          @media (max-width: ${mediaQueries.S}) {
            .header-logo img {
              width: 50%;
            }
            .header-text {
              margin-bottom: 30px;
            }
            .header-container .col-xs-12 {
              margin-top: 60px;
            }
          }
          `}</style>
        </Section>
      </div>
    );
  }
}

export default Header;
