import { Component } from 'react';

import Link from '../common/link';
import { styles } from '../../constants';

class CookiePrivacy extends Component {
  state = {
    visible: 'false',
  };

  componentDidMount() {
    this.createBanner();
  }

  handleAccept = () => {
    localStorage.setItem('policy', 'true');
    this.setState({ visible: 'false' });
    const header = document.querySelector('h1');
    if (header) {
      // after cookie consent, focus should be moved programmatically on the heading level one of that page
      header.tabIndex = -1;
      header.focus();
      header.tabIndex = 0;
    }
  };

  createBanner = () => {
    const policy = localStorage.getItem('policy');
    if (policy === 'true') {
      this.setState({ visible: 'false' });
    }
    if (policy === null) {
      this.setState({ visible: 'true ' });
    }
  };

  render() {
    const { visible } = this.state;
    if (visible === 'false') {
      return null;
    }
    return (
      <div className="cookie-container">
        <div>
          <p>
            JSHeroes uses cookies and other tracking technologies to improve the browsing experience
            on our website, to analyze our traffic, to provide social media functionalities.
          </p>
          <p>
            To find out more or to opt-out, please read our{' '}
            <Link href="/privacy" openInNewTab>
              <span className="link">Privacy Statement.</span>
            </Link>
          </p>
          <p>
            By choosing <strong>I Accept</strong> you consent to our use of cookies and other
            tracking technologies.
          </p>
          <button onClick={this.handleAccept}>I Accept</button>
        </div>
        <style jsx>
          {`
            .cookie-container {
              position: fixed;
              width: 100%;
              bottom: 0;
              padding: 20px 20px 20px 20px;
              color: white;
              text-align: center;
              z-index: 2;
              background: rgba(0, 0, 0, 0.75);
            }

            button {
              border: 1px solid white;
              border-radius: 2px;
              background: ${styles.mainColor6};
              color: white;
              font-size: 16px;
              padding: 10px 35px 10px 35px;
            }

            .link {
              font-weight: bold;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CookiePrivacy;
