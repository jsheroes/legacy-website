import CompMain from '../app/components/main';
import ConductHero from '../app/components/conduct';
import ConductMain from '../app/components/conduct/conduct.main';

const ConductPage = props => (
  <CompMain page="code-of-conduct">
    <ConductHero />
    <ConductMain />
  </CompMain>
);

export default ConductPage;
