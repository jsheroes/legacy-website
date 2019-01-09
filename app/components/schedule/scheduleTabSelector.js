import { Component } from 'react';
import { styles } from '../../constants';
import ScheduleRow from './scheduleRow';
import CTAButton from '../common/ctaButton';

class ScheduleTabSelector extends Component {
  constructor() {
    super();
    this.state = {
      activePosition: 1,
    };
    this.buildButtonSection = this.buildButtonSection.bind(this);
  }

  handleClick(position) {
    return () =>
      this.setState({
        activePosition: position,
      });
  }

  buildButtonSection() {
    const { activePosition } = this.state;
    const { schedule } = this.props;
    return schedule.map(item => {
      const active = item.index === activePosition ? 'active' : '';
      return (
        <button
          key={item.section}
          className={`tabselector-button ${active}`}
          onClick={this.handleClick(item.index)}
        >
          <div>{item.section}</div>
          <div>{item.date}</div>
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

  buildContent() {
    const { activePosition } = this.state;
    const { schedule, baseUrl, speakers } = this.props;
    const agenda = schedule[activePosition].activities;
    return agenda.map((item, index) => (
      <ScheduleRow
        activeTab={activePosition}
        agendaItem={item}
        speakers={speakers}
        type={schedule[activePosition].type}
        key={item.speakerRef || index}
        baseUrl={baseUrl}
      />
    ));
  }

  buildCTAButton() {
    const { activePosition } = this.state;
    return activePosition === 0 ? (
      <CTAButton primary url="https://ti.to/cluj-javascripters/workshops-day-jsheroes-2019">
        Buy Your Workshop Ticket
      </CTAButton>
    ) : (
      <CTAButton primary url="https://ti.to/cluj-javascripters/jsheroes-2019">
        Buy Your Conference Ticket
      </CTAButton>
    );
  }

  render() {
    const buttons = this.buildButtonSection();
    const talks = this.buildContent();
    const button = this.buildCTAButton();

    return (
      <div>
        <div className="buttons-section clearfix">{buttons}</div>
        <div className="content-section clearfix">{talks}</div>
        <div className="cta-button clearfix">{button}</div>
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
              display: flex;
              justify-content: center;
            }

            .content-section {
              float: left;
              width: 100%;
            }

            .cta-button {
              float: left;
              margin-top: 20px;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default ScheduleTabSelector;
