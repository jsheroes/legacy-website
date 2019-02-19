import Layout from '../app/components/layout';
import HeaderImage from '../app/components/common/HeaderImage';
import ConductMain from '../app/components/conduct/conduct.main';

const ConductPage = () => (
  <Layout page="code-of-conduct">
    <HeaderImage imageUrl="static/img/code-of-conduct-hero.jpg" />
    <ConductMain />
  </Layout>
);

export default ConductPage;
