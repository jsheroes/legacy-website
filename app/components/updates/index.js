import React, { Component } from 'react';
import Section from '../common/section';
import news from '../../data/news';
import { mediaQueries, styles } from '../../constants';

class Updates extends Component {
  tabRefs = news.map(() => React.createRef());

  tabPanelRefs = news.map(() => React.createRef());

  state = { activeNewsIndex: 0 };

  // Enables keyboard tab activation/navigation.
  // The LEFT arrow key activates the previous tab.
  // The RIGHT arrow key activates the next tab.
  onKeyDown = evt => {
    const { activeNewsIndex } = this.state;
    let targetIndex;

    console.log(evt.keyCode);
    if (evt.keyCode === 37) {
      // <LEFT> arrow key
      targetIndex = Math.max(0, activeNewsIndex - 1);
    } else if (evt.keyCode === 39) {
      // <RIGHT> arrow key
      targetIndex = Math.min(news.length - 1, activeNewsIndex + 1);
    } else if (evt.keyCode === 40) {
      // <DOWN> arrow key
      console.log(activeNewsIndex);
      this.tabPanelRefs[activeNewsIndex].current.focus();
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
        <li
          key={item.title}
          className={`news-item${isActive ? ' active' : ''}`}
          id={`news-tab-${index}`}
          tabIndex={isActive ? '0' : '-1'}
          ref={this.tabRefs[index]}
          role="tab"
          onClick={this.activateTab(index)}
          onMouseOver={this.activateTab(index)}
          onFocus={this.activateTab(index)}
          onKeyDown={this.onKeyDown}
          aria-selected={isActive ? 'true' : 'false'}
          aria-controls={`news-tab-content-${index}`}
        >
          <strong>{item.title}</strong>
        </li>
      );
    });

    return (
      <Section>
        <div id="news" className="wrapper">
          <h1>News</h1>
          <ul role="tablist">{newsData}</ul>
          {news.map((item, index) => (
            <section
              key={item.title}
              ref={this.tabPanelRefs[index]}
              id={`news-tab-content-${index}`}
              role="tabpanel"
              tabIndex="-1"
              className={`content${index === activeNewsIndex ? '' : ' hidden'}`}
              dangerouslySetInnerHTML={{ __html: news[index].content }}
              aria-labelledby={`news-tab-${index}`}
            />
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
              color: ${styles.mainColor6};
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
                color: ${styles.mainColor6};
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
                color: ${styles.mainColor6};
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
