import Section from '../common/section';

const heroBcgImg = {
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(static/img/sticker-contest.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '250px',
};

const ContestHero = () => <Section section={{ style: heroBcgImg }} />;
export default ContestHero;
