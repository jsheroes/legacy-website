import Layout from '../app/components/layout';
import NewsletterHero from '../app/components/newsletter';
import NewsletterMain from '../app/components/newsletter/newsletter.main';
import ScrollBtn from '../app/components/scroll-btn';

const NewsletterPage = () => (
  <Layout>
    <NewsletterHero />
    <NewsletterMain />
    <ScrollBtn />
  </Layout>
);

export default NewsletterPage;
