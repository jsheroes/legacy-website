import Router from 'next/router';
import Layout from '../app/components/layout';
import SpeakerDetail from '../app/components/speakers/speakerDetail';

const Speakers = ({ url }) => {
  const speakerUrl = url.query.url;
  if (!speakerUrl) {
    Router.push('/#speakers');
  }

  return (
    <Layout>
      <SpeakerDetail speakerUrl={speakerUrl} />
    </Layout>
  );
};

export default Speakers;
