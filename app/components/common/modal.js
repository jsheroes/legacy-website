import { style, mediaQueries } from '../../constants'

const Modal = props => (
  <div>
    <Style />

    <div id="modal_body" style={{ display: 'block', paddingRight: '17px' }}>
      <div className="modal-backdrop" />
      <div className="modal-dialog">
        <div className="modal-close-button">
          <i className="fa fa-window-close-o" />
        </div>

        <div className="modal-content">
          {props.children}
        </div>
      </div>
    </div>
  </div>
)

const Style = () => (
  <style jsx>{`
    .modal-backdrop {
      opacity: .5;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1040;
      background-color: #000;
      animation: fadeIn .5s;
    }
    #modal_body {
      text-align: start;
      z-index: 99999;
      overflow-x: hidden;
      overflow-y: auto;
      opacity: 1;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1050;
      display: none;
      overflow: auto;
      outline: 0;
    }
    .modal-dialog {
      width: 600px;
      margin: 30px auto;
      position: relative;
      z-index: 1050;
      animation: bounceIn .5s;
    }
    .modal-close-button {
      width: 36px;
      height: 36px;
      color: #000;
      font-size: 36px;
      line-height: 36px;
      text-align: center;
      position: absolute;
      top: 0;
      right: 3px;
      z-index: 5;
      cursor: pointer;
    }
    .modal-content {
      border-radius: 0;
      padding: 40px;
      position: relative;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.2);
      outline: 0;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
    }
    
    @keyframes bounceIn {
      0% {
        transform: translate(0,-25%);
        opacity: 0;
      }
      100% {
        transform: translate(0,0);
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
    }
  `}</style>
)

module.exports = Modal
