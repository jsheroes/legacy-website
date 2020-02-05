import { Component } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { styles } from '../../constants';
import ScheduleRow from './scheduleRow';
import CTAButton from '../common/ctaButton';

class ScheduleTabSelector extends Component {
  state = {
    selectedTab: 0,
  };

  buildContent(day) {
    const { schedule, baseUrl, speakers } = this.props;
    const agenda = schedule[day].activities;
    return agenda.map((item, index) => (
      <ScheduleRow
        activeTab={day}
        agendaItem={item}
        speakers={speakers}
        type={schedule[day].type}
        key={item.speakerRef || index}
        baseUrl={baseUrl}
      />
    ));
  }

  buildCTAButton() {
    const { selectedTab } = this.state;
    return selectedTab >= 1 ? (
      <CTAButton primary url="https://ti.to/cluj-javascripters/jsheroes-2020">
        Buy Your Conference Ticket
      </CTAButton>
    ) : (
      <CTAButton primary url="https://ti.to/cluj-javascripters/workshops-day-jsheroes-2020">
        Buy Your Workshop Ticket
      </CTAButton>
    );
  }

  render() {
    const { schedule } = this.props;
    const button = this.buildCTAButton();

    return (
      <div>
        <Tabs defaultIndex={0} onChange={index => this.setState({ selectedTab: index })}>
          <TabList className="tablist">
            {schedule.map(item => (
              <Tab key={item.id} className="tabselector-button">
                <div>{item.section}</div>
                <div>{item.date}</div>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {schedule.map((day, index) => (
              <TabPanel key={day.id}>{this.buildContent(index)}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <div className="cta-button clearfix">{button}</div>
        <style jsx global>
          {`
            .tablist {
              display: flex;
            }

            .tabselector-button {
              color: ${styles.mainColor6};
              background-color: ${styles.mainColor3};
              height: 60px;
              border: none;
              flex: 1;
              border-radius: 0;
              transition: background-color 0.5s, color 0.5s;
              font-size: 13px;
              cursor: pointer;
            }

            .tabselector-button:hover,
            .tabselector-button[data-selected] {
              background-color: ${styles.mainColor6};
              color: ${styles.mainColor3};
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
              list-style: none;
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
