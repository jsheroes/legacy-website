import { configureAnchors } from 'react-scrollable-anchor';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { styles } from '../constants';

configureAnchors({ offset: 0, scrollDuration: 1000 });

const Layout = props => (
  <div>
    <Head>
      <link href="/static/img/favicon.png" rel="shortcut icon" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
    </Head>
    <Nav page={props.page} />
    {props.children}
    <Footer />

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
