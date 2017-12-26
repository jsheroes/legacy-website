import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import schedule from '../app/data/schedule';
import speakers from '../app/data/speakers';
import { styles } from '../app/constants';

const Workshop = ({ url }) => {
  const workshopName = url.query.name;
  if (!workshopName) {
    Router.push('/');
  }

  const workshops = schedule[0].activities;
  const workshop = workshops.find(w => w.permalink === workshopName);
  const speaker = speakers.find(s => s.permalink === workshop.speakerRef);

  return (
    <Layout>
      <Head>
        <title>{ workshop.title } by { speaker.fullName }</title>
      </Head>
      <Section>
        <div className="row workshop-details">
          <div className="col-md-3 side">
            <img
              className="tech-image"
              src={`/static/img/technologies/${workshop.logo}`}
              alt={workshop.title}
            />
            <div className="visible-md visible-lg">
              <div className="join">
                <div>Are you interested in <strong>{ speaker.firstName }</strong>`s workshop?</div>
                <div>Join { speaker.reference } at JSHeroes!</div>
              </div>

              <a
                href="https://ti.to/cluj-javascripters/jsheroes2018"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Buy your Ticket
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <h1>{ workshop.title } with { speaker.fullName }</h1>
            <strong>Curricula</strong>
            <div dangerouslySetInnerHTML={{ __html: workshop.description }} />
            <strong>Prerequisites</strong>
            <div dangerouslySetInnerHTML={{ __html: workshop.prerequisites }} />
            <strong>About the trainer</strong>
            <div dangerouslySetInnerHTML={{ __html: speaker.description }} />
            <Link href={`/speakers/${speaker.permalink}`}>
              <button className="button">See More</button>
            </Link>
          </div>
        </div>
        <style jsx>{`
          h1 {
            color: ${styles.mainColor6};
            margin-bottom: 20px;
          }

          h1, h2 {
            font-size: 24px !important;
          }
    
          h3, h4 {
            font-size: 18px !important;
          }

          .workshop-details {
            margin-top: 120px;
            margin-bottom: 50px;
          }

          .tech-image {
            max-width: 200px;
            display: block;
            margin: auto;
          }

          .join {
            text-align: center;
            margin: 20px 0;
          }

          .side .button {
            padding: 10px;
            max-width: 200px;
            margin: auto;
            letter-spacing: 2px;
            text-decoration: none;
          }
        `}</style>
      </Section>
    </Layout>
  );
};

export default Workshop;
