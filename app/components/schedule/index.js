import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';
import ScheduleTabSelector from './scheduleTabSelector';

const Schedule = ({ year, schedule, baseUrl }) => (
  <Section section={{ style: { backgroundColor: styles.mainColor4 } }}>
    <ScrollableAnchor id="schedule">
      <div id="schedule_section" className="section-padding">
        <Style />
        <div className="row section-header">
          <h2>Schedule</h2>
          <ScheduleTabSelector schedule={schedule} year={year} baseUrl={baseUrl} />
        </div>
      </div>
    </ScrollableAnchor>
  </Section>
);

const Style = () => (
  <style jsx="true">
    {`
      #schedule_section.section-padding {
        padding: 80px 0;
      }
      #schedule_section .section-header {
        margin: auto;
      }
      #schedule_section .section-header h2 {
        text-align: center;
        font-size: 33px;
        color: ${styles.mainColor3};
        font-weight: 700;
        margin: 0 auto 50px;
      }
      #schedule_section .section-header p {
        width: 98%;
        margin-bottom: 20px;
        font-size: 16px;
        color: ${styles.mainColor3};
        line-height: 28px;
        font-weight: 300;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }

      #schedule_section .row {
        display: table;
        width: 100%;
      }

      @media (min-width: ${mediaQueries.S}) {
        #schedule_section.section-padding {
          padding: 80px 0;
        }
        #schedule_section .section-header h2 {
          font-size: 33px;
        }
        #schedule_section .section-header p {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 20px;
        }
      }
      @media (min-width: ${mediaQueries.L}) {
        #schedule_section.section-padding {
          padding: 90px 0;
        }
        #schedule_section .section-header h2 {
          font-size: 46px;
        }
        #schedule_section .section-header p {
          font-size: 17px;
          line-height: 30px;
          margin-bottom: 30px;
        }
      }
      @media (min-width: ${mediaQueries.XL}) {
        #schedule_section.section-padding {
          padding: 140px 0;
        }
        #schedule_section .section-header h2 {
          font-size: 52px;
        }
        #schedule_section .section-header p {
          font-size: 18px;
          line-height: 32px;
          margin-bottom: 40px;
        }
      }

      @keyframes expand {
        from {
          max-height: 0px;
          visibility: hidden;
        }
        to {
          max-height: 600px;
          visibility: visible;
        }
      }
      @keyframes collapse {
        0% {
          max-height: 600px;
          visibility: visible;
        }
        80% {
          visibility: hidden;
        }
        100% {
          max-height: 0px;
          visibility: hidden;
        }
      }
    `}
  </style>
);

module.exports = Schedule;
