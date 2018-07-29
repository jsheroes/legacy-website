import { Component } from 'react';
import { styles } from '../../constants';

class CookiePrivacy extends Component {
  constructor() {
    super();
    this.state = {
      visible: 'false',
    };

    this.createBanner = this.createBanner.bind(this);
  }

  componentDidMount() {
    this.createBanner();
  }

  handleAccept() {
    localStorage.setItem('policy', 'true');
    this.setState({ visible: 'false' });
  }

  createBanner() {
    const policy = localStorage.getItem('policy');
    if (policy === 'true') {
      this.setState({ visible: 'false' });
    }
    if (policy === null) {
      this.setState({ visible: 'true ' });
    }
  }

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
            <a href="/privacy" target="_blank">
              Privacy Statement.
            </a>
          </p>
          <p>
            By choosing <strong>I Accept</strong> you consent to our use of cookies and other
            tracking technologies.
          </p>
          <button onClick={() => this.handleAccept()}>I Accept</button>
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
              background: rgba(0, 0, 0, 0.75);
            }

            button {
              border: 1px solid white;
              border-radius: 2px;
              background: ${styles.mainColor6};
              padding: 5px 30px 5px 30px;
            }

            a {
              color: white;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    );
  }
}

export default CookiePrivacy;
