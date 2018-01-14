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
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  }

  handleScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition < 900) {
      this.setState({ show: false });
    } else if (scrollPosition >= 900) {
      this.setState({ show: true });
    }
  }

  render() {
    return (
      <div className={`back-top ${this.state.show ? 'show' : ''}`}>
        <a href="#top-section">
          <i className="fa fa-angle-up" />
        </a>

        <style jsx>{`
          .back-top {
            display: block;
            position: fixed;
            right: 30px;
            bottom: 20px;
            width: 52px;
            height: 52px;
            z-index: 3;
          }
          
          a {
            display: block;
            width: 52px;
            height: 52px;
            line-height: 52px;
            font-size: 31px;
            background: #000;
            color: ${styles.mainColor3};
            text-align: center;
            text-decoration: none;
            visibility: hidden;
            opacity: 0;
            transition: all .4s;
          }
          
          .back-top a:hover {
            opacity: .57;
            color: ${styles.mainColor5};
            fill: ${styles.mainColor5};
            text-decoration: none;
            outline: 0;
          }
          
           i {
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
          }
          
          .show a {
            visibility: visible;
            opacity: 1;
          }
      `}</style>
      </div>
    );
  }
}

module.exports = ScrollBtn;
