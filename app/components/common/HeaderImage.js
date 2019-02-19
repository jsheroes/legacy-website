import Section from './section';

const imageStyle = (imageUrl = 'static/img/code-of-conduct-hero.jpg', height = '40vh') => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: `url( ${imageUrl} )`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: `${height}`,
});

const HeaderImage = ({ imageUrl, height }) => (
  <div>
    <Section section={{ style: imageStyle(imageUrl, height) }} />
  </div>
);

export default HeaderImage;
