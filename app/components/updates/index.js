import { Component } from 'react'
import Link from 'next/link'

import Section from '../../components/common/section'

class Updates extends Component {
  render () {
    return (
      <Section>
        <div className="wrapper">
          <h1>Updates</h1>
          <ul>
            <li><b>Date and venue:</b> We’ve already started organizing for JSHeroes 2018 and we’ll soon announce the date and venue. Feel free to send us your suggestions over Twitter.</li>
            <li><b>Speakers:</b> Call for Speakers for 2018 is now open! <b><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPSo4Zy_M78PHRVFz90v1_SV3IqRcyhvgK2oCDY6ju6NDWeA/viewform?usp=sf_link"><a target="_blank">Register your Talk ideas</a></Link></b> and we’ll get back to you as soon as we’ve set the date!</li>
            <li><b>Sponsors:</b> Our Call for Sponsors is always open. Send us an email if you’re interested to join our mission in 2018 <b><Link href="maito:welcome@jsheroes.io"><a>welcome@jsheroes.io</a></Link></b>, and we’ll take it from there.</li>
            <li><b>Wanted:</b> Passionate community members: Join the JSHeroes organizing crew! Get in touch and let us know what you’d like to contribute with.</li>
            <li><b>Register your interest</b> for JSHeroes 2018 and you’ll be the first to know when we’ll launch the Early Bird Tickets. <b><Link href="https://ti.to/cluj-javascripters/jsheroes2018"><a target="_blank">Click here.</a></Link></b></li>
          </ul>
        </div>

        <style jsx>{`
        ul li {
          list-style-type: none;
          margin: 15px 0;
        }
        .wrapper {
          margin: 100px 0;
        }
        h1 {
          margin: 20px 0;
          color: #0098ff;
        }
      `}</style>
      </Section>
    )
  }
}

module.exports = Updates
