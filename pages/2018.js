import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';

export default () => (
  <Layout>
    <Speakers year="2018" />
    <Schedule year="2018" />
    <Venue />
    <ScrollBtn />
  </Layout>
);
