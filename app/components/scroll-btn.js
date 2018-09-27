import { Component } from 'react';
import { styles } from '../constants';

class ScrollBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {
      passive: true,
    });
  }

  handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition < 900) {
      this.setState({ show: false });
    } else if (scrollPosition >= 900) {
      this.setState({ show: true });
    }
  }

  render() {
    const { show } = this.state;
    return (
      <div className={`back-top ${show ? 'show' : ''}`}>
        <a className="go-to-anchor" href="#hero">
          <i className="fa fa-angle-up" />
        </a>

        {/* language=CSS */}
        <style jsx>
          {`
            .back-top {
              display: block;
              position: fixed;
              right: 30px;
              bottom: 20px;
              width: 52px;
              height: 52px;
              z-index: 3;
            }

            .go-to-anchor {
              display: block;
              width: inherit;
              height: inherit;
              line-height: 52px;
              font-size: 31px;
              background: #000;
              color: ${styles.mainColor3};
              text-align: center;
              border: 1px solid transparent;
              border-radius: 2px;
              visibility: hidden;
              opacity: 0;
              transition: all 0.4s;
            }

            .back-top .go-to-anchor:hover {
              cursor: pointer;
              background: ${styles.mainColor4};
              color: ${styles.mainColor5};
              fill: ${styles.mainColor5};
            }

            i {
              display: inline-block;
              font: normal normal normal 14px/1 FontAwesome;
              font-size: inherit;
              text-rendering: auto;
              -webkit-font-smoothing: antialiased;
            }

            .show .go-to-anchor {
              visibility: visible;
              opacity: 1;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ScrollBtn;
