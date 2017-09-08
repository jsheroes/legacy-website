import CompMain from '../app/components/main'
import NewsletterHero from '../app/components/newsletter'
import NewsletterMain from '../app/components/newsletter/newsletter.main'
import ScrollBtn from '../app/components/scroll-btn'

const NewsletterPage = props => (
  <CompMain>
    <NewsletterHero />
    <NewsletterMain />
    <ScrollBtn />
  </CompMain>
)

export default NewsletterPage
