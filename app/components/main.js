import { configureAnchors } from 'react-scrollable-anchor';
import PropTypes from 'prop-types';

import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

configureAnchors({ offset: -60, scrollDuration: 1000 });
const Main = props => (
  <div>
    <Head>
      <link href="static/img/favicon.png" rel="shortcut icon" />
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
        font-size: 18px;
        font-family: Roboto, sans-serif;
      }

      ul {
        list-decoration: none;
      }

      a {
        text-decoration: none;
      }

    `}</style>
  </div>
);

Main.propTypes = {
  children: PropTypes.any,
  page: PropTypes.string,
};

export default Main;
