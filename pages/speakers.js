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
  const speaker = store[`data${store.currentYear}`].speakers.find(s => s.permalink === query.name);
  if (!speaker) {
    Helpers.redirectTo({ res, path: '/' });
  }

  return { speaker };
};

export default Speakers;
