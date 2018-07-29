import { Component } from 'react';
// import schedule from '../../data/2018/schedule';
import { styles } from '../../constants';
import ScheduleRow from './scheduleRow';

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
    const { schedule } = this.props;
    return schedule.map((item) => {
      const active = item.index === activePosition ? 'active' : '';
      return (
        <button
          key={item.section}
          className={`tabselector-button ${active}`}
          onClick={this.handleClick(item.index)}
        >
          <div>
            {item.section}
          </div>
          <div>
            {item.date}
          </div>
          <style jsx>
            {`
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
                transition: background-color 0.5s, color 0.5s;
                font-size: 13px;
              }

              .tabselector-button:hover,
              .tabselector-button.active {
                background-color: ${styles.mainColor6};
                color: ${styles.mainColor3};
              }

              .tabselector-button:focus {
                outline: 0;
              }

              @media screen and (min-width: 420px) {
                .tabselector-button {
                  font-size: 16px;
                }
              }

              @media screen and (min-width: 480px) {
                .tabselector-button {
                  font-size: 18px;
                }
              }
            `}
          </style>
        </button>
      );
    });
  }

  buildContent(firstTalk) {
    const { activePosition } = this.state;
    const { schedule, baseUrl } = this.props;
    const agenda = schedule[activePosition].activities.slice(firstTalk, firstTalk + 3);

    return agenda.map((item, index) => (
      <ScheduleRow
        activeTab={activePosition}
        agendaItem={item}
        key={item.speakerRef || index}
        baseUrl={baseUrl}
      />
    ));
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
        <div className="buttons-section clearfix">
          {buttons}
        </div>
        {!isWorkshopTab && (
        <div className="check-in">
          {firstBreak}
        </div>
        )}
        <div className="content-section clearfix">
          {morningTalks}
        </div>
        {!isWorkshopTab && (
        <div className="break-schedule">
10:30 - 11:00 COFFEE BREAK
        </div>
        )}
        <div className="content-section clearfix">
          {beforeLunchTalks}
        </div>
        {!isWorkshopTab && (
        <div className="break-schedule">
12:30 - 14:00 LUNCH BREAK
        </div>
        )}
        <div className="content-section clearfix">
          {afterLunchTalks}
        </div>
        {!isWorkshopTab && (
        <div className="break-schedule">
15:30 - 16:00 COFFEE BREAK
        </div>
        )}
        <div className="content-section clearfix">
          {lastTalks}
        </div>
        <style jsx>
          {`
            .check-in,
            .break-schedule {
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
              text-align: center;
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
