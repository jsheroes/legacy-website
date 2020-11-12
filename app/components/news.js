import React, { Component } from 'react';
import Section from './common/section';
import news from '../data/news';
import { mediaQueries, styles } from '../constants';
// import Link from './common/link';

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

    if (evt.keyCode === 37) {
      // <LEFT> arrow key
      targetIndex = Math.max(0, activeNewsIndex - 1);
    } else if (evt.keyCode === 39) {
      // <RIGHT> arrow key
      targetIndex = Math.min(news.length - 1, activeNewsIndex + 1);
    } else if (evt.keyCode === 40) {
      // <DOWN> arrow key
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
    // const { activeNewsIndex } = this.state;
    // const newsData = news.map((item, index) => {
    //   const isActive = index === activeNewsIndex;

    //   return (
    //     <li
    //       key={item.title}
    //       className={`news-item${isActive ? ' active' : ''}`}
    //       id={`news-tab-${index}`}
    //       tabIndex={isActive ? '0' : '-1'}
    //       ref={this.tabRefs[index]}
    //       role="tab"
    //       onClick={this.activateTab(index)}
    //       onMouseOver={this.activateTab(index)}
    //       onFocus={this.activateTab(index)}
    //       onKeyDown={this.onKeyDown}
    //       aria-selected={isActive ? 'true' : 'false'}
    //       aria-controls={`news-tab-content-${index}`}
    //     >
    //       <strong>{item.title}</strong>
    //     </li>
    //   );
    // });

    return (
      <Section>
        <div id="news" className="wrapper text-left">
          <h1>News</h1>
          <p>
            Unfortunately, with the current status of the global pandemic, we cannot organize the safe on-site event that we want. 
          </p>
          <p>
            While waiting for the situation to improve, we hope to see you all at our next event, in 2021, 2022, or as soon we can create the same fun, engaging and cozy experience that you all came to know as JSHeroes. The tickets bought for 2020 will be refunded. 
          </p>
          <p>
            THANK YOU everyone for all the support and for being part of our community for the past 3 years.
          </p>
          {/* <ul role="tablist">{newsData}</ul>
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
          ))} */}
        </div>

        {/* language=CSS */}
        <style jsx global>
          {`
            .wrapper {
              padding-top: 50px;
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
              font-size: 32px;
              font-weight: 700;
              color: ${styles.mainColor4};
            }

            .wrapper h2 {
              margin-bottom: 40px;
            }

            .content.hidden {
              display: none;
            }

            @media (min-width: ${mediaQueries.S}) {
              .wrapper h1 {
                font-size: 46px;
              }
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
