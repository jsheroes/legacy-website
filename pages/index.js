import Layout from '../app/components/layout';
import Header from '../app/components/header';
import Updates from '../app/components/updates';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Statistics from '../app/components/statistics';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Communities from '../app/components/communities';
import Mission from '../app/components/mission';
import Organizers from '../app/components/organizers/organizers';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';
import ContactForm from '../app/components/contactForm';
import PhotoGallery from '../app/components/photoGallery';
import store from '../app/data/2019';
import 'what-input';

const buildComponent = (currentStore, year = 2019) => {
  const baseUrl = `static/img/${year}`;
  const { speakers, sponsors, partners, communities, schedule } = currentStore;

  const Component = () => (
    <Layout>
      <main>
        <Header />
        <Updates />
        <Speakers {...{ baseUrl, year, speakers }} />
        <Schedule {...{ baseUrl, year, schedule, speakers }} />
        <Mission />
        <Sponsors {...{ baseUrl, sponsors }} />
        <Partners {...{ baseUrl, partners }} />
        <Communities {...{ baseUrl, communities }} />
        <PhotoGallery />
        <Statistics />
        <Organizers />
        <Venue />
        <ContactForm />
        <ScrollBtn />
      </main>
    </Layout>
  );

  return Component;
};

export default buildComponent(store);
