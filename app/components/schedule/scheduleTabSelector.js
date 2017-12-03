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
        </button>
      );
    });
  }

  buildContent() {
    const { activePosition } = this.state;
    return (
      <div>{ activePosition }</div>
    );
  }

  render() {
    const buttons = this.buildButtonSection();
    const content = this.buildContent();
    return (
      <div>
        <Style />
        <div className="buttons-section clearfix">{ buttons }</div>
        <div className="check-in">08:00 - 09:00 CHECK-IN & COFFEE</div>
        <div className="content-section">{ content }</div>
        <div className="breaks-section">
          <div className="break-schedule">11:00 - 11:30 COFFEE BREAK</div>
          <div className="break-schedule">13:00 - 14:00 LUNCH BREAK</div>
        </div>
        <button className="buy-ticket-button">Buy Your Workshop Ticket</button>
      </div>
    );
  }
}

const Style = () => (
  <style jsx>{`
        .clearfix:after {
            display: table;
            content: "";
            clear: both;
        }

        .tabselector-button {
            background-color: ${styles.mainColor3};
            height: 80px;
            width: 33.3333%;
            float: left;
            color: ${styles.mainColor6};
            font-weight: bold;
            border: none;
            font-size: 18px;
        }

        .tabselector-button:hover,
        .tabselector-button.active
        {
            background-color: ${styles.mainColor6};
            color: ${styles.mainColor3};
        }

        .content-section {
            background-color: white;
            height: 300px;
            margin-bottom: 20px;
            float: left;
            width: 100%;
        }

        .check-in,
        .break-schedule
        {
            color: ${styles.mainColor3};
            font-size: 18px;
            text-align: center;
            font-weight: bold;
            margin: 10px 0;
            float: left;
            width: 100%;
        }

        .check-in {
            margin: 50px 0;
        }

        .breaks-section {
            float: left;
            width: 100%;
            margin: 50px 0;
        }

        .buy-ticket-button {
            height: 60px;
            width: 270px;
            text-align:center;
            background-color: ${styles.mainColor6};
            color: ${styles.mainColor3};
            border-radius: 8px;
            border: none;
            font-size: 18px;
            font-weight: bold;
            display: block;
            margin: 0 auto;
        }
    `}</style>
);

export default ScheduleTabSelector;
