import AfterMovie from '../app/components/afterMovie';
import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Communities from '../app/components/communities';
import ScrollBtn from '../app/components/scroll-btn';
import store from '../app/data';

const currentYear = () => {
  const baseUrl = 'static/img/2018';
  return (
    <Layout>
      <AfterMovie year="2018" videos={store.data2018.videos} />
      <Speakers baseUrl={baseUrl} year="2018" speakers={store.data2018.speakers} />
      <Schedule
        baseUrl={baseUrl}
        year="2018"
        schedule={store.data2018.schedule}
        speakers={store.data2018.speakers}
      />
      <Sponsors baseUrl={baseUrl} sponsors={store.data2018.sponsors} />
      <Partners baseUrl={baseUrl} partners={store.data2018.partners} />
      <Communities baseUrl={baseUrl} communities={store.data2019.communities} />
      <ScrollBtn />
    </Layout>
  );
};

export default currentYear;
