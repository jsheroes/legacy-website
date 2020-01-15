import { stickerContestInProgress } from '../constants';

const news = [
  {
    title: 'Date and Agenda',
    content:
      'Join us on the <strong>23th</strong> and <strong>24th</strong> of April 2020 for 2 days of <strong>conference</strong>, with a kick-off day full of <strong>workshops</strong> on the <strong>22th</strong>. Feel free to send us your suggestions over <a href="https://twitter.com/jsheroes" target="_blank" rel="noreferrer noopener">Twitter</a>, we’d be happy to hear from you.',
  },
  {
    title: 'CFP Closed',
    content:
      'The CFP for 2020 is closed. We will announce our complete speaker lineup by the beginning of February 2020.',
  },
  {
    title: 'Sponsors',
    content:
      'Our Call for Sponsors is always open. Send us an email if you’re interested to join our mission in 2020 at <a href="mailto:welcome@jsheroes.io">welcome@jsheroes.io</a> and we’ll take it from there.',
  },
  {
    title: 'Tickets',
    content: `<div>If PayPal is not your preferred payment method, you can also pay by invoice.</div>
    <div>We also prepared two discounts: <b>15%</b> discount for Community Members, <b>20%</b> discount for Open Source Maintainers.</div>
    <div>For more information drop us a line at <a href="mailto:welcome@jsheroes.io">welcome@jsheroes.io</a> with your request, we’d be happy to help.</div>`,
  },
];

if (stickerContestInProgress) {
  news.splice(2, 0, {
    title: 'Sticker Contest',
    content: `<div>Announcing: JSHeroes Sticker Contest</div>
              <div>Enter the sticker design competition to win cool stuff or just to have fun!</div>
              <div>Find all the <a href="/sticker-contest">details here.</a></div>`,
  });
}

export default news;
