// import Router from 'next/router';
import Layout from '../app/components/layout';
import SpeakerDetail from '../app/components/speakers/speakerDetail';

const Speakers = (props) => {
  console.log('Speakers', props);
  return (
    <Layout page="speakers-page">
      <SpeakerDetail />
    </Layout>
  );
};

export default Speakers;
