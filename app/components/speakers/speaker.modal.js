import { style } from '../../constants';
import Speaker from './speaker';
import Modal from '../common/modal';

const Speakermodal = props => (
  <Modal>
    <Style />
    <div className="speaker-details">
      <Speaker data={props.data} />
      <div className="social-links">
        {props.data.twitter
          ? <a href={props.data.twitter} target="_blank">
            <i className="fa fa-twitter" />
          </a>
          : ''}
        {props.data.github
          ? <a href={props.data.github} target="_blank">
            <i className="fa fa-github" />
          </a>
          : ''}
        {props.data.website
          ? <a href={props.data.website} target="_blank">
            <i className="fa fa-link" />
          </a>
          : ''}
      </div>
      <div className="speaker-description">
        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </div>
    </div>
  </Modal>
);

const Style = () => (
  <style jsx>{`
    .speaker-details {
      max-width: 360px;
      margin: auto;
      text-align: center;
    }
    .speaker-description {
      margin-left: 26px;
      text-align: start;
    }
    .speaker-description p {
      font-size: 18px;
      color: #555;
      line-height: 32px;
      font-weight: 300;
      margin: 0 0 10px 0
    }
    .speaker-description a {
      color: #228dcb;
      fill: #228dcb;
    }
    .social-links {
      margin-bottom: 10px;
    }
    .social-links a {
      border: 1px solid #333;
      border-radius: 50%;
      display: inline-block;
      line-height: 40px;
      width: 38px;
      height: 38px;
      margin: 0px 2px;
    }
    .social-links .fa {
      font-size: 16px;
      line-height: 40px;
      position: relative;
      color: #333;
      padding: 0 3px
    }
    #modal_body .speaker-sec {
      max-width: 360px;
      margin: auto;
      text-align: center;
    }
    #modal_body .text-blue {
      margin-bottom: 1px;
    }
    #modal_body .speaker-info {
      margin-bottom: 5px;
      padding: 10px 0 0 0;
    }
    #modal_body .speaker-info h6 {
      line-height: 1.7;
      margin-bottom: 0;
    }
    #modal_body .speaker-hover {
      pointer-events: none;
    }
    #modal_body .speaker-info-box {
      pointer-events: none;
    }
  `}</style>
);

module.exports = Speakermodal;
