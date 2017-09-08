import { Component } from 'react'
import CompMain from '../app/components/main'
import Hero from '../app/components/hero'
import Updates from '../app/components/updates'
import ScrollBtn from '../app/components/scroll-btn'

export default class Index extends Component {
  render () {
    return (
      <CompMain>
        <Hero/>
        <Updates />
        <ScrollBtn />
      </CompMain>
    )
  }
}
