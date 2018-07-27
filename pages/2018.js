import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';
import store from '../app/data';

export default () => (
  <Layout>
    <Speakers year="2018" speakers={store.data2018.speakers} />
    <Schedule year="2018" schedule={store.data2018.schedule} />
    <Venue />
    <ScrollBtn />
  </Layout>
);
