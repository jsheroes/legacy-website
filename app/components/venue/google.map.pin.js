import { Component } from 'react'
import { styles } from '../../constants'

export default class MapPin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPinLabel: false
    }

    this.toggleLabel = this.toggleLabel.bind(this)
  }

  toggleLabel() {
    this.setState({
      showPinLabel: !this.state.showPinLabel
    })
  }

  render() {
    return (
      <div onClick={this.toggleLabel}>
        <div
          className={`map-pin-loc ${this.state.showPinLabel ? 'mpl-show' : ''}`}
        >
          <p>Trifoiului Street number 3, Cluj-Napoca, Romania</p>
          <p><strong>Grand Hotel Italia</strong></p>
        </div>
        <img src="static/img/js_heroes_pin.png" alt="The Map Pin" />

        <style jsx>{`
          .map-pin-loc {
            display: none;
            position: absolute;
            left: -85px;
            top: -70px;
            border-radius: 4px;
            background-color: ${styles.mainColor3};
            width: 260px;
            height: 38px;
            color: #000;
            padding: 5px;
            text-align: center;
          }
          
          .map-pin-loc:after {
            content: "";
            position: absolute;
            top: 48px;
            left: 115px;
            width: 2px;
            height: 20px;
            border-top: 20px solid ${styles.mainColor3};
            border-right: 20px solid transparent;
            border-left: 20px solid transparent;
          }

          .mpl-show {
            display: block;
          }
          
          p {
            margin: 4px 0;
          }
        `}</style>
      </div>
    )
  }
}
