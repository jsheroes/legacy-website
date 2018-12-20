import { Component } from 'react';

import Button from '../common/Button';
import { mediaQueries } from '../../constants';

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

    fetch('/contactForm', emailOptions)
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
            <h2>Contact us</h2>
          </div>
          <div className="row">&nbsp;</div>
          <div className="row">
            <textarea
              className="inputElement"
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
              name="email"
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={this.onChange('email')}
            />
          </div>
          <div className="row">
            <Button primary>Send</Button>
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

              height: 400px;
            }

            .inputElement {
              padding: 10px;
              width: 40vw;
              border: 1px solid #d7d7d7;
              border-radius: 5px;
              font-size: 16px;
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
