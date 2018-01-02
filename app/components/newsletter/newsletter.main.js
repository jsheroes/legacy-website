import Link from 'next/link';
import Section from '../../components/common/section';
import { styles, mediaQueries } from '../../constants';

const NewsletterMain = () => (
  <Section section={{ style: { backgroundColor: styles.mainColor3 } }}>
    <div className="newsletter-main">
      <div className="row">
        <div className="central-container text-center">
          <h5>Hello #JSHeroes, and welcome on board</h5>
          <h5>@JSHeroes 2018 ✨🚀✨✨</h5>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="central-container">
          <p>
            This conference is a not-for-profit community event run by a team
            of volunteers from the Cluj Javascripters community. 2017 is the
            first year when this amazing conference is taking place. It’s one
            of our dreams and the highpoint of our active community. We’re a
            bit crazy but at the end of the day, it’s all worth it :)
          </p>
          <p>Here&apos;s some general information about the event:</p>
        </div>
      </div>

      <div className="row">
        <div className="central-container">
          <br />
          <br />
          <h6>Date & Venue 🗓️🗺️</h6>
          <p>
            JSHeroes 2017 will take place on June 8th and 9th (Thursday and
            Friday) at
            {' '}
            <Link href="https://www.google.ro/maps/place/Grand+Hotel+Italia/@46.7524816,23.6058735,15z/data=!4m5!3m4!1s0x0:0xc5070934d476fab6!8m2!3d46.7524816!4d23.6058735">
              <a target="_blank"><strong>Grand Hotel Italia</strong></a>
            </Link>
            {' '}
            in Cluj-Napoca. It is a one-track conference and we have rented the
            space from the hotel&apos;s ground floor, where there’s a spacious
            conference room and a large hallway and you can enjoy the technical
            booths and the conference registration.
          </p>

          <br />
          <br />
          <h6>Travel...  ✈️🚆🚗</h6>
          <p>
            If you&apos;re joining us from around Europe, your easiest option to get
            here fast is a WizzAir connection.
          </p>
          <p>
            This also applies for travelling from within the country - Iasi.
            If you&apos;re from Bucharest, we recommend you take BlueAir - so that
            your seat will actually have some space for your legs. If you&apos;re
            joining from Timisoara or Budapest, the train is a comfortable
            (but quite expensive) option, but you can also drive here.
          </p>
          <p>
            For travelling inside Cluj-Napoca, we definitely recommend
            {' '}
            <Link href="https://www.getpony.ro/">
              <a target="_blank"><strong>Pony car sharing</strong></a>
            </Link>.
          </p>

          <br />
          <br />
          <h6>...and Accomodation 🛏️</h6>
          <p>
            If you want to be &apos;adopted&apos; by one of our Cluj JavaScripters during
            the JSHeroes conference (at least from Wednesday afternoon to
            Saturday morning, but possible more days if you wish to visit
            Cluj-Napoca), you can use our &quot;Adopt a JavaScripter&quot; couch-surfing
            program. We will pair you up with a host that we think is ok for
            you, according to the info you filled in the application forms.
          </p>
          <p>
            Apply here if you want to
            {' '}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdfCJJ2cPRuyLbCnTJxZ3BvZWsFr6rXnr225KJ7qm1stlCaQg/viewform?c=0&w=1">
              <a target="_blank"><strong>be a guest</strong></a>
            </Link>
            {' '}
            or, if you&apos;re from Cluj-Napoca - apply here and
            {' '}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSca6Pf5M5w6BG09qu9iAooLkT9IV57Xrjr_CNnhFi0GKlu2FA/viewform?c=0&w=1">
              <a target="_blank"><strong>be a host</strong></a>
            </Link>.
          </p>
          <p>
            We also recommend finding an apartment through Airbnb or look for a
            hostel  - but hurry, it&apos;s the Transilvania International Film
            Festival time and the accommodation can be harder to find, than
            usual. And
            {' '}
            <Link href="http://www.hotelbiscuit.ro/">
              <a target="_blank"><strong>this</strong></a>
            </Link>
            {' '}
            really homey hotel (called Biscuit) is also ideally located - close
            both to the conference venue and to the city center - and they
            offer a 10% discount for JSHeroes participants.
          </p>

          <br />
          <br />
          <h6>Speakers, Topics, Language 🎙️</h6>
          <p>
            JSHeroes unites top international speakers from
            🇩🇰 🇺🇸 🇷🇴 🇮🇱 🇮🇳 🇨🇭 🇭🇺 🇫🇷 🇳🇴 Throughout the two
            days of conference, they will talk about the latest trends in the
            world of JavaScript and Web Development. We have designed an agenda
            that is well balanced and targets the entire audience, including
            the people with extensive knowledge and experience.
          </p>
          <p>
            See the
            {' '}
            <Link href="/#speakers">
              <a target="_blank"><strong>full lineup</strong></a>
            </Link>
            {' '}
            and
            {' '}
            <Link href="/#schedule">
              <a target="_blank"><strong>schedule</strong></a>
            </Link>
          </p>
          <p>
            We are committed to tackle diverse topics and flavors from the
            JavaScript ecosystem, so all the speakers’ proposals went through a
            complete analysis.
          </p>
          <p>
            All talks are in English. We have no live streaming of the talks.
          </p>

          <br />
          <br />
          <h6>Catering 🍲</h6>
          <p>
            There is premium catering lunch on both days (vegan options
            available) and coffee breaks. We definitely don&apos;t want you to run
            around all hungry and decaffeinated, throughout the day, so the
            lunch and coffee breaks are included in the ticket price. For
            lunch, you can expect a healthy meal with various options.
            It includes vegetarian, vegan and gluten-free options.
          </p>

          <br />
          <br />
          <h6>Code of Conduct 🤝</h6>
          <p>
            All attendees, speakers, sponsors and volunteers at JSHeroes are
            required to agree with our
            {' '}
            <Link href="/code-of-conduct">
              <a target="_blank"><strong>Code of Conduct</strong></a>
            </Link>
            . As organisers, Cluj JavaScripters will enforce this code
            throughout the event. We expect cooperation from all of you to
            help ensure a safe environment for everybody.
          </p>

          <br />
          <br />
          <h6>Tickets 🎟️</h6>
          <p>
            You should have received your ticket in your email inbox. Please
            make sure you have your full name registered and that your ticket
            info is correct. You can also easily change your ticket details
            by accessing it directly from your email.
          </p>
          <p>
            We have a few tickets left for your JavaScript friends and
            colleagues. All the Early Birds are sold out but at the moment we
            still have some Reasonably Early Bird Tickets available.
          </p>

          <br />
          <br />
          <h6>
            Visit Cluj-Napoca in June 🍒 - it&apos;s the best time of the year!
          </h6>
          <p>
            Make sure you plan some time for movies, since you&apos;ll be visiting
            Cluj-Napoca during the
            {' '}
            <Link href="http://tiff.ro/en">
              <a target="_blank">
                <strong>Transilvania International Film Festival</strong>
              </a>
            </Link>
            {' '}
            (2-11 June). Check their movies and parties program and book your
            tickets in advance.
          </p>
          <p>
            There&apos;s also other activities and places to visit in
            {' '}
            <Link href="http://www.visitclujnapoca.ro/en/">
              <a target="_blank"><strong>Cluj-Napoca</strong></a>
            </Link>
            {' '}
            and in
            {' '}
            <Link href="https://www.lonelyplanet.com/romania/transylvania">
              <a target="_blank"><strong>Transylvania</strong></a>
            </Link>
            {' '}
            so we recommend that you definitely take a few days to look around.
          </p>

          <br />
          <br />
          <h6>Keep updated on our latest conference news 🔊</h6>
          <p>
            We send two Newsletters to each participant: this one, plus another
            - right before the event, to let everyone know of all registration
            details and other relevant information.
          </p>

          <br />
          <br />
          <h6>So, until, then, let&apos;s keep in touch:</h6>
          <p>
            We post all the major updates on our
            {' '}
            <Link href="https://www.facebook.com/jsheroes">
              <a target="_blank"><strong>Facebook page</strong></a>
            </Link>
            , but in all truthfulness, we love
            {' '}
            <Link href="https://twitter.com/jsheroes">
              <a target="_blank"><strong>Twitter</strong></a>
            </Link>
            {' '}
            so much more. So maybe you can join us on both :p
            Use the hashtag #jsheroes to tweet about the conference, connect
            with other attendees and share your photos when the big days
            arrive. You can also check the Facebook
            {' '}
            <Link href="https://www.facebook.com/events/259539194509196/">
              <a target="_blank"><strong>event</strong></a>
            </Link>
            {' '}
            and
            {' '}
            <Link href="https://www.meetup.com/Cluj-Javascripters/events/239301886/">
              <a target="_blank"><strong>Meetup</strong></a>
            </Link>
            {' '}
            to mark your attendance and see who else is attending.
          </p>

          <br />
          <p>OK, that&apos;s all, folks!</p>
          <p>See you pretty soon! ;)</p>
          <p>Cheers,</p>
          <p>Cluj JavaScripters</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>

    <style jsx>{`
      * {
        box-sizing: border-box;
      }
      
      :after,
      :before {
        box-sizing: border-box;
      }
      
      .row {
        display: table;
        width: 100%;
      }
      
      .row:before,
      .row:after {
        content: " ";
        display: table;
      }
      
      .row:after {
        clear: both;
      }
      
      .newsletter-main {
        padding-top: 140px;
      }
      
      .central-container {
        width: 100%;
        margin: 0 auto;
        position: relative;
        text-align: center;
      }
      
      .text-center {
        text-align: center !important;
      }
      
      h5 {
        font-size: 28px;
        font-weight: 500;
        line-height: 32px;
        color: #111;
        margin: 0 auto 30px;
        text-align: center;  
      }
      
      h6 {
        font-size: 20px;
        color: ${styles.mainColor7};
        font-weight: 700;
        margin: 0 auto 30px;
        line-height: 1.1;
      }
      
      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 0;
        border: 0;
        border-top: 1px solid #eee;
      }
      
      p {
        font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
        font-weight: 400;
        font-style: normal;
        font-size: 21px;
        line-height: 1.58;
        letter-spacing: -.003em;
        color: ${styles.mainColor7};
        margin: 0 0 10px;
      }
      
      a {
        color: ${styles.mainColor5};
        fill: ${styles.mainColor5};
      }

      ul {
        list-style-type: none;
        margin: 50px auto 20px;
      }
      
      li {
        display: inline-block;
        margin: 0 25px 10px 0;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
      }
      
      li a {
        font-size: 60px;
        text-decoration: none;
      }
      
      li:nth-child(2) a {
        color: #3b5998;
      }
      
      li:nth-child(3) a {
        color: #323131;
      }
      
      li:nth-child(4) a {
        color: #e51937;
      }
      
      .section-padding {
        padding: 140px 0;
      }
      
      @media (max-width: 479px) { 
        p {
          font-size: 18px;
          line-height: 1.58;
          letter-spacing: -.004em;
        }
      }
      
      @media (max-width: ${mediaQueries.S}) {
        h5 {
          font-size: 24px;
        }
        
        .newsletter-main {
          padding-top: 62px;
        }
        
        .section-padding {
          padding: 62px 0;
        }        
      }
      
      @media (min-width: ${mediaQueries.S}) and (max-width: ${mediaQueries.L}) {
        h5 {
          font-size: 26px;
        }
                
        .newsletter-main {
          padding-top: 70px;
        }
        
        .section-padding {
          padding: 70px 0;
        }
      }

      @media (min-width: ${mediaQueries.L}) {
        .central-container {
          width: 66.7%;
        }
      }

      @media (min-width: ${mediaQueries.XL}) {
        .central-container {
          text-align: left;
        }
      }
    `}</style>
  </Section>
);

module.exports = NewsletterMain;
