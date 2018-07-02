import ScrollableAnchor from 'react-scrollable-anchor';

import Section from '../common/section';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/banners/newsletter_banner.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const heroDarkOverlay = {
  display: 'block',
  width: '100%',
  height: '100%',
  padding: '0',
  position: 'absolute',
  top: '0',
  left: '0',
  background: 'hsla(0,0%,0%,.4) none repeat scroll 0 0',
};

const NewsletterHero = () => (
  <div>
    <Section
      section={{ style: heroBcgImg }}
      mainContainer={{ style: heroDarkOverlay }}
    >
      <ScrollableAnchor id="home">
        <div />
      </ScrollableAnchor>
    </Section>
  </div>
);

module.exports = NewsletterHero;
