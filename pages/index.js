import Layout from '../app/components/layout';
import Header from '../app/components/header';
import Updates from '../app/components/updates';
import Speakers from '../app/components/speakers';
import Schedule from '../app/components/schedule';
import Sponsors from '../app/components/sponsors';
import Partners from '../app/components/partners';
import Communities from '../app/components/communities';
import Mission from '../app/components/mission';
import Venue from '../app/components/venue';
import ScrollBtn from '../app/components/scroll-btn';

export default () => (
  <Layout>
    <Header />
    <Updates />
    <Speakers />
    <Schedule />
    <Mission />
    <Sponsors />
    <Partners />
    <Communities />
    <Venue />
    <ScrollBtn />
  </Layout>
);
