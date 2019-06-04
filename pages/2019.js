import AfterMovie from '../app/components/afterMovie';
import Layout from '../app/components/layout';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Communities from '../app/components/communities';
import ScrollBtn from '../app/components/scroll-btn';
import PhotoGallery from '../app/components/photoGallery';
import store from '../app/data/2019';

const buildComponent = (currentStore, year = 2019) => {
  const baseUrl = `static/img/${year}`;
  const { videos, speakers, sponsors, partners, communities, schedule } = currentStore;

  const Component = () => (
    <Layout>
      <AfterMovie {...{ year, videos }} />
      <Speakers {...{ baseUrl, year, speakers }} />
      <Schedule {...{ baseUrl, year, schedule, speakers }} />
      <Sponsors {...{ baseUrl, sponsors }} />
      <Partners {...{ baseUrl, partners }} />
      <Communities {...{ baseUrl, communities }} />
      <PhotoGallery {...{ year }} />
      <ScrollBtn />
    </Layout>
  );

  return Component;
};

export default buildComponent(store);
