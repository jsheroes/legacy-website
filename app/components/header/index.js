import { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Head from 'next/head';

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
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.updateHeroSize = this.updateHeroSize.bind(this);
  }

  componentDidMount() {
    const rect = document.getElementById('logo').getBoundingClientRect();
    const docEl = document.documentElement;
    const logoElementOffsetTop = rect.top + (window.pageYOffset || docEl.scrollTop || 0);

    this.setState({
      logoOffsetTop: logoElementOffsetTop,
      windowHeight: window.innerHeight,
    });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateHeroSize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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

    return (
      <div>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets, newsletter" />
          <meta name="description" content="read our first Newsletter for participants. See you soon ;)" />
          <meta
            name="News_Keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets, newsletter"
          />
          <title>JSHeroes 2018 | International Javascript Conference</title>
          <meta property="og:title" content="JSHeroes 2018 | International Javascript Conference" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://www.jsheroes.io/" />
          <meta property="og:image" content="http://www.jsheroes.io/static/img/video-cover.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:description" content="Check the latest updates and join us in April 2018 in Cluj Napoca, Romania!" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Your JSHeroes 2017 Conference Info" />
          <meta name="twitter:site" content="@jsheroes" />
          <meta name="twitter:title" content="Your JSHeroes 2017 Conference Info" />
          <meta name="twitter:description" content="Check the latest updates and join us in April 2018 in Cluj Napoca, Romania!" />
          <meta name="twitter:image" content="http://www.jsheroes.io/static/img/banners/video-cover.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jsheroes" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86169211-2" />
          <script dangerouslySetInnerHTML={{ __html: googleAnalyticsTag() }} />
          <script dangerouslySetInnerHTML={{ __html: facebookPixelTag() }} />
          <script dangerouslySetInnerHTML={{ __html: hotjarTag() }} />
          <noscript>
            <img
              height="1" width="1" alt="fb"
              src="https://www.facebook.com/tr?id=1746399088999074&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <Section
          section={{ style: heroBcgImg }}
          mainContainer={{ style: heroDarkOverlay }}
        >
          <ScrollableAnchor id={'home'}>
            <div className="header">
              <video preload="auto"  muted loop poster="/static/img/video-cover.png">
                <source src="/static/video/js-hero-loop.mp4" type="video/mp4" />
              </video>
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
                  <div className="col-md-6 col-xs-12">
                    <a
                      href="https://ti.to/cluj-javascripters/jsheroes2018"
                      target="_blank"
                      className="header-btn header-btn-left float-right"
                      rel="noopener noreferrer"
                    >
                      Buy your Ticket
                    </a>
                  </div>

                  <div className="col-md-6 col-xs-12">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdPSo4Zy_M78PHRVFz90v1_SV3IqRcyhvgK2oCDY6ju6NDWeA/viewform?usp=sf_link"
                      target="_blank"
                      className="header-btn header-btn-right float-left"
                      rel="noopener noreferrer"
                    >
                      Become a Speaker
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
          .header-container {
            margin-top: 20%;
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
          video {
            width: 100%;
            left: 50%;
            top: 0;
            position: absolute;
            transform: translateX(-50%);
          }

          .float-right {
            float: right;
          }
          .float-left {
            float: left;
          }

          .header-container .col-xs-12 {
            text-align: center;
            margin-top: 15%;
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
            .header-container {
              margin-top: 50%;
            }
          }

          @media (max-width: ${mediaQueries.XL}) {
            video {
              width: auto;
              height: 100%;
            }
          }
          @media (min-width: ${mediaQueries.L}) {
            .header-container {
              margin-top: 30%;
            }
          }
          @media (min-width: ${mediaQueries.XL}) {
            .header-container {
              margin-top: 20%;
            }
          }
          `}</style>
        </Section>
      </div>
    );
  }
}

export default Header;

function googleAnalyticsTag() {
  return "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-86169211-2');";
}

function facebookPixelTag() {
  return `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1746399088999074'); 
  fbq('track', 'PageView');`;
}

function hotjarTag() {
  return "(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:716394,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');";
}
