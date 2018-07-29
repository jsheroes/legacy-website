import { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import news from '../../data/news';

class Updates extends Component {
  constructor() {
    super();
    this.state = {
      activeNews: 0,
    };
  }

  render() {
    const newsData = news.map((item, index) => {
      const activeCss = index === this.state.activeNews ? 'active-news' : 'news-item';
      return (
        <li //eslint-disable-line
          className={activeCss}
          onClick={() => this.setState({ activeNews: index })}
          key={item.title}
        >
          <strong>{item.title}</strong>
        </li>
      );
    });
    const { content } = news[this.state.activeNews];
    return (
      <Section>
        <ScrollableAnchor id="news">
          <div className="wrapper">
            <h1>News</h1>
            <ul>{newsData}</ul>
            <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </ScrollableAnchor>

        {/* language=CSS */}
        <style jsx global>
          {`
            .wrapper {
              padding-top: 140px;
              padding-bottom: 100px;
              text-align: center;
              max-width: 1100px;
            }
            .wrapper p {
              margin-bottom: 20px;
            }
            .wrapper a {
              font-weight: bold;
            }

            .wrapper li {
              cursor: pointer;
            }

            .wrapper li:hover {
              color: black;
            }

            .wrapper h1 {
              margin: 0 0 50px;
              color: #0098ff;
            }

            .wrapper a {
              text-decoration: none;
            }

            @media (min-width: 601px) {
              .wrapper ul {
                display: flex;
                justify-content: space-around;
                padding-bottom: 10px;
                margin-bottom: 20px;
                border-bottom: 1px solid lightgrey;
              }
              .active-news {
                position: relative;
                color: black;
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
                color: #0098ff;
                display: inline-block;
                text-decoration: none;
              }
            }

            @media (max-width: 600px) {
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
                color: black;
                display: inline-block;
                text-decoration: none;
                border-bottom: 1px solid lightgray;
              }

              .active-news::before {
                width: 0;
                height: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid lightgray;
                bottom: -10px;
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
                bottom: -9px;
                left: 40%;
                position: absolute;
                display: block;
                content: '';
              }
              .news-item {
                padding: 10px 10px;
                color: #0098ff;
                display: inline-block;
                text-decoration: none;
                border-bottom: 1px solid lightgrey;
              }
            }
          `}
        </style>
      </Section>
    );
  }
}

export default Updates;
