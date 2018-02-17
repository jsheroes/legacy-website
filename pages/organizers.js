import Layout from '../app/components/layout';
import OrganizersHeader from '../app/components/organizers';
import OrganizersMain from '../app/components/organizers/organizers.main';

const OrganizersPage = () => (
  <Layout page="organizers">
    <OrganizersHeader />
    <OrganizersMain />
  </Layout>
);

export default OrganizersPage;
