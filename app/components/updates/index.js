import Link from 'next/link';

import Section from '../../components/common/section';

const Updates = () => (
  <Section>
    <div className="wrapper">
      <h1>Updates</h1>
      <ul>
        <li><b>Date and venue:</b> Join us on 18-20 April 2018 in Cluj Napoca, Romania at Grand Hotel Italia for 1 day of workshops and 2 days of conference. Feel free to send us your suggestions over Twitter, we’d be happy to hear from you.</li>
        <li><b>Speakers:</b> Call for Speakers for 2018 is now open! <b><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPSo4Zy_M78PHRVFz90v1_SV3IqRcyhvgK2oCDY6ju6NDWeA/viewform?usp=sf_link"><a target="_blank">Register your Talk ideas</a></Link></b> and we’ll get back to you soon!</li>
        <li><b>Sponsors:</b> Our Call for Sponsors is always open. Send us an email if you’re interested to join our mission in 2018 <b><Link href="maito:welcome@jsheroes.io"><a>welcome@jsheroes.io</a></Link></b>, and we’ll take it from there.</li>
        <li><b>Wanted:</b> Passionate community members: Join the JSHeroes organizing crew! Get in touch and let us know what you’d like to contribute with.</li>
        <li><b>Tickets:</b> If PayPal is not your preferred payment method, you can also pay by invoice. Drop us a line at <b><Link href="maito:contact@jsheroes.io"><a>contact@jsheroes.io</a></Link></b> with your request, we’d be happy to help.</li>
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
);

export default Updates;
