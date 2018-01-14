import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { styles } from '../constants';

configureAnchors({ offset: 0, scrollDuration: 1000 });

const Layout = props => (
  <div className="big-wrapper">
    <Head>
      <link href="/static/img/favicon.png" rel="shortcut icon" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
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
      <meta property="og:site_name" content="Your JSHeroes 2018 Conference Info" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta name="twitter:title" content="Your JSHeroes 2018 Conference Info" />
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

    <div className="nav-and-content">
      <Nav page={props.page} />

      {props.children}
    </div>

    <Footer />

    {/* language=CSS */}
    <style jsx global>{`
      html, body, ul, h1, h2, h3 {
        border: 0;
        margin: 0;
        padding: 0;
      }

      body {
        font-size: 18px !important;
        font-family: Roboto, sans-serif !important;
        font-weight: 300 !important;
      }

      .big-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
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

      .button {
        text-align:center;
        background-color: ${styles.mainColor6};
        color: ${styles.mainColor3};
        border-radius: 8px;
        border: none;
        display: block;
        text-decoration: none;
      }

      .button:focus {
        outline: 0;
      }

      .button a {
        color: ${styles.mainColor3};
        height: 100%;
        width: 100%;
        display: block;
        line-height: 60px;
        text-decoration: none;
      }

    `}</style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  page: PropTypes.string,
};

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
