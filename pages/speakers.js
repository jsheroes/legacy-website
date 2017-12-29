import Layout from '../app/components/layout';
import SpeakerDetail from '../app/components/speakers/speakerDetail';
import Helpers from '../app/helpers';
import speakers from '../app/data/speakers';

const Speakers = ({ speaker }) => (
  <Layout>
    <SpeakerDetail speaker={speaker} />
  </Layout>
  );

Speakers.getInitialProps = async ({ res, query }) => {
  const speaker = speakers.find(s => s.permalink === query.name);
  if (!speaker) {
    Helpers.redirectTo(res, '/');
  }

  return { speaker };
};

export default Speakers;
