import { mediaQueries } from '../../constants';

const Speaker = props => (
  <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
    <div className="speaker-sec">
      <div className="speaker-info-box">
        <div className="speaker-img">
          {' '}
          <img
            src={`static/img/speakers/${props.data.img}`}
            alt={props.data.name}
          />
          {' '}
        </div>
        <div className="speaker-hover">
          <div className="speaker-more-cta text-center">
            <span>find out more</span>
          </div>
        </div>
      </div>
      <div className="speaker-info">
        <h5 className="text-blue">{props.data.full_name}</h5>
        <h6>{props.data.position}<br />{props.data.company}</h6>
      </div>
    </div>

    <style jsx>{`
      .speaker-sec {
        text-align: center;
      }
      .speaker-info-box {
        max-width: 245px;
        height: 245px;
        position: relative;
        text-align: center;
        margin: 0 auto;
        border: 12px solid #ccc;
        overflow: hidden;
        box-sizing: border-box;
      }
      .speaker-img {
        cursor: pointer;
      }
      .speaker-img img {
        display: block;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
        border: 0;
        max-width: 100%;
        height: auto;
        filter: grayscale(100%);
      }
      .speaker-hover {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .5s linear 0s;
        vertical-align: middle;
        width: 100%;
        background: rgba(0,152,255,.8) none repeat scroll 0 0!important;
      }
      .speaker-hover:hover {
        opacity: 1;
      }
      .speaker-more-cta {
        line-height: 221px;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
      .speaker-info {
        margin-bottom: 5px;
        padding: 15px 0;
      }
      .speaker-info h5 {
        margin: 0 auto 30px;
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
      }
      .speaker-info h6 {
        margin: 0 auto 30px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: 300;
        line-height: 32px;
        color: #555;
      }
      .text-blue {
        color: #0098FF!important;
      }
      @media (min-width: ${mediaQueries.S}) {
        .speaker-info h5 {
          font-size: 26px;
        }
      }
      @media (min-width: ${mediaQueries.L}) {
        .speaker-info h5 {
          font-size: 28px;
        }
      }
    `}</style>
  </div>
);

export default Speaker;
