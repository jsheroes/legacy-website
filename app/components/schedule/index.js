import ScrollableAnchor from 'react-scrollable-anchor';
import Section from '../common/section';
import { styles, mediaQueries } from '../../constants';

const Schedule = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor4 } }}>
    <ScrollableAnchor id={'schedule'}>
      <div id="schedule_section" className="section-padding">
        <Style />
        <div className="row section-header">
          <h2>Conference Schedule</h2>
          <p>Coming soon</p>
        </div>
      </div>
    </ScrollableAnchor>
  </Section>
);

const Style = () => (
  <style jsx>{`
    #day1, #day2 {
      display: block!important;
      color: ${styles.mainColor3};
      position: relative;
    }
    .schedule-dayz {
      display: inline-block;
      padding: 20px;
      background-color: #228dcb;
      float: left;
      margin: 50px 117px 20px;
      position: relative;
    }
    .schedule-dayz:after {
      content: " ";
      position: absolute;
      border-top: 10px solid #228dcb;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      top: 60px;
      left: 28px;
    }
    .conference-time-list {
      border-top: 3px solid #393939;
      overflow: hidden;
      position: relative;
      clear: both;
      text-align: center;
      padding: 20px 0;
    }
    .conference-time-list.empty {
      display: none;
    }
    .conference-time-list:nth-last-child(1) {
      border-bottom: 3px solid #393939;
    }
    .conf-user-time {
      color: #fff;
      float: left;
      padding: 15px 0;
      text-align: center;
      width: 74px;
      font-weight: 300;
      box-sizing: border-box;
    }
    .conf-user-time span.time {
      display: block;
      font-size: 24px;
      line-height: 40px;
    }
    .conf-user-time span.time-schedule {
      display: block;
      font-size: 16px;
      text-align: center;
    }
    .conf-user-img {
      float: left;
      box-sizing: border-box;
      padding: 9px;
      width: 75px;
    }
    .conf-user-img img {
      display: block;
      margin-right: auto;
      margin-left: auto;
      height: auto;
      vertical-align: middle;
      border: 0;
      width: 60px;
    }
    .conf-user-info {
      float: left;
      box-sizing: border-box;
      padding: 15px 5px;
      width: 66%;
    }
    .conf-user-info h5 {
      color: #228dcb;
      fill: #228dcb;
      margin: 0 auto 30px;
      margin-bottom: 10px;
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;
    }
    .conf-user-info h5.gray-text {
      color: #8e8e8e;
    }
    .conf-user-info h6 {
      color: #8e8e8e;
      font-size: 16px;
      font-weight: 300;
      margin: 0 auto;
      line-height: 1.1;
    }
    .conf-user-info .event-description {
      width: 100%;
      box-sizing: border-box;
    }
    .conf-user-info.collapse .event-description {
      max-height: 0;
      animation: collapse .5s ease-out;
      visibility: hidden;
    }
    .conf-user-info.expand .event-description {
      visibility: visible;
      max-height: 600px;
      animation: expand .5s ease-out;
    }
    .conf-user-content {
      overflow: hidden;
      padding-top: 25px;
      width: 100%;
    }
    .conf-user-content p {
      color: #fff;
      font-size: 16px;
      width: 100%;
      text-align: left;
      line-height: 21px;
      font-weight: 300;
      margin: 0 0 10px;
      margin-bottom: 50px;
    }
    .conf-close {
      border-radius: 50%;
      color: #fff!important;
      display: inline-block;
      font-size: 31px;
      height: 35px;
      line-height: 52px;
      position: absolute;
      right: 23px;
      text-align: center;
      width: 35px;
      cursor: pointer;
      transform: rotate(89deg);
      background: #8e8e8e!important;
      bottom: 25px;
      transition-duration: .5s;
    }
    .conf-user-info.collapse .conf-close {
      transform: rotate(89deg);
    }
    .conf-user-info.expand .conf-close {
      transform: rotate(-91deg);
    }
    .conf-close i {
      width: 30px;
      height: 30px;
      display: block;
      position: absolute;
      top: 1px;
      left: 5px;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
    }
  
    #schedule_section.section-padding {
      padding: 80px 0; 
    }
    #schedule_section .section-header {
      margin-bottom: 45px;
      padding-right: 15px;
      padding-left: 15px;
    }
    #schedule_section .section-header h2 {
      text-align: center;
      font-size: 33px;
      color: ${styles.mainColor3};
      font-weight: 700;
      margin: 0 auto 30px;
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
      .conference-time-list {
        padding: initial;
      }
      .conf-user-time {
        padding: 10px;
        width: 110px;
      }
      .conf-user-time span.time {
        font-size: 38px;
        line-height: 60px;
      }
      .conf-user-time span.time-schedule {
        font-size: 20px;
        text-align: right;
      }
      .conf-user-img {
        padding: 30px 15px;
        width: 90px;
      }
      .conf-user-info {
        padding: 34px 0;
        width: 520px;
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
      .schedule-dayz {
        margin: 50px 147px 20px!important;
      }
      .conf-user-time {
        padding: 15px;
        width: 135px;
      }
      .conf-user-time span.time {
        font-size: 44px;
      }
      .conf-user-img {
        padding: 29px 20px;
        width: 100px;
      }
      .conf-user-info {
        padding: 34px 10px;
        width: 515px;
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
      #day1, #day2 {
        float: left;
        width: 50%;
      }
      #day1:before {
        content: "Day 1";
      }
      #day2:before {
        content: "Day 2";
      }
      #day1:before, #day2:before {
        width: 43px;
        height: 20px;
        background-color: #228dcb;
        margin-left: 27%;
        padding: 15px 10px;
        font-size: 16px;
        display: block;
        text-align: center;
        border-bottom: 15px solid #222;
        box-sizing: content-box;
        font-weight: 100;
      }
      #day1:after, #day2:after {
        content: " ";
        position: absolute;
        border-top: 10px solid #228dcb;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        top: 50px;
        left: 31%;
      }
      .schedule-dayz {
        display: none;
      }
      .conference-time-list {
        min-height: 130px;
        text-align: left;
      }
      .conference-time-list.empty {
        display: block;
      }
      .conf-user-time {
        padding: 0;
      }
      .conf-user-time span.time {
        font-size: 24px;
        color: #8e8e8e;
        text-align: right;
        margin-bottom: -20px;
      }
      .conf-user-time span.time-schedule {
        font-size: 16px;
        color: #8e8e8e;
      }
      .conf-user-img {
        padding: 20px;
      }
      .conf-user-info {
        width: 330px;
        padding: 20px 10px;
      }
      .conf-user-info h6 {
        color: #fff;
        width: 80%;
        float: left;
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

  `}</style>
);

module.exports = Schedule;
