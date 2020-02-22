import Layout from '../app/components/layout';
import HeaderImage from '../app/components/common/HeaderImage';
import MascotMain from '../app/components/mascot/mascot.main';

const MascotPage = () => (
  <Layout page="meet-ecma">
    <HeaderImage imageUrl="static/img/mascot/meet-ecma-header.png" />
    <MascotMain />
  </Layout>
);

export default MascotPage;
