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
import store from '../app/data/index';
import 'what-input';

const Home = () => {
  const baseUrl = `static/img/${store.currentYear}`;
  return (
    <Layout>
      <main>
        <Header />
        <Updates />
        <Speakers year="2019" baseUrl={baseUrl} speakers={store.data2019.speakers} />
        <Schedule
          baseUrl={baseUrl}
          year="2019"
          schedule={store.data2019.schedule}
          speakers={store.data2019.speakers}
        />
        <Mission />
        <Sponsors baseUrl={baseUrl} sponsors={store.data2019.sponsors} />
        <Partners baseUrl={baseUrl} partners={store.data2019.partners} />
        <Communities baseUrl={baseUrl} communities={store.data2019.communities} />
        <Statistics />
        <Organizers />
        <Venue />
        <ContactForm />
        <ScrollBtn />
      </main>
    </Layout>
  );
};

export default Home;
