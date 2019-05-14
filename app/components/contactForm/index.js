import { Component } from 'react';

import Button from '../common/Button';
import { mediaQueries } from '../../constants';

const MESSAGE = {
  title: 'Contact us',
  subtitle: "We'll get back to you within 2 business days.",
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      message: '',
      status: '',
      error: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = propName => ev => {
    this.setState({ [propName]: ev.target.value });
  };

  onSubmit = ev => {
    ev.preventDefault();

    const { email, message } = this.state;

    const emailOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    };

    fetch('/contact-form', emailOptions)
      .then(response => response.json())
      .then(() => {
        this.setState({ status: 'Your message was sent.' }, () => {
          setTimeout(() => {
            this.setState({ email: '', message: '', status: '', error: false });
          }, 3000);
        });
      })
      .catch(() => {
        this.setState({ error: true, status: "Error happend. Message couldn't be sent." }, () => {
          setTimeout(() => {
            this.setState({ status: '', error: false });
          }, 5000);
        });
      });
  };

  render() {
    const { email, message, status, error } = this.state;

    return (
      <div id="contactForm">
        <form className="flex-container" onSubmit={this.onSubmit}>
          <div className="row">
            <h2>{MESSAGE.title}</h2>
          </div>
          <div className="row">{MESSAGE.subtitle}</div>
          <div className="row">
            <textarea
              className="inputElement"
              aria-label="Your message"
              rows="5"
              name="message"
              placeholder="Message"
              required
              value={message}
              onChange={this.onChange('message')}
            />
          </div>
          <div className="row">
            <input
              className="inputElement"
              aria-label="Your email"
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={this.onChange('email')}
            />
          </div>
          <div className="row">
            <Button aria-label="Send your message" primary>
              Send
            </Button>
          </div>
          <div className={error ? 'error' : 'success'}>{status}</div>
        </form>
        <style jsx>
          {`
            .flex-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              height: 450px;
            }

            .inputElement {
              padding: 10px;
              width: 40vw;

              border: 1px solid #d7d7d7;
              border-radius: 5px;

              font-size: 16px;
              font-family: Roboto, sans-serif;
              font-weight: 300;
              line-height: 1.5;
            }

            .error {
              color: red;
            }

            .success {
              color: green;
            }

            .row {
              margin-top: 10px;
            }

            @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.XL}) {
              .inputElement {
                width: 60vw;
              }
            }

            @media (max-width: ${mediaQueries.S}) {
              .inputElement {
                width: 90vw;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default ContactForm;
