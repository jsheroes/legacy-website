import 'what-input';

import Layout from '../app/components/layout';
import Header from '../app/components/header';
import News from '../app/components/news';
import Speakers from '../app/components/speakers';
import Theme from '../app/components/theme';
import Funds from '../app/components/funds';
import Schedule from '../app/components/schedule';
// import Statistics from '../app/components/statistics';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Events from '../app/components/communities/events';
import Communities from '../app/components/communities';
import Mission from '../app/components/mission';
import Organizers from '../app/components/organizers/organizers.main';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';
import ContactForm from '../app/components/contactForm';
import PhotoGallery from '../app/components/photoGallery';
// import AfterMovie from '../app/components/afterMovie';

import store from '../app/data/2020';

const buildComponent = (currentStore, year = '2020') => {
  const baseUrl = `static/img/${year}`;
  const { speakers, sponsors, communities, events, schedule, partners } = currentStore;

  const Component = () => (
    <Layout>
      <Header />
      <News />
      <Speakers {...{ baseUrl, year, speakers }} />
      <Theme />
      <Schedule {...{ baseUrl, year, schedule, speakers }} />
      <Funds />
      <Mission />
      <Sponsors {...{ baseUrl, sponsors }} />
      <Partners {...{ baseUrl, partners }} />
      <Events {...{ baseUrl, events }} />
      <Communities {...{ baseUrl, communities }} />
      <Venue />
      <ContactForm />
      <PhotoGallery {...{ year: 2019 }} />
      {/* <Statistics /> */}
      <Organizers />
      <ScrollBtn />
    </Layout>
  );

  return Component;
};

export default buildComponent(store);
