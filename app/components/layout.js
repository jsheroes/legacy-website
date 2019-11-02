import React, { Component } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';
import CookiePrivacy from './privacy/cookiePrivacy';

import { styles } from '../constants';

class Layout extends Component {
  componentDidMount() {
    const { publicRuntimeConfig } = getConfig();
    if (publicRuntimeConfig && publicRuntimeConfig.isProduction && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceWorker.js')
        .catch(err => console.error('Service worker registration failed', err));
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className="big-wrapper">
        <Head>
          <link href="/static/img/favicon.png" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="JSHeroes is an Open-Source Community Event, created by and for the JavaScript Community. Check the latest updates and join us on April 23-24th 2020 in Cluj-Napoca, Romania!"
          />
          <meta
            name="keywords"
            content="tech event, tech conference, js conference, js event, javascript, conference, international javascript conference, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets, newsletter, sarah drasner, simona cotin, lin clark, harry roberts, heydon pickering, charlie Gerard, liran tal, sara vieira, xavier cazalot, benedek gagyi, gautam arora, ives vaan horne, jeremias menichelli, carmen popoviciu"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content={styles.mainColor6} />
          <title>JSHeroes 2020 | Open-Source Community Event</title>
          <meta property="og:title" content="JSHeroes 2020 | Open-Source Community Event" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jsheroes.io/" />
          <meta property="og:image" content="https://jsheroes.io/static/img/meta-2020.png" />
          <meta property="og:image:type" content="image/png" />
          <meta
            property="og:description"
            content="JSHeroes is an Open-Source Community Event, created by and for the JavaScript Community. Check the latest updates and join us on April 23-24th 2020 in Cluj-Napoca, Romania!"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="JSHeroes 2020 | Open-Source Community Event" />
          <meta name="twitter:site" content="@jsheroes" />
          <meta name="twitter:title" content="JSHeroes 2020 | Open-Source Community Event" />
          <meta
            name="twitter:description"
            content="JSHeroes is an Open-Source Community Event, created by and for the JavaScript Community. Check the latest updates and join us on April 23-24th 2020 in Cluj-Napoca, Romania!"
          />
          <meta name="twitter:image" content="https://jsheroes.io/static/img/meta-2020.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@jsheroes" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86169211-2" />
          <script dangerouslySetInnerHTML={{ __html: googleAnalyticsTag() }} />
          <script dangerouslySetInnerHTML={{ __html: facebookPixelTag() }} />
          <script dangerouslySetInnerHTML={{ __html: hotjarTag() }} />
          <noscript>
            <img
              height="1"
              width="1"
              alt="fb"
              src="https://www.facebook.com/tr?id=1746399088999074&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>

        <div className="nav-and-content">
          <Nav />
          <main>
            <CookiePrivacy />
            {children}
          </main>
        </div>

        <Footer />

        {/* language=CSS */}
        <style jsx global>
          {`
            html,
            body,
            ul,
            h1,
            h2,
            h3 {
              border: 0;
              margin: 0;
              padding: 0;
            }

            * {
              box-sizing: border-box;
            }

            body {
              font-size: 18px;
              font-family: Roboto, sans-serif;
              font-weight: 300;
              line-height: 1.5;
            }

            a {
              color: #337ab7;
            }

            .big-wrapper {
              display: flex;
              flex-direction: column;
              height: 100vh;
            }
            .invisible {
              visibility: hidden !important;
            }
            .hidden-xs {
              display: none !important;
            }
            @media (max-width: 575px) {
              .hidden-xs-down {
                display: none !important;
              }
            }
            @media (min-width: 576px) {
              .hidden-sm {
                display: none !important;
              }
            }
            @media (max-width: 767px) {
              .hidden-sm-down {
                display: none !important;
              }
            }
            @media (min-width: 768px) {
              .hidden-md {
                display: none !important;
              }
            }
            @media (max-width: 991px) {
              .hidden-md-down {
                display: none !important;
              }
            }
            @media (min-width: 992px) {
              .hidden-lg {
                display: none !important;
              }
            }
            @media (max-width: 1199px) {
              .hidden-lg-down {
                display: none !important;
              }
            }
            @media (min-width: 1200px) {
              .hidden-xl {
                display: none !important;
              }
            }
            .hidden-xl-down {
              display: none !important;
            }
            .nav-and-content {
              flex: 1 0 auto;
            }

            ul {
              list-decoration: none;
            }

            a {
              text-decoration: none;
            }

            .sticky-words {
              white-space: nowrap;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Layout;

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
