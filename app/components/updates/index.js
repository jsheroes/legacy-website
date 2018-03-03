import { Component } from 'react';
import Section from '../../components/common/section';


const newsData = [
  {
    title: 'Date and Venue ',
    content: 'Join us on 18-20 April 2018 in Cluj Napoca, Romania at Grand Hotel Italia for 1 day of workshops and 2 days of conference. Feel free to send us your suggestions over <a href="https://twitter.com/jsheroes" target="_blank" rel="noreferrer noopener">Twitter</a>, we’d be happy to hear from you.',
  },
  {
    title: 'Sponsors',
    content: 'Our Call for Sponsors is always open. Send us an email if you’re interested to join our mission in 2018 at <a href="mailto:welcome@jsheroes.io">welcome@jsheroes.io</a> and we’ll take it from there.',
  },
  {
    title: 'Volunteers',
    content: 'Passionate community members: Join the JSHeroes organizing crew! Get in touch and let us know what you’d like to contribute with.',
  },
  {
    title: 'Tickets',
    content: 'If PayPal is not your preferred payment method, you can also pay by invoice. Drop us a line at <a href="mailto:contact@jsheroes.io">contact@jsheroes.io</a> with your request, we’d be happy to help.',
  },
  {
    title: 'Adopt a Javascripter',
    content: `If you want to be &quot;adopted&quot; by one of our <span className="sticky-words">Cluj Javascripters</span> during the <span className="sticky-words">JSHeroes conference</span>, you can use our&nbsp;
      <a title="Adopt a Javascripter couch-surfing program" href="/adopt-a-jser">
        <span className="sticky-words">Adopt a Javascripter</span> <span className="sticky-words">couch-surfing program</span>
      </a>`,
  },
];


class Updates extends Component {
  constructor() {
    super();
    this.state = {
      activeNews: 0,
    };
  }

  render() {
    const news = newsData.map((item, index) => {
      const activeCss = index === this.state.activeNews ? 'active-news' : 'news-item';
      return (
        <li className={activeCss} onClick={() => this.setState({ activeNews: index })} key={item.title}>
          <strong>{ item.title }</strong>
        </li>
      );
    });
    const content = newsData[this.state.activeNews].content;
    return (
      <Section>
        <div className="wrapper">
          <h1>News</h1>
          <ul>
            { news }
          </ul>
          <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <style jsx global >{`
        .wrapper {
          margin: 100px auto;
          text-align: center;
          max-width: 1100px;
        }
        .wrapper p {
          margin-bottom: 20px;
        }
        .wrapper a {
          font-weight: bold;
        }

        .wrapper h1 {
          margin: 50px 0;
          color: #0098ff;
        }

        @media( min-width: 601px ) {
          .wrapper ul {
            display: flex;
            justify-content: space-around;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid lightgrey;
          }
          .active-news {
            position: relative;
            color: black;
            display: inline-block;
            text-decoration: none;
          }
          .active-news::before {
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid lightgray;
            bottom: -20px;
            left: 40%;
            position: absolute;
            display: block;
            content:''
          }
          .active-news::after {
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid white;
            bottom: -19px;
            left: 40%;
            position: absolute;
            display: block;
            content:''
          }
          .news-item {
            color: #0098ff;
            display: inline-block;
            text-decoration: none;
          }
        }

        @media(max-width: 600px ) {
         
          .wrapper ul {
            display: inline-block;
          }
          
          .wrapper .content {
            margin-top: 20px;
          }
      
          .active-news {
            padding: 10px 10px;
            position: relative;
            color: black;
            display: inline-block;
            text-decoration: none;
            border-bottom: 1px solid lightgray;
          }

          .active-news::before {
            width: 0; 
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid lightgray;
            bottom: -10px;
            left: 40%;
            position: absolute;
            display: block;
            content:''
          }
          .active-news::after {
            width: 0; 
            height: 0; 
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid white;
            bottom: -9px;
            left: 40%;
            position: absolute;
            display: block;
            content:''
          }
          .news-item {
            padding: 10px 10px;
            color: #0098ff;
            display: inline-block;
            text-decoration: none;
            border-bottom: 1px solid lightgrey;
          }
        }
      `}</style>
      </Section>
    );
  }
}


export default Updates;
