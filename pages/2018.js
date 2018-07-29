import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';
import store from '../app/data';

export default () => {
  const baseUrl = 'static/img/2018';
  return (
    <Layout>
      <Speakers baseUrl={baseUrl} speakers={store.data2018.speakers} />
      <Schedule baseUrl={baseUrl} year="2018" schedule={store.data2018.schedule} />
      <Venue />
      <ScrollBtn />
    </Layout>
  );
};
