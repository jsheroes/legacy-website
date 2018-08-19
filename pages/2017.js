import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import AfterMovie from '../app/components/afterMovie';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Communities from '../app/components/communities';
import ScrollBtn from '../app/components/scroll-btn';
import store from '../app/data';

const currentYear = () => {
  const baseUrl = 'static/img/2017';
  return (
    <Layout>
      <AfterMovie year="2017" videos={store.data2017.videos} />
      <Speakers baseUrl={baseUrl} year="2017" speakers={store.data2017.speakers} />
      <Schedule
        baseUrl={baseUrl}
        year="2017"
        schedule={store.data2017.schedule}
        speakers={store.data2017.speakers}
      />
      <Sponsors baseUrl={baseUrl} sponsors={store.data2017.sponsors} />
      <Partners baseUrl={baseUrl} partners={store.data2017.partners} />
      <Communities baseUrl={baseUrl} communities={store.data2017.communities} />
      <ScrollBtn />
    </Layout>
  );
};

export default currentYear;
