import React, { Component } from 'react';
import Section from '../common/section';
import news from '../../data/news';
import { mediaQueries, styles } from '../../constants';

class Updates extends Component {
  tabRefs = news.map(() => React.createRef());

  state = { activeNewsIndex: 0 };

  // Enables keyboard tab activation/navigation.
  // The LEFT arrow key activates the previous tab.
  // The RIGHT arrow key activates the next tab.
  onKeyDown = evt => {
    const { activeNewsIndex } = this.state;
    let targetIndex;

    if (evt.keyCode === 37) {
      // <LEFT> arrow key
      targetIndex = Math.max(0, activeNewsIndex - 1);
    } else if (evt.keyCode === 39) {
      // <RIGHT> arrow key
      targetIndex = Math.min(news.length - 1, activeNewsIndex + 1);
    }

    if (targetIndex != null && targetIndex !== activeNewsIndex) {
      this.tabRefs[targetIndex].current.focus();
    }
  };

  activateTab = index => () => {
    this.setState(({ activeNewsIndex }) => {
      if (index !== activeNewsIndex) {
        return { activeNewsIndex: index };
      }

      return null;
    });
  };

  render() {
    const { activeNewsIndex } = this.state;
    const newsData = news.map((item, index) => {
      const isActive = index === activeNewsIndex;

      return (
        <div key={item.title} className={`news-item${isActive ? ' active' : ''}`}>
          <span
            id={`news-tab-${index}`}
            ref={this.tabRefs[index]}
            tabIndex={isActive ? 0 : -1}
            role="tab"
            onClick={this.activateTab(index)}
            onMouseOver={this.activateTab(index)}
            onFocus={this.activateTab(index)}
            onKeyDown={this.onKeyDown}
            aria-selected={isActive ? 'true' : 'false'}
            aria-controls={`news-tab-content-${index}`}
          >
            <strong>{item.title}</strong>
          </span>
        </div>
      );
    });

    return (
      <Section>
        <div id="news" className="wrapper">
          <h1>News</h1>
          <div role="tablist">{newsData}</div>
          {news.map((item, index) => (
            <React.Fragment key={item.title}>
              <section
                id={`news-tab-content-${index}`}
                role="tabpanel"
                className={`content${index === activeNewsIndex ? '' : ' hidden'}`}
                dangerouslySetInnerHTML={{ __html: news[index].content }}
                aria-labelledby={`news-tab-${index}`}
              />
            </React.Fragment>
          ))}
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

            .wrapper .news-item {
              cursor: pointer;
            }

            .wrapper .news-item:hover {
              color: #0098ff;
            }

            .wrapper h1 {
              margin: 0 0 50px;
            }

            .content.hidden {
              display: none;
            }

            @media (min-width: ${mediaQueries.S}) {
              .wrapper [role='tablist'] {
                display: flex;
                justify-content: space-around;
                padding-bottom: 10px;
                margin-bottom: 20px;
                border-bottom: 1px solid lightgrey;
              }
              .news-item.active {
                position: relative;
                color: #0098ff;
                display: inline-block;
                text-decoration: none;
              }
              .news-item.active::before {
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
              .news-item.active::after {
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

              .wrapper [role='tablist'] {
                display: inline-block;
              }

              .wrapper .content {
                margin-top: 20px;
              }

              .news-item.active {
                padding: 10px 10px;
                position: relative;
                display: inline-block;
                text-decoration: none;
                color: #0098ff;
              }

              .news-item.active::before,
              .news-item.active::after {
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
