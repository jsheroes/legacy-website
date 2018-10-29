import { Component } from 'react';
import Section from '../common/section';
import news from '../../data/news';
import { mediaQueries, styles } from '../../constants';

class Updates extends Component {
  state = {
    activeNews: 0,
  };

  onKeyDown = newsIndex => evt => {
    if (evt.keyCode === 13) {
      // enter key
      this.setState({ activeNews: newsIndex });
    }
  };

  render() {
    const { activeNews } = this.state;
    const newsData = news.map((item, index) => {
      const activeCss = index === activeNews ? 'active-news' : 'news-item';
      return (
        <li
          tabIndex="0"
          role="button" // eslint-disable-line
          className={activeCss}
          onFocus={() => this.setState({ activeNews: index })}
          onClick={() => this.setState({ activeNews: index })}
          onKeyDown={this.onKeyDown(index)}
          onMouseOver={() => this.setState({ activeNews: index })}
          key={item.title}
        >
          <strong>{item.title}</strong>
        </li>
      );
    });
    const { content } = news[activeNews];
    return (
      <Section>
        <div id="news" className="wrapper">
          <h1>News</h1>
          <ul>{newsData}</ul>
          <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* language=CSS */}
        <style jsx global>
          {`
            .wrapper {
              padding-top: 140px;
              text-align: center;
              max-width: 1100px;
              height: 350px;
            }
            .wrapper p {
              margin-bottom: 20px;
            }
            .wrapper a {
              font-weight: bold;
              color: ${styles.mainColor5};
            }
            .wrapper a:hover {
              color: ${styles.mainColor6};
            }

            .wrapper li {
              cursor: pointer;
            }

            .wrapper li:hover {
              color: #0098ff;
            }

            [data-whatintent='mouse'] .wrapper li:focus {
              outline: none;
            }

            .wrapper h1 {
              margin: 0 0 50px;
            }

            @media (min-width: ${mediaQueries.S}) {
              .wrapper ul {
                display: flex;
                justify-content: space-around;
                padding-bottom: 10px;
                margin-bottom: 20px;
                border-bottom: 1px solid lightgrey;
              }
              .active-news {
                position: relative;
                color: #0098ff;
                display: inline-block;
                text-decoration: none;
              }
              .active-news::before {
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid lightgray;
                bottom: -20px;
                left: 40%;
                position: absolute;
                display: block;
                content: '';
              }
              .active-news::after {
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid white;
                bottom: -19px;
                left: 40%;
                position: absolute;
                display: block;
                content: '';
              }
              .news-item {
                display: inline-block;
                text-decoration: none;
              }
            }

            @media (max-width: ${mediaQueries.S}) {
              .wrapper {
                padding-top: 80px;
                padding-bottom: 80px;
              }

              .wrapper ul {
                display: inline-block;
              }

              .wrapper .content {
                margin-top: 20px;
              }

              .active-news {
                padding: 10px 10px;
                position: relative;
                display: inline-block;
                text-decoration: none;
                color: #0098ff;
              }

              .active-news::before,
              .active-news::after {
                display: none;
              }
              .news-item {
                padding: 10px 10px;
                display: inline-block;
                text-decoration: none;
                border: none;
              }
            }
          `}
        </style>
      </Section>
    );
  }
}

export default Updates;
