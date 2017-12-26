import { Component } from 'react';
import Link from 'next/link';
import schedule from '../../data/schedule';
import speakers from '../../data/speakers';
import { styles } from '../../constants';


class ScheduleTabSelector extends Component {
  constructor() {
    super();
    this.state = {
      activePosition: 0,
    };
    this.buildButtonSection = this.buildButtonSection.bind(this);
  }

  handleClick(position) {
    return () => this.setState({
      activePosition: position,
    });
  }

  buildButtonSection() {
    const { activePosition } = this.state;

    return schedule.map((item) => {
      const active = item.index === activePosition ? 'active' : '';
      return (
        <button
          key={item.section}
          className={`tabselector-button ${active}`}
          onClick={this.handleClick(item.index)}
        >
          <div>{ item.section }</div>
          <div>{ item.date }</div>
          <style jsx>{`
            .clearfix:after {
              display: table;
              content: '';
              clear: both;
            }

            .tabselector-button {
                background-color: ${styles.mainColor3};
                height: 60px;
                width: 33.3333%;
                float: left;
                color: ${styles.mainColor6};
                border: none;
                border-radius: 0;
                transition: background-color .5s, color .5s;
            }

            .tabselector-button:hover,
            .tabselector-button.active
            {
                background-color: ${styles.mainColor6};
                color: ${styles.mainColor3};
            }

            .tabselector-button:focus {
                outline: 0;
            }
        `}</style>
        </button>
      );
    });
  }

  buildContent(firstTalk) {
    const { activePosition } = this.state;
    const isWorkshopTab = activePosition === 0;
    const data = schedule[activePosition].activities.slice(firstTalk, firstTalk + 3);

    return data.map((activity) => {
      if (!activity) {
        return '';
      }
      if (!isWorkshopTab && !activity.title) {
        return (
          <div key={activity.time} className="activity-row clearfix">
            <div className="activity-details">
              <span>TBA</span>
            </div>
            <div className="activity-location">
              <div className="room-and-time">
                <div>{ activity.time }</div>
              </div>
            </div>
            <style jsx>{`
              .activity-row {
                padding: 20px 0;
                border-bottom: 1px solid rgba( 255, 255, 255, .7 );
                width: 100%;
                height: 100px;
                color: ${styles.mainColor3};
                font-weight: 400;
                float: left;
                text-align: center;
              }

              @media screen and (min-width: 1000px) {
                .activity-row {
                  text-align: none;
                }
                .activity-details {
                  width: 85%;
                  height: 100%;
                  float: right;
                }

                .activity-location {
                  text-align: left;
                  width: 15%;
                  height: 100%;
                }

                .room-and-time {
                  margin-top: 20px;
                }
  
                .activity-details span {
                  margin-top: 20px;
                  display: block;
                }
              }
            `}</style>
          </div>
        );
      }

      const speaker = speakers.find(s => s.permalink === activity.speakerRef);

      return (
        <div key={activity.title}className="activity-row clearfix">
          <div className="activity-details">
            <div className="activity-title">
              <span>{ activity.title }</span>
            </div>
            <div>
              <span className="speaker-name" >{speaker.fullName}</span>
              <span className="speaker-position">, { speaker.position }</span>
              <span className="speaker-company">{ speaker.company }</span>
            </div>
            <Link href={`/workshops/${activity.permalink}`}>
              <button className="button">See more details</button>
            </Link>
          </div>
          <div className="activity-location">
            <div className="room-and-time">
              <div>{ activity.time }</div>
              <div>{ activity.room && activity.room }</div>
            </div>
            <div className="speaker-image">
              <img
                src={`static/img/speakers/${speaker.img}`}
                alt={speaker.fullName}
              />
            </div>
          </div>
          <style jsx>{`
          .activity-row {
            padding: 20px 0;
            border-bottom: 1px solid rgba( 255, 255, 255, .7 );
            width: 100%;
            color: ${styles.mainColor3};
            font-weight: 400;
            text-align: center;
          }

          .activity-title {
            font-weight: 700;
          }

          .speaker-name {
              color: ${styles.mainColor6};
          }

          .speaker-company {
            display: block;
          }

          .speaker-company:before {
            content: "";
          }

          .speaker-position {
            display: none;
          }

          .speaker-image {
              display: none;
          }

          .content-section {
            margin-bottom: 20px;
            float: left;
            width: 100%;
          }

          .room-and-time {
            margin-top: 20px;
          }

          @media screen and (min-width: 1000px) {
            .activity-row {
              text-align: left;
            }

            .activity-location {
              width: 35%;
              float: left;
            }

            .activity-details {
              width: 65%;
              float: right;
            }

            .speaker-position {
              display: inline;
            }

            .speaker-company {
              display: inline;
            }

            .speaker-company:before {
              content: ", ";
            }

            .speaker-image {
              display: block;
              width: 45%;
              float: left;
            }

            .speaker-image img {
              width: 60px;
              height: 60px;
              border: 5px solid #CCC;
              filter: grayscale( 100% );
            }

            .room-and-time {
              width: 55%;
              float: left;
              margin: 0;
            }
          }
        `}</style>
        </div>
      );
    },
    );
  }

  render() {
    const { activePosition } = this.state;
    const buttons = this.buildButtonSection();
    const morningTalks = this.buildContent(0);
    const beforeLunchTalks = this.buildContent(3);
    const afterLunchTalks = this.buildContent(6);
    const lastTalks = this.buildContent(9);
    const firstBreak = activePosition === 2 ? '08:00 - 09:00 COFFEE' : '08:00 - 09:00 CHECK-IN & COFFEE';
    const isWorkshopTab = activePosition === 0;

    return (
      <div>
        <div className="buttons-section clearfix">{ buttons }</div>
        { !isWorkshopTab && <div className="check-in">{ firstBreak }</div> }
        <div className="content-section clearfix">{ morningTalks }</div>
        { !isWorkshopTab && <div className="break-schedule">10:30 - 11:00 COFFEE BREAK</div> }
        <div className="content-section clearfix">{ beforeLunchTalks }</div>
        { !isWorkshopTab && <div className="break-schedule">12:30 - 14:00 LUNCH BREAK</div> }
        <div className="content-section clearfix">{ afterLunchTalks }</div>
        { !isWorkshopTab && <div className="break-schedule">15:30 - 16:00 COFFEE BREAK</div> }
        <div className="content-section clearfix">{ lastTalks }</div>
        <div className="buy-ticket-section">
          {
          isWorkshopTab ?
            (<span>Tickets Coming Soon</span>)
            :
            (
              <button className="button buy-ticket-button">
                <a
                  href="https://ti.to/cluj-javascripters/jsheroes2018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Buy Your Conference Ticket
                </a>
              </button>
            )
        }
        </div>
        <style jsx>
          {`
            .check-in,
            .break-schedule
            {
                color: ${styles.mainColor3};
                text-align: center;
                font-weight: bold;
                margin: 10px 0;
                float: left;
                width: 100%;
                margin: 50px 0;
            }

            .check-in {
                margin-top: 0px;
            }

            .buy-ticket-section {
              float: left;
              width: 100%;
              color: ${styles.mainColor3};
              text-align:center;
            }

            .buy-ticket-section span {
              display: block;
              margin: 50px auto;
            }

            .buy-ticket-button {
                height: 60px;
                width: 270px;
                margin: 50px auto;
            }

            .buttons-section {
              margin-bottom: 50px;
            }

            .content-section {
              float: left;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ScheduleTabSelector;
