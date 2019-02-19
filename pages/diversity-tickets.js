import Layout from '../app/components/layout';
import HeaderImage from '../app/components/common/HeaderImage';
import DiversityTickets from '../app/components/diversity';

const DiversityTicketsPage = () => (
  <Layout page="diversity-tickets">
    <HeaderImage imageUrl="static/img/diversity.jpg" />
    <DiversityTickets />
  </Layout>
);

export default DiversityTicketsPage;
