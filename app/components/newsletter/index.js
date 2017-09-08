import Head from 'next/head'
import ScrollableAnchor from 'react-scrollable-anchor'

import Section from '../../components/common/section'

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/newsletter_banner.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh'
}

const heroDarkOverlay = {
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'hsla(0,0%,0%,.4) none repeat scroll 0 0'
}

const NewsletterHero = props => (
  <div>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community, meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets, newsletter" />
      <meta name="description" content="read our first Newsletter for participants. See you soon ;)" />
      <meta name="News_Keywords" content="javascript, conference, international, js, jsheroes, heroes, cluj, cluj javascripters, javascripters, clujsers, june, grand hotel italia, cluj-napoca, cluj napoca, romania, transilvania, transylvania, open source, open-source, opensource, community,
          meetup, technical, event, knowledge, codecamp, evozon, fortech, speaker, call for speakers, web development, schedule, mission, diversity ticket, early bird, tickets, newsletter" />
      <title>JSHeroes 2017 | Newsletter</title>
      <meta property="og:title" content="Your JSHeroes 2017 Conference Info" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.jsheroes.io/newsletter" />
      <meta property="og:image" content="http://www.jsheroes.io/static/img/banners/newsletter_banner.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content="read our first Newsletter for participants. See you soon ;)" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Your JSHeroes 2017 Conference Info" />
      <meta name="twitter:site" content="@jsheroes" />
      <meta name="twitter:title" content="Your JSHeroes 2017 Conference Info" />
      <meta name="twitter:description" content="read our first Newsletter for participants. See you soon ;)" />
      <meta name="twitter:image" content="http://www.jsheroes.io/static/img/banners/newsletter_banner.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@jsheroes" />
    </Head>

    <Section
      section={{ style: heroBcgImg }}
      mainContainer={{ style: heroDarkOverlay }}
    >
      <ScrollableAnchor id={'home'}>
        <div />
      </ScrollableAnchor>
    </Section>
  </div>
)

module.exports = NewsletterHero
