import Layout from '../app/components/layout';
import ConductHero from '../app/components/conduct';
import ConductMain from '../app/components/conduct/conduct.main';

const ConductPage = () => (
  <Layout page="code-of-conduct">
    <ConductHero />
    <ConductMain />
  </Layout>
);

export default ConductPage;
