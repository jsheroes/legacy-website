import { Component } from 'react';
import schedule from '../../data/schedule';
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

  buildContent() {
    const { activePosition } = this.state;
    const data = schedule[activePosition].activities;

    return data.map((activity) => {
      if (!activity.title) {
        return (
          <div key={activity.time} className="activity-row clearfix">
            <div className="activity-location">
              <div className="room-and-time">
                <div>{ activity.time }</div>
              </div>
            </div>
            <div className="activity-details">
              <span>TBA</span>
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
              }

              .room-and-time {
                margin-top: 20px;
              }

              .activity-location {
                text-align: left;
                width: 35%;
                float: left;
              }

              .activity-details {
                width: 65%;
                float: right;
                text-align: center;
              }
            `}</style>
          </div>
        );
      }

      return (
        <div key={activity.title}className="activity-row clearfix">
          <div className="activity-details">
            <div className="activity-title">
              <span>{ activity.title }</span>
            </div>
            <div>
              <span className="speaker-name" >{activity.speakerName}</span>
              <span className="speaker-position">, { activity.speakerPosition }</span>
              <span className="speaker-company">{ activity.speakerCompany }</span>
            </div>
          </div>
          <div className="activity-location">
            <div className="room-and-time">
              <div>{ activity.time }</div>
              <div>{ activity.room && activity.room }</div>
            </div>
            <div className="speaker-image">
              <img
                src={`static/img/speakers/${activity.speakerImage}`}
                alt={activity.speakerName}
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
    const content = this.buildContent();
    const firstBreak = activePosition === 2 ? '08:00 - 09:00 COFFEE' : '08:00 - 09:00 CHECK-IN & COFFEE';
    const isWorkshopTab = activePosition === 0;
    const ticket = isWorkshopTab ? 'Buy Your Workshop Ticket' : 'Buy Your Conference Ticket';
    const ticketLink = activePosition === 0 ? '' : 'https://ti.to/cluj-javascripters/jsheroes2018';

    return (
      <div>
        <style jsx>{`
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
        }

        .buy-ticket-button {
            height: 60px;
            width: 270px;
            text-align:center;
            background-color: ${styles.mainColor6};
            color: ${styles.mainColor3};
            border-radius: 8px;
            border: none;
            display: block;
            margin: 50px auto;
        }

        .buy-ticket-button:focus {
            outline: 0;
        }

        .buy-ticket-button a {
          color: ${styles.mainColor3};
          height: 100%;
          width: 100%;
          display: block;
          line-height: 60px;
          text-decoration: none;
        }

        .buttons-section {
          margin-bottom: 50px;
        }
    `}</style>
        <div className="buttons-section clearfix">{ buttons }</div>
        { !isWorkshopTab && <div className="check-in">{ firstBreak }</div> }
        <div className="content-section">{ content }</div>
        { !isWorkshopTab && <div className="break-schedule">10:30 - 11:00 COFFEE BREAK</div> }
        <div className="content-section">{ content }</div>
        { !isWorkshopTab && <div className="break-schedule">12:30 - 14:00 LUNCH BREAK</div> }
        <div className="content-section">{ content }</div>
        { !isWorkshopTab && <div className="break-schedule">15:30 - 16:00 COFFEE BREAK</div> }
        <div className="content-section">{ content }</div>
        <div className="buy-ticket-section">
          <button className="buy-ticket-button">
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              { ticket }
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default ScheduleTabSelector;
