import Layout from '../app/components/layout';
import SpeakerDetail from '../app/components/speakers/speakerDetail';
import Helpers from '../app/helpers';
import store from '../app/data';

const Speakers = ({ speaker }) => (
  <Layout page="speaker">
    <SpeakerDetail speaker={speaker} />
  </Layout>
);

Speakers.getInitialProps = async ({ res, query }) => {
  const year = query.year || '2020';
  const speaker = store[`data${year}`].speakers.find(s => s.permalink === query.name);
  if (!speaker) {
    Helpers.redirectTo({ res, path: '/' });
  }

  return { speaker, year };
};

export default Speakers;
