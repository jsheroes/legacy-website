import Layout from '../app/components/layout';
import HeaderImage from '../app/components/common/HeaderImage';
import ContestMain from '../app/components/contest';

export const StickerContest = () => (
  <Layout page="sticker-contest">
    <HeaderImage imageUrl="static/img/jsheroes-sticker-contest-photo.png" height="250px" />
    <ContestMain />
  </Layout>
);
export default StickerContest;
