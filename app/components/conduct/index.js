import Section from '../common/section';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/code-of-conduct-hero.jpg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '50vh',
};

const ConductHero = () => (
  <div>
    <Section section={{ style: heroBcgImg }} />
  </div>
);

export default ConductHero;
