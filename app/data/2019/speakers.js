export default [
  {
    name: 'simona',
    fullName: 'Simona Cotin',
    permalink: 'simona-cotin',
    firstName: 'Simona',
    reference: 'her',
    position: 'Senior Developer Advocate ',
    company: 'Microsoft',
    img: 'simona-cotin.jpg',
    twitter: 'https://twitter.com/simona_cotin',
    description:
      'Simona Cotin is a web developer with a passion for teaching. She spends most of her time tinkering with JavaScript in the cloud and sharing her experience with other developers at community events like meetups and conferences or online. As a Cloud Developer Advocate, Simona engages with the web community to help create a great developer experience with Azure. She loves shipping code to production and has built network data analytics platforms using Angular, Typescript, React, and Java.',
    talk: {
      title: 'Serverless can do that?!',
      description: `
      <p>As a frontend developer you might think - why would I even care about servers? Or lack thereof! 🤔 </p>
      <p>In this session we'll explore how empowering serverless is for the Javascript developer and how much we can already achieve by not reinventing the wheel. We'll also sprinkling a bit of serverless magic and learn how we can use it once we add it to our toolbox. </p>`,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        url: 'https://www.youtube.com/watch?v=zsxeA8kJBbo',
        name: 'Build progressive web apps with Angular',
      },
    ],
  },
  {
    name: 'lin',
    fullName: 'Lin Clark',
    permalink: 'lin-clark',
    firstName: 'Lin',
    reference: 'her',
    position: 'Principal Developer Advocate',
    company: 'Mozilla',
    img: 'lin-clark.jpg',
    twitter: 'https://twitter.com/linclark',
    description:
      'Lin Clark makes code cartoons. She`s also part of Mozilla’s Emerging Technologies group, where she works with the WebAssembly and Rust teams, and on JavaScript standardization. In previous lives, she worked at npm, was a core contributor to open source projects like Firefox’s developer tools, and contributed to HTML data standards.',
    talk: {
      title: `WebAssembly's Post-MVP Future`,
      description: `
      <p>If the web were a video game franchise, then WebAssembly would be its latest hero...</p>
      <p>During the first part of our journey, our hero completed the first quest—making it possible to play PC games and build applications like AutoCAD on the web. But this journey is far from over! Many a quest awaits; whole worlds are left to explore! The browser, and our hero’s current skill set, is just the beginning.</p>
      <p>In this talk, we’ll explore both charted and uncharted areas—from the JavaScript-rich lands of the browser, to the darkest reaches of the blockchain, to the airy heights of the cloud with CDNs, and more! And we’ll map out all of the features we need to unlock to take us to these new heights:</p>
      <ul>
        <li>Threading</li>
        <li>Garbage collection</li>
        <li>ES module integration and more!</li>
      </ul>`,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'A Cartoon Intro to Fiber @ React Conf 2017',
        url: 'https://www.youtube.com/watch?v=ZCuYPiUIONs',
      },
      {
        name: 'A Cartoon Intro to WebAssembly @ JSConf EU 2017',
        url: 'https://www.youtube.com/watch?v=HktWin_LPf4',
      },
    ],
  },
  {
    name: 'sarah',
    fullName: 'Sarah Drasner',
    permalink: 'sarah-drasner',
    firstName: 'Sarah',
    reference: 'her',
    position: 'Senior Developer Advocate',
    company: 'Microsoft',
    crazy: 'Bacon Santa',
    img: 'sarah-drasner.jpg',
    twitter: 'https://twitter.com/sarah_edo',
    github: 'https://github.com/sdras',
    website: 'https://sarahdrasnerdesign.com/',
    description:
      'Sarah Drasner is an award-winning Speaker, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops on Vue.js and Advanced SVG Animations. Sarah is formerly Manager of UX Design & Engineering at Trulia (Zillow).',
    talk: {
      title: 'The Future of Web Animation',
      description:
        "We talk a lot about how to animate on the web, and what's possible in browsers today, but where is animation heading? In this talk, we'll start with some bleeding edge techniques such as native-like page transitions with client side rendering, but then we'll push it further. The intersection of health and animation with biofeedback sensors, the future of 3d in the browser complete with interviews with people who are writing these specs... this talk will show that in terms of animation on the web, we're just getting started.",
      message: '',
    },
    workshop: null,
    previousTalks: [
      {
        name: 'Vue.js and Serverless',
        url: 'https://www.youtube.com/watch?v=0995H5BMHJE',
      },
    ],
    otherTalks: [
      {
        name: 'Animating Vue.js @ VueConf 2017',
        url: 'https://www.youtube.com/watch?v=gJDyhmL9O_E',
      },
    ],
  },
  {
    name: 'harry',
    fullName: 'Harry Roberts',
    permalink: 'harry-roberts',
    firstName: 'Harry',
    reference: 'him',
    position: 'Consultant Front-end Architect',
    img: 'harry-roberts.jpg',
    twitter: 'https://twitter.com/csswizardry',
    website: 'https://csswizardry.com/',
    description: `
    <p>
      With a client list including <b>Google</b>, <b>Unilever</b>,
      and the <b>United Nations</b>, Harry is an award-winning Consultant
      Front-end Architect who helps organisations and teams across the globe to
      plan, build, and maintain product-scale UIs.
    </p>

    <p>
      <b>A Google Developer Expert</b>, he writes on the subjects of CSS
      architecture, performance, and scalability at <a
      href="http://csswizardry.com">csswizardry.com</a>, develops and
      maintains <a href="https://github.com/inuitcss">inuitcss</a>,
      authored <a href="http://cssguidelin.es">CSS Guidelines</a>, and
      Tweets at <a href="http://twitter.com/csswizardry">@csswizardry</a>.
    </p>`,
    talk: {
      title: 'It’s My (Third) Party, and I’ll Cry if I Want To',
      description: `
      <p>Like it or not, a huge part of modern web development involves the use of third-party providers: fonts, analytics, ads, tracking, and more all have an impact of performance, and can leave us (or, more worryingly, our visitors) susceptible to performance degradation.</p>
      <p>In this talk, we’ll take a look at unruly or uninvited (third-)party guests: how to detect them, how to audit them, and how to manage them. We’ll also look at the different tools available to help us stress-test and quantify the overhead these third parties bring, and what that means for users and businesses alike.</p>
      `,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'FaCSSt—CSS and Performance @ Frontend United 2018',
        url: 'https://www.youtube.com/watch?v=2Rn8an74khk',
      },
      {
        name: 'Refactoring CSS Without Losing Your Mind @ WeAreDevelopers 2017',
        url: 'https://www.youtube.com/watch?v=fvTryZjGyg8',
      },
    ],
  },
  {
    name: 'heydon',
    fullName: 'Heydon Pickering',
    permalink: 'heydon-pickering',
    firstName: 'Heydon',
    reference: 'him',
    position: 'Freelance',
    img: 'heydon-pickering.jpg',
    twitter: 'https://twitter.com/heydonworks',
    website: 'http://www.heydonworks.com/',
    description:
      'Heydon is a freelance design consultant working with organizations like The Paciello Group, Smashing Magazine, Bulb Energy, and The BBC. He specializes in creating accessible components and design systems, and works with Vue, React, and plain JavaScript. He has written three books on inclusive design for the web. The last is a compendium of articles from the popular inclusive-components.design blog.',
    talk: {
      title: 'Plain Wrong?',
      description:
        'I love writing JavaScript. The trouble is, so does everyone else. When people aren`t writing JavaScript, they`re usually writing frameworks for writing JavaScript in JavaScript. In fact, most of the JavaScript that`s around these days seems to either be written for, or within, a JavaScript flavor like React, Vue, or Angular. Frameworks make writing your own code faster and more ergonomic, but they do not come without problems. Code written with Framework A depends on the environment Framework A provides in order to work — and this dependency often represents a lot of code to transmit, decompress, parse, and compile. What about "plain" JavaScript? Is it always naïve to think anything worthwhile can still be achieved just writing some straight-up code? It turns out this is a tricky question to answer, but there`s no doubt the little we do as JavaScripters is often done with much more than we need.',
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'Get Your Priorities Straight @ Frontend United 2018',
        url: 'https://www.youtube.com/watch?v=ediHVy0869c',
      },
      {
        name: 'Writing Less Damned Code @ BTConf 2016',
        url: 'https://www.youtube.com/watch?v=tzfHlEFd2Fk',
      },
    ],
  },
  {
    name: 'charlie',
    fullName: 'Charlie Gerard',
    permalink: 'charlie-gerard',
    firstName: 'Charlie',
    reference: 'her',
    position: 'Software Developer',
    company: 'ThoughtWorks',
    img: 'charlie-gerard.jpg',
    twitter: 'https://twitter.com/devdevcharlie',
    website: 'http://charliegerard.github.io/',
    description:
      'Charlie is a software developer at ThoughtWorks in Sydney. She is passionate about creative coding and building interactive prototypes mixing science, art and technology. She also spends time giving back to the community by mentoring new developers, contributing to open-source projects and speaking at events.',
    talk: {
      title: 'Machine learning for front-end developers',
      description: `<p>Machine learning can have some pretty complicated concepts to grasp if you’re not a data scientist. However, recent developments in tooling make it more and more accessible for developers and people with little or no experience.</p>
      <p>One of these advancements is the ability to now train and run machine learning algorithms and models in the browser, opening this world to front-end developers to learn and experiment.</p>
      <p>In this presentation, we will talk about the different applications, possibilities, tools and resources, as well as show a few examples and demos, so you can get started building your own experiments using machine learning in JavaScript.</p>`,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'Look mum, no hands! Mind control in JavaScript @ JSConf EU 2018',
        url: 'https://youtu.be/7KhFO-qCVyg',
      },
    ],
  },
  {
    name: 'jing',
    fullName: 'Hui Jing Chen',
    permalink: 'chen-hui-jing',
    firstName: 'Hui Jing',
    reference: 'her',
    position: 'Developer Advocate',
    company: 'Nexmo',
    img: 'chen-hui-jing.jpg',
    twitter: 'https://twitter.com/hj_chen',
    website: 'https://chenhuijing.com',
    github: 'https://github.com/huijing',
    description:
      'Hui Jing is a self-taught designer and developer with an inordinate love for CSS. Reducing lines of code in her web projects makes her extremely happy. She used to play basketball full-time and launched her web career during downtime between training sessions.',
    talk: {
      title: 'Web typography: a non-English perspective',
      description: `Typography was defined by Gerrit Noordzij as writing with prefabricated letters. More than half of the content on the web is in English even though native English speakers make up less than 5% of the world's population. English only has 26 letters, but writing systems across the world use many more letters and characters, many of which are laid out in different directions as well. This talk covers the intricacies of ensuring web fonts display and are laid out correctly regardless of language, and how some of these layouts can translate across writing systems for creative art direction on the web.`,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'The Web Is Not Just Left-to-Right @ JSConf EU 2018',
        url: 'https://www.youtube.com/watch?v=YpqKrVcth34',
      },
    ],
  },
  {
    name: 'jason',
    fullName: 'Jason Lengstorf',
    permalink: 'jason-lengstorf',
    firstName: 'Jason',
    reference: 'him',
    position: 'Developer Advocate',
    company: 'Gatsby',
    img: 'jason-lengstorf.jpg',
    twitter: 'https://twitter.com/jlengstorf',
    website: 'https://lengstorf.com',
    github: 'https://github.com/jlengstorf ',
    description:
      'Jason Lengstorf is a developer advocate, senior engineer, and occasional designer at Gatsby. He’s an advocate for building highly productive teams through better communication, well designed systems and processes, and healthy work-life balance, and he blogs about that sometimes. He lives in Portland, Oregon.',
    talk: {
      title: 'You Belong Here: How to Make Open Source More Open',
      description: `
      <p>Done well, open source is one of the highest-value targets for businesses these days. Companies like Facebook and Airbnb leverage OSS as a source of brand equity and recruiting, among other advantages. However, OSS is still uncomfortable for many companies — and even if they _do_ open source their tools, these projects often fail to launch — because they're missing the most important (and best) part of OSS: the community.</p>
      <p>Projects that survive in today's landscape have thriving communities that care deeply about the quality and advancement of open source _and_ the people using it. But open source can also be intimidating to newcomers, and occasionally unwelcoming. In this talk, learn how popular open source framework Gatsby has doubled down on community, including:</p>
      <ul>
      <li>Offering open pair programming hours</li>
      <li>Trusting _all_ contributors with merge access</li>
      <li>Sending free swag to contributors</li>
      <li>And much more!</li>
      </ul>
      <p>Learn how you can borrow our strategies to create a healthy, welcoming community for your open source projects, starting today!</p>
      `,
      message: '',
    },
    workshop: {
      title: 'Advanced Performance Tuning for React Applications',
      type: 'Full-Day Workshop',
      permalink: 'react',
      logo: 'react.png',
      description: `
      <p>Getting performance right is hard, even when we have the luxury of starting our apps from scratch. It’s even harder when the ideal crashes headlong into reality, and we need to improve the performance of existing apps, as is so often the case. In this workshop, Eli Fitch and Jason Lengstorf will lead you through the process of:</p>

      <ul>
      <li>Assessing an existing React app</li>
      <li>Diagnosing performance problems</li>
      <li>Prioritizing the fixes that will make the biggest impact</li>
      <li>Implementing performance fixes</li>
      </ul> 

      <p>During this full-day workshop, you’ll learn advanced techniques for improving the performance of React apps, including:</p>
      
      <ul>
      <li>Lazy loading resources & components (including React.lazy and Suspense)</li>
      <li>Leveraging Service Workers for performance</li>
      <li>Seamlessly preloading and prefetching assets</li>
      <li>Automatically optimizing images and fonts</li>
      <li>Mitigating the performance impact of third-party scripts</li>
      <li>Code splitting and bundle optimization</li>
      <li>Using psychology to make your app feel faster than it actually is</li>
      </ul> 
      
      <p>By the end of the workshop, you’ll be able to diagnose performance problems and solve them with a combination of modern and time-tested performance techniques. You’ll also learn how to weigh the trade-offs of implementing fixes to ensure that both your apps and your teams perform well. The tools added to your toolbox will continue to serve you, your team, and your users for years to come.</p>
      `,
      prerequisites: `
        <p>Intermediate React knowledge, Node/npm installed, Git installed, basic command line knowledge.</p>
      `,
      seats: 40,
      soldOut: true,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [
      {
        name:
          'GraphQL at Massive Scale as the Glue in IBM`s Microservice Architecture @ GraphQL Summit 2017',
        url: 'https://www.youtube.com/watch?v=T3FbZsYXi50',
      },
    ],
  },
  {
    name: 'guillaume',
    fullName: 'Guillaume Chau',
    permalink: 'guillaume-chau',
    firstName: 'Guillaume',
    reference: 'him',
    position: 'Core Team Member',
    company: 'Vue.js',
    img: 'guillaume-chau.jpg',
    twitter: 'https://twitter.com/Akryum',
    github: 'https://github.com/akryum',
    description: `Guillaume is a Vue.js Core Team member working on vue-cli, vue-devtools and vue-curated. He also created the integrations with Apollo GraphQL (vue-apollo) and Meteor (vue-meteor) to help developers build highly interactive and realtime Vue-powered apps, and he contributes to the ecosystem with tools like vue-virtual-scroller and v-tooltip.`,
    talk: {
      title: 'CLI x GUI',
      description:
        'While building Vue CLI 3, we wanted to make the developer experience better for everyone, with an accompanying graphical interface. Why and how?',
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: 'Introduction to Vue CLI 3 and its UI @ Vue.js Core Team Summit',
        url: 'https://www.youtube.com/watch?v=Cpc9AZg2KOM',
      },
    ],
  },
  {
    name: 'anjana',
    fullName: 'Anjana Vakil',
    permalink: 'anjana-vakil',
    firstName: 'Anjana',
    reference: 'her',
    position: 'Engineering Learning & Development Lead',
    company: 'Mapbox',
    img: 'anjana.jpg',
    github: 'https://github.com/vakila',
    twitter: 'https://twitter.com/AnjanaVakil/',
    website: 'vakila.github.io',
    description:
      "Anjana suffers from a debilitating case of curiosity, which led her from philosophy to English teaching to computational linguistics to software development. As Engineering Learning & Development Lead at Mapbox, she can usually be found in San Francisco; that is, when she's not speaking at events around the world, trying to share the joy of coding and advocate for a more diverse & accessible tech industry. Ask her about the Recurse Center, Outreachy, and Mozilla!",
    talk: {
      title: 'The universe in a single arrow: A live dive into the lambda calculus',
      description: `
        <p>You know that a tiny anonymous function, like a JS arrow function, can be useful when you’re feeling too lazy to think up a good name. But did you know that this humble little arrow can summon one of the most powerful & elegant abstractions in the history of computer science?</p>
        <p>The lambda calculus lets us represent our programs - all their logic and data - with nothing but pure, anonymous functions. Booleans, numbers, operators, control flow, data structures… an arrow can do it all! In this session we'll live-code our way to a deeper understanding & admiration of the computational power of the lambda, an abstraction fundamental to functional programming.</p>
      `,
      message: '',
    },
    workshop: null,
    previousTalks: [
      {
        url: 'https://www.youtube.com/watch?v=FmiQr4nfoPQ',
        name: 'Recursion, Iteration, and JavaScript: A Love Story',
      },
    ],
    otherTalks: [
      {
        url: 'https://www.youtube.com/watch?v=Pg3UeB-5FdA',
        name: 'Programming Across Paradigms @ GOTO 2017',
      },
      {
        url: 'https://www.youtube.com/watch?v=Wo0qiGPSV-s',
        name: 'Immutable data structures for functional JS @ JSConfEU 2017',
      },
    ],
  },
  {
    name: 'henry',
    fullName: 'Henry Zhu',
    permalink: 'henry-zhu',
    firstName: 'Henry',
    reference: 'him',
    position: 'Maintainer',
    company: 'Babel',
    img: 'henry-zhu.jpg',
    twitter: 'https://twitter.com/left_pad',
    github: 'https://github.com/hzoo',
    website: 'https://www.henryzoo.com/',
    description:
      'Henry is a maintainer of Babel, working full time on open source sustainability, and was previously at Behance/Adobe. He just released a podcast series called Hope In Source.',
    talk: {
      title: 'Maintainers Anonymous',
      description: `
        <p>Much of open source starts with scratching your own itch. It's possible that your project turns out to be useful for others. Soon you may find yourself responsible for a critical piece of the internet and are really excited.</p>
        <p>Later you realize you have no idea who is using it, find it hard to communicate to your users, are burdened with the ever -increasing workload, and desperate to find help. You discover that it's hard to let go or trust anyone else. Should you just make more tools? How do we even begin to start solving this problem?</p>
        <p>This talk will go into my experience of working on open source full time for the last year and the many issues faced: whether it's the burden of work, the issues of freedom, fundraising difficulties, and on top of that emotional well being. Let's talk about working to support maintainers personally, consistently, and in community.</p>
      `,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        name: `Maintainer's Virtue @ All Things Open 2018`,
        url: 'https://www.youtube.com/watch?v=6qaupQ0KnkU',
      },
    ],
  },
  {
    name: 'natalia',
    fullName: 'Natalia Tepluhina',
    permalink: 'natalia-tepluhina',
    firstName: 'Natalia',
    reference: 'her',
    position: 'Senior Frontend Engineer',
    company: 'Gitlab',
    img: 'natalia-tepluhina.jpg',
    twitter: 'https://twitter.com/N_Tepluhina',
    github: 'https://github.com/NataliaTepluhina',
    description: `<p>Natalia Tepluhina is a Frontend Developer based in Kyiv, Ukraine. She is a CTO of VueVixens, that creates and hosts workshops to teach Vue.js to under-represented people in a cool and fun way.</p>
      <p>Natalia is a constant learner and loves to share knowledge with other people. She is a conference speaker and author of articles on different topics related to Vue framework.</p>`,
    talk: {
      title: 'The Magic of RxJS 🧙',
      description: `RxJS is often considered as complicated but it's not true! It's just developed to deal with difficult asynchronous tasks. Let's try to learn this magic while building a simple game with RxJS.`,
      message: '',
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'jeffrey',
    fullName: 'Jeffrey Lembeck',
    permalink: 'jeffrey-lembeck',
    firstName: 'Jeff',
    reference: 'him',
    position: 'Engineering Manager',
    company: 'npm, inc.',
    img: 'jeffrey-lembeck.jpg',
    github: 'https://github.com/jefflembeck',
    twitter: 'https://twitter.com/jefflembeck/',
    description:
      'Jeff Lembeck is a Engineering Manager with npm, inc. He manages humans, thinks about code, talks a lot, and is the former lecturer for organizer of SeattleJS. When far away from a computer, Jeff seeks out oyster happy hours and longs for a hot tub boat to call home.',
    talk: {
      title: 'Oh, the Management Mistakes You Will Make!',
      description: `
      <p>Hark! Do you hear that commotion? There are rumors you'll receive a promotion. You're excited and you're scared, you might even start to shake - but do not fear, I'm hear to list the fantastic mistakes that you'll make.</p>
      <p>This talk breaks down the transition from being a Senior Engineer at a company to becoming a new manager. It should prepare you for some of the mistakes that you're bound to make and remind you that you're in good company.</p>`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [
      {
        url: 'https://www.youtube.com/watch?v=E7n7XThDewY',
        name: 'Moneyball for Performance Metrics @ CSSConf.Asia 2015',
      },
    ],
  },
  {
    name: 'tomasz',
    fullName: 'Tomasz Łakomy',
    permalink: 'tomasz-lakomy',
    firstName: 'Tomasz',
    reference: 'him',
    position: 'Senior Frontend Developer',
    company: 'OLX Group',
    img: 'tomasz-lakomy.jpeg',
    github: 'https://github.com/tlakomy',
    twitter: 'https://twitter.com/tlakomy/',
    description:
      'Tomasz is a Senior Frontend Developer at OLX Group. Tech speaker, egghead.io instructor, coorganiser of React Poznań Meetup. His interests include React, VR, AR, app performance and making cheesiest jokes known to mankind.',
    talk: {
      title: 'Sleeping well at night with cypress.io',
      description: `
      <p>Why are we afraid of releasing stuff to production on Friday evening? Mostly because it's hard to know if nothing is broken because manual testing takes time and automated testing was not reliable. (And we really want to go home)</p>
      <p>With cypress things are different. In this talk, we are going to cover how to start covering your app with e2e tests and showcase coolest features that cypress.io has to offer.</p>
      <p>Automated tests don't have to be boring, difficult to write and even harder to debug. We deserve to have tests we can count on, even when shipping stuff as soon as ASAP.</p>
      `,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'alejandro',
    fullName: 'Alejandro Oviedo',
    permalink: 'alejandro-oviedo',
    firstName: 'Alejandro',
    reference: 'him',
    position: 'Senior Software Engineer',
    company: 'Beamery',
    img: 'alejandro-oviedo.jpg',
    github: 'https://github.com/a0viedoa',
    twitter: 'https://twitter.com/a0viedoh/',
    description:
      'Alejandro is a developer who loves learning new things. He is passionate about education, electronics, Open Source, and community-driven events.',
    talk: {
      title: `You Don't Know Your Dependencies`,
      description: `If you’re building applications chances are your dependency tree is in the order of hundreds. That easily can scale up to at least a thousand for large applications (like popular OS projects Ghost or Keystone). Join me in my hindered journey to address a big elephant in the room: managing dependencies. Updating a dependency or following common practices shouldn’t have to be a mysterious thing. What’s the right thing to do in your package.json? Exact versions? Using a caret? What’s the reason behind lockfiles? What type of tooling is out there? I’ll present answers from my research to these common questions.`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'anna',
    fullName: 'Anna Backs',
    permalink: 'anna-backs',
    firstName: 'Anna',
    reference: 'her',
    position: 'Software Developer',
    company: 'codecentric AG',
    img: 'anna-backs.jpg',
    github: 'https://github.com/an-na-b',
    twitter: 'https://twitter.com/merelyAnna/',
    description:
      'Anna Backs is a software developer and IT-consultant. She is part of small team building an interactive 3D-control panel for managing the IoT devices in her company&#x27;s office building. In her free time she walks her dog and drinks coffee.',
    talk: {
      title: `How to build a house in 3D – A short introduction to BabylonJS`,
      description: `Who has not dreamed of creating something in 3D, or even better: 3D running in a browser?! We also had this dream, and during a hackathon in early 2018 we finally fulfilled it by using BabylonJS. We started to build an interactive control panel for managing all IoT devices in our office building. Having had no prior experience whatsoever, we got to know the framework by working with it and having to fix our own mistakes. In this talk we, will share our experiences using BabylonJS and show you how to get started with building 3D web applications. We will cover all the basics needed to implement a small 3D web app with BabylonJS.`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'christina',
    fullName: 'Christina Zenzes',
    permalink: 'christina-zenzes',
    firstName: 'Christina',
    reference: 'her',
    position: 'Software Developer',
    company: 'codecentric AG',
    img: 'christina-zenzes.jpg',
    github: 'https://github.com/chrizzzz',
    twitter: 'https://twitter.com/merelyChristina/',
    description:
      "Christina Zenzes is a consultant and software dev. She is part of a team that is developing an interactive control panel for managing all IoT devices in her company's office building. She likes to grow plants on her balcony, pet cats, cook, and eat.",
    talk: {
      title: `How to build a house in 3D – A short introduction to BabylonJS`,
      description: `Who has not dreamed of creating something in 3D, or even better: 3D running in a browser?! We also had this dream, and during a hackathon in early 2018 we finally fulfilled it by using BabylonJS. We started to build an interactive control panel for managing all IoT devices in our office building. Having had no prior experience whatsoever, we got to know the framework by working with it and having to fix our own mistakes. In this talk we, will share our experiences using BabylonJS and show you how to get started with building 3D web applications. We will cover all the basics needed to implement a small 3D web app with BabylonJS.`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'flaki',
    fullName: `Istvan Szmozsanszky 'Flaki'`,
    permalink: 'istvan-szmozsanszky',
    firstName: 'Flaki',
    reference: 'him',
    position: 'Trainer, Consultant, Community Manager',
    company: 'Skylark / Mozilla',
    img: 'flaki.png',
    website: 'https://musings.flak.is/',
    github: 'https://github.com/flaki',
    twitter: 'https://twitter.com/slsoftworks/',
    description:
      'István Szmozsánszky (or Flaki, for short) teaches JS &amp; frontend development while also works with Mozilla&#x27;s DevRel team on promoting modern web technologies. He loves JavaScript internals &amp; playing (quite literally!) with microcontrollers.',
    talk: {
      title: `Approaching the JavaScript Singularity`,
      description: `Developers are quick to complain about "JavaScript Fatigue", the perceived high volatility of libraries, tooling and the JavaScript language itself — yet very few look at these changes and additions as a whole. In this talk I will take some of JavaScript's new features with the biggest transformative potential (ES Modules, WebAssembly, the DOM-Node.js API convergence), and I try to showcase what they mean for web development and how, when used together, they are able to address various hurdles and complaints that have been plaguing Node.js & web development for a long time.`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'shelley',
    fullName: `Shelley Vohr`,
    permalink: 'shelley-vohr',
    firstName: 'Shelley',
    reference: 'her',
    position: 'Software Engineer',
    company: 'GitHub',
    img: 'shelley-vohr.png',
    website: 'http://codebyte.re',
    github: 'https://github.com/codebytere',
    twitter: 'https://twitter.com/codebytere/',
    description:
      'Shelley is a software engineer on the Electron team at GitHub who loves figuring out how to make things work. She&#x27;s passionate about clean code &amp; diving deep into tricky problems. She&#x27;s also a runner, explorer, and crossword puzzle fan powered by more coffee than a human should probably drink.',
    talk: {
      title: `Electron: The Event Loop Tightrope`,
      description: `On principle, Electron is designed to lower the barrier to entry for development and maintenance of cross-platform desktop development. However, beneath the surface of this seeming magic is a carefully engineered web of JavaScript concepts that need to connect in just the right way to make that magic possible. A JavaScript runtime uses a message queue, or event loop, in order to process messages. Each kind of message has an associated function which handles it, and both Node.js and Chromium, which Electron embeds, have different event loops which must be reconciled. This talk will discuss the principles of the event loop as well as the challenges and solutions that Electron faced and arrived at in order to make the synthesis of Node.js and Chromium in Electron possible. You&#x27;ll get a glimpse into the inner workings of three powerful open source projects, as well as how they leverage and utilize JavaScript for the benefit of users from beginner to expert.`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'bogdan-zaharia',
    fullName: 'Bogdan Zaharia',
    permalink: 'bogdan-zaharia',
    firstName: 'Bogdan',
    reference: 'him',
    position: 'Software Developer',
    company: 'Hootsuite',
    img: 'bogdan-zaharia.jpg',
    github: 'https://github.com/zaboco',
    twitter: 'https://twitter.com/zaboco/',
    description:
      'Developer, with a bias towards functional JavaScript, TypeScript and sometimes Elm.',
    talk: {
      title: `Taming UI complexity with Typed State Machines`,
      description: `
      <p>Managing state in UI apps is hard. Keeping a coherent mental model of it is even harder.</p>
      <p>Finite State Machines seem to offer a good abstraction of the way we interact with UIs, making states and transitions between them explicit, and thus easier to reason about.</p>
      <p>One of the nice things about FSMs is that only certain transitions are legal from each state. But is it possible to enforce that in code? It seems that, with some TypeScript magic, it is possible.</p>
      <p>In this talk, you'll be exposed to a new perspective on implementing FSMs in JS/TS and how it compares to libraries such as XState or Redux (not really a FSM, but similar). You'll also see how this new approach can be used in real apps, using various libraries, such as React, Vue, and others, some of them quite unexpected.</p>
      `,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'chris',
    fullName: 'Chris DeMars',
    permalink: 'chris-demars',
    firstName: 'Chris',
    reference: 'him',
    position: 'Front-End Developer',
    company: 'Tuft & Needle',
    img: 'chris-demars.jpeg',
    website: 'http://chrisdemars.com',
    github: 'https://github.com/chrisdemars',
    twitter: 'https://twitter.com/saltnburnem/',
    description: `Chris DeMars is a UI developer first, UX architect always, and Google Developer Expert working out of Detroit, Michigan. Chris is also an instructor, teacher assistant, and volunteer for the Ann Arbor chapter of Girl Develop It and co-organizer for the Ann Arbor Accessibility Group. Chris loves coming up with solutions for enterprise applications, which include modular CSS architectures, performance, and advocating for web accessibility. When he&#x27;s not working on making the web great and inclusive you can find him writing blog posts, and recording episodes of his podcast, Tales From The Script.`,
    talk: {
      title: `Believe in the Power of CSS`,
      description: `You know that song by Huey Lewis and the News, The Power of Love? "First time you feel it, it might make you sad." Might be how you feel about CSS right? What about the power of CSS? CSS has received a bad name as of late, but truth of the matter is that CSS is such a powerful piece of the front-end puzzle and you should really be excited for what's already here and what's to come! Who would have thought we could create magazine-style layouts with CSS grid? What about ruleset variable scoping with custom properties(CSS variables)? And last but not least, the pain of centering content horizontally and vertically which is now possible in three lines with flexbox! Let's talk about how awesome CSS is, and how we can restore our faith in one of the best things that makes the web amazing!`,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'daisy',
    fullName: 'Daisy Smith',
    permalink: 'daisy-smith',
    firstName: 'Daisy',
    reference: 'her',
    position: 'JavaScript Engineer',
    company: 'Domain',
    img: 'daisy-smith.jpg',
    website: 'https://daisymarie128.github.io',
    github: 'https://github.com/daisymarie128',
    twitter: 'https://twitter.com/daisysmells/',
    description: `Daisy is a JavaScript engineer at Domain, one of the leading real estate companies in Australia. With a passion for creative coding, she loves design, creativity and all things interactive. Besides being an engineer, she also likes to advocate for mental health`,
    talk: {
      title: `Blowing Bubbles on Mental Health - Hacking a Kid's Toy in JavaScript`,
      description: `
      <p>What if we took care of ourselves the same way we take care of our code?</p>
      <p>As developers, we spend large amounts of time and energy making sure we are building the best solutions and learning the latest tech, but significantly less time on taking care of ourselves and others. Physical health problems are often very obvious. Mental health issues can be much harder to detect in yourself and others, but is essential that our community focuses on improving how we talk about and respond to them.</p>
      <p>In this talk, I will share some personal experiences and lessons I've learnt about mental health, and suggest steps anybody can take to support those facing mental health issues. I will explain how we can best be supportive and break down the stigma that surrounds mental health.</p>
      `,
    },
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'till',
    fullName: 'Till Schneidereit',
    permalink: 'till-schneidereit',
    firstName: 'Till',
    reference: 'him',
    position: 'Senior Research Manager',
    company: 'Mozilla',
    img: 'till-schneidereit.png',
    twitter: 'https://twitter.com/tschneidereit/',
    description: `Till Schneidereit directs the WebAssembly tooling and runtime, and the Rust efforts at Mozilla. His team is responsible for Mozilla’s contributions to the Rust programming language; driving the Rust to WebAssembly compilation efforts; the Cranelift WebAssembly code generator; the Wasmtime WebAssembly runtime; and other projects around WebAssembly development and deployment. He’s also a delegate to the language standardization bodies for both JavaScript and WebAssembly.`,
    talk: null,
    workshop: null,
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'liran',
    fullName: 'Liran Tal',
    permalink: 'liran-tal',
    firstName: 'Liran',
    reference: 'him',
    position: 'Developer Advocate',
    company: 'Snyk',
    img: 'liran-tal.png',
    twitter: 'https://twitter.com/liran_tal',
    github: 'https://github.com/lirantal',
    description: `Liran Tal is a Developer Advocate at Snyk and a member of the Node.js Security working group. He is a JSHeroes ambassador, passionate about building communities and the open source movement and greatly enjoys pizza, wine, web technologies, and CLIs. Liran is also the author of Essential Node.js Security, a core contributor to OWASP NodeGoat project and loves to dabble about code, testing, and software philosophy.`,
    talk: null,
    workshop: {
      title: 'Integration Testing Heaven for Node.js Microservices',
      type: 'Half-Day Workshop',
      permalink: 'testing-microservices',
      logo: 'nodejs.png',
      description: `
      <p>Are you building a rich Node.js microservices deployment? Are you integrating a frontend UI with an API backend but only find out in production that the API contract is wrong?</p>
      <p>If you are integrating your Node.js microservices into the rest of your microservices deployment then you experienced by now that classical approaches to testing systems End-to-End do not scale well for microservices due to environment complexity, slowness, and expensive setup. The other approach of mocking your dependent services provide you with no confidence while deploying. </p>
      <p>If you relate to these problems you will find it extremely beneficial to participate in this workshop and learn how to implement a Consumer-Driven Contracts pattern for a lean way of testing your microservices with the open source Pact framework to ensure APIs don’t break when different teams deploy.</p>
      <p>We’ll review the required DevOps related flows and dive to a hands-on practical Consumer and Provider testing in Node.js to to build together a couple of API services that integrate together and ship to production in a confident manner and easy to reason about testing workflows.</p>
      <p>You can expect to learn about collaborating with other team members in the workshop, build a Node.js API, test it, work in an open source GitHub project workflow where you set up Pull-Requests, and a CI pipeline all by yourself to test a system before it’s being deployed.</p>
      `,
      prerequisites:
        'Basic JavaScript and a bit of Node.js although you can probably get by without Node.js too.',
      seats: 40,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'ben',
    fullName: 'Benedek Gagyi',
    permalink: 'benedek-gagyi',
    firstName: 'Ben',
    reference: 'him',
    position: 'Software Engineer',
    company: 'LogMeIn',
    img: 'benedek-gagyi.jpg',
    twitter: 'https://twitter.com/BenedekGagyi',
    description:
      'Ben is a software engineer, tinkering with javascript and css at LastPass. In general he enjoys: code, basketball and tea',
    talk: null,
    workshop: {
      title: 'Web Security for Frontend Engineers',
      type: 'Half-Day Workshop',
      permalink: 'security',
      logo: 'javascript.png',
      description: `
        <p>Web security may seem like a field that's scarily deep ... and it kind of is. The aim of this half day workshop is to clear up a few basic concepts and ideas that are necessary to get started in the field of security. The curriculum is tailored for frontend developers, with more accent on frontend specific attack vectors, but it can be useful for anyone.</p>
        <p>What we will cover</p>
        <ul>
        <li>Why is security important? Is awareness enough?</li>
        <li>OWASP top 10: the most important attack vectors.</li>
        <li>Exercises from both the attackers and the defenders point of view.</li>
        <li>The basics of cryptography and real world examples</li>
        </ul>
      `,
      prerequisites: '',
      seats: 20,
      soldOut: true,
      socialMedia: '',
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'sara',
    fullName: 'Sara Vieira',
    permalink: 'sara-vieira',
    firstName: 'Sara',
    reference: 'her',
    position: 'Developer',
    company: 'CodeSandbox',
    img: 'sara-vieira.jpg',
    twitter: 'https://twitter.com/NikkitaFTW',
    github: 'https://github.com/SaraVieira',
    website: 'https://iamsaravieira.com',
    description: `Sara is an international agent of JS Bullshit 🚀, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.`,
    talk: null,
    workshop: {
      title: 'Advanced Performance Tuning for React Applications',
      type: 'Full-Day Workshop',
      permalink: 'react',
      logo: 'react.png',
      description: `
      <p>Getting performance right is hard, even when we have the luxury of starting our apps from scratch. It’s even harder when the ideal crashes headlong into reality, and we need to improve the performance of existing apps, as is so often the case. In this workshop, Eli Fitch and Jason Lengstorf will lead you through the process of:</p>

      <ul>
      <li>Assessing an existing React app</li>
      <li>Diagnosing performance problems</li>
      <li>Prioritizing the fixes that will make the biggest impact</li>
      <li>Implementing performance fixes</li>
      </ul> 

      <p>During this full-day workshop, you’ll learn advanced techniques for improving the performance of React apps, including:</p>
      
      <ul>
      <li>Lazy loading resources & components (including React.lazy and Suspense)</li>
      <li>Leveraging Service Workers for performance</li>
      <li>Seamlessly preloading and prefetching assets</li>
      <li>Automatically optimizing images and fonts</li>
      <li>Mitigating the performance impact of third-party scripts</li>
      <li>Code splitting and bundle optimization</li>
      <li>Using psychology to make your app feel faster than it actually is</li>
      </ul> 
      
      <p>By the end of the workshop, you’ll be able to diagnose performance problems and solve them with a combination of modern and time-tested performance techniques. You’ll also learn how to weigh the trade-offs of implementing fixes to ensure that both your apps and your teams perform well. The tools added to your toolbox will continue to serve you, your team, and your users for years to come.</p>
      `,
      prerequisites: `
        <p>Intermediate React knowledge, Node/npm installed, Git installed, basic command line knowledge.</p>
      `,
      seats: 40,
      soldOut: true,
      socialMedia: ``,
    },
    previousTalks: [
      {
        name: 'The Dream of Styleguide Driven Development',
        link: 'https://www.youtube.com/watch?v=_XJFeSZV6FI',
      },
    ],
    otherTalks: [],
  },
  {
    name: 'carsten',
    fullName: 'Carsten Meier',
    permalink: 'carsten-meier',
    firstName: 'Carsten',
    reference: 'him',
    position: 'Web Developer',
    company: 'Peerigon GmbH',
    img: 'carsten-meier.jpg',
    twitter: 'https://twitter.com/peerigon',
    github: 'https://github.com/acidicX',
    description: `We make robots dance with web tech at Peerigon. Always living on the cutting edge.`,
    talk: null,
    workshop: {
      title: 'First Steps in WebAssembly & Rust',
      type: 'Full-Day Workshop',
      permalink: 'web-assembly',
      logo: 'web-assembly.png',
      description: `
      <p>We want to guide you through the maze that is WebAssembly (WASM)! After a short introduction to WASM and Rust, we will start with a well-known use case inside a single-page application (SPA): The user will upload an image and directly edit it (crop, rotate, scale, etc.). This can already lead to performance issues for the SPA when using large images. WebAssembly, with it's claim of near-native performance, should remedy this.</p>
      <p>Together and with the help of a provided boilerplate, we will hand over the typical image processing functions to a WebAssembly module written in Rust. Afterwards, we will continue to explore the modern web frontend toolchains and try to integrate WASM as well as possible into the build workflow.</p>
      <p>To wrap things up, depending on time and fancy, we can have a look at other use cases for WASM: "Yew" for example, a React "substitute" written in Rust, which enables DOM manipulation directly from WASM code.</p>
      `,
      prerequisites: 'JavaScript knowledge, ES6/ES2015 should be known.',
      seats: 20,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'simon',
    fullName: 'Simon Abbt',
    permalink: 'simon-abbt',
    firstName: 'Simon',
    reference: 'him',
    position: 'Web Developer',
    company: 'Peerigon GmbH',
    img: 'simon-abbt.jpg',
    twitter: 'https://twitter.com/peerigon',
    github: 'https://github.com/bytetyde',
    description: `We make robots dance with web tech at Peerigon. Always living on the cutting edge.`,
    talk: null,
    workshop: {
      title: 'First Steps in WebAssembly & Rust',
      type: 'Full-Day Workshop',
      permalink: 'web-assembly',
      logo: 'web-assembly.png',
      description: `
      <p>We want to guide you through the maze that is WebAssembly (WASM)! After a short introduction to WASM and Rust, we will start with a well-known use case inside a single-page application (SPA): The user will upload an image and directly edit it (crop, rotate, scale, etc.). This can already lead to performance issues for the SPA when using large images. WebAssembly, with it's claim of near-native performance, should remedy this.</p>
      <p>Together and with the help of a provided boilerplate, we will hand over the typical image processing functions to a WebAssembly module written in Rust. Afterwards, we will continue to explore the modern web frontend toolchains and try to integrate WASM as well as possible into the build workflow.</p>
      <p>To wrap things up, depending on time and fancy, we can have a look at other use cases for WASM: "Yew" for example, a React "substitute" written in Rust, which enables DOM manipulation directly from WASM code.</p>
      `,
      prerequisites: 'JavaScript knowledge, ES6/ES2015 should be known.',
      seats: 20,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'andrei',
    fullName: 'Andrei Antal',
    permalink: 'andrei-antal',
    firstName: 'Andrei',
    reference: 'him',
    position: 'Frontend and Angular Consultant',
    company: 'This Dot Labs',
    img: 'andrei-antal.jpeg',
    twitter: 'https://twitter.com/@andrei_antal',
    github: 'https://github.com/andrei-antal',
    description: `Andrei is an Angular consultant and a frontend developer for This Dot Labs. He's a javascript ecosystem enthusiast and community activist with a passion for building usable, accessible and highly performant web experiences. On the side he teaches javascript and Angular development in both enterprise and community workshops. In his free time he organizes the Bucharest Angular community - ngBucharest`,
    talk: null,
    workshop: {
      title: 'Advanced Observable Patterns in Angular apps with RxJS',
      type: 'Half-Day Workshop',
      permalink: 'angular',
      logo: 'angular.png',
      description: `
      <p>Reactive programming sounds scary and complicated, but in reality it’s just a very natural way of working with asynchronous data streams in your code. Observables are a representation of these streams that allow us to listen and react when new values are emitted. </p>
      <p>In the first part of the workshop we’ll take a deep dive in the world of Observables, explore the principles under which they operate, create our own, check out some common use-cases and see how they match up to Promises (the native way of handling async code in JavaScript). We’ll also have a look at the extensive and very powerful RxJS library that simplifies and enhances observables offering ways to create, transform combine and filter them. And we’ll wrap up with testing observables techniques, using ascii marble diagrams.</p>
      <p>RxJS and observables are also the backbone for the Angular framework and so for the second part of the workshop we’ll have a look at how Angular leverages the power of observables in it’s mechanisms to communicate data between components, routing, forms and http. Then we’ll look at some advanced patterns to manage complex async scenarios within an Angular application such as Observable Data Services, instant search, caching and others. For this second part of the workshop, some basic understanding of the main Angular concepts (modules, basics of creating and using components, communication, services, basic routing, basic http etc.) is needed in order to follow along with the examples.</p>
      <p>At the end of this session you will gain more confidence in programming with observables and leveraging their power in order to create truly reactive Angular (and not only) applications.</p>
      `,
      prerequisites:
        'Basic experience with Angular is required - modules, basics of creating and using components, services, basic routing, basic http etc. Also, since Angular is using TypeScript, understanding of basic TypeScript concepts will be required for the examples (types, classes, interfaces, generics, ES6 constructs) although explanations will be provided on request.',
      seats: 25,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'pfeiffer',
    fullName: 'Andrei Pfeiffer',
    permalink: 'andrei-pfeiffer',
    firstName: 'Andrei',
    reference: 'him',
    position: 'Code Designer',
    company: '[e-spres-oh]',
    img: 'andrei-pfeiffer.png',
    twitter: 'https://twitter.com/@pfeiffer_andrei',
    github: 'https://github.com/andreipfeiffer/',
    website: 'https://medium.com/@andrei.pfeiffer',
    description: `Andrei Pfeiffer is a "designer / developer hybrid", specialized in UI development, both on web and mobile. He organizes tim.js, the local JavaScript meetup in Timisoara/RO & revo.js conference. He's also a public speaker, trainer, mentor and technical writer.`,
    talk: null,
    workshop: {
      title: 'Custom React Native Modules for iOS and Android',
      type: 'Half-Day Workshop',
      permalink: 'react-native',
      logo: 'react-native.png',
      description: `
      <p>React Native already offers a wide range of native features, thanks to its built-in modules and a ton of open source libraries. But sometimes you might not find the exact solution you're looking for. The flexibility to build your own custom modules or extend existing libraries gives you a huge advantage in mobile apps development.</p>
      <p>Diving into native code might feel very scary for web developers, and this advanced workshop is the proper cure for this problem.</p>
      <p>In this advanced workshop we will:</p>
      <ul>
          <li>implement a simple native class (Swift for iOS & Java for Android)</li>
          <li>bridge it to React Native</li>
          <li>get access to it from JavaScript</li>
          <li>call native methods from JavaScript</li>
          <li>call JavaScript methods from native code</li>
      </ul>
      <p>At the end of this workshop, native modules shouldn't feel so scary anymore. You will also understand better how React Native actually works under the hood and how JavaScript communicates with native code.</p>
      `,
      prerequisites: `<p>This is an advanced workshop and all participants should feel comfortable with both React and React Native. You should be able to run the "Hello World" application both on Android emulators from Android Studio and iOS simulators from Xcode (applies for Apple users).</p>
          <ul>
            <li>Node.js v10+</li>
            <li>React Native Cli v2</li>
            <li>Android Studio v3.1+ & an emulator with API 26+</li>
            <li>Xcode 10.1 (for Apple users)</li>
          </ul>
          <p>NOTE: native mobile experience is not required, but basic knowledge would definitely help.</p>
        `,
      seats: 25,
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'bogdan',
    fullName: 'Bogdan Luca',
    permalink: 'bogdan-luca',
    firstName: 'Bogdan',
    reference: 'him',
    position: 'Dev&Ops',
    company: 'CodeSandbox.io',
    img: 'bogdan-luca.jpg',
    github: 'https://github.com/lbogdan/',
    twitter: 'https://twitter.com/lucabogdan',
    description:
      'Jumping between devops, backend and frontend development (sprinkled with unexpected gems like embedded development), with an innate curiosity for how things work behind the public API, after taking a sip of Vue.js about a year ago, I just couldn`t let it down. As I like to say, Vue.js is the framework that makes frontend development great again! So, along a few freelancing projects, I started helping people on the official Vue.js chat, learning a lot in the process - especially the hurdles someone starting with Vue.js goes through. Also, while looking for a way for people to quickly reproduce their issues, I accidentally stumbled upon CodeSandbox, and ended up contributing to it.',
    talk: null,
    workshop: {
      title: 'Advanced Component Patterns in Vue.js',
      type: 'Half-Day Workshop',
      permalink: 'vue',
      logo: 'vue.png',
      description: `
        <p>During this workshop we're gonna take a hands-on, test driven approach to implementing some best practice component patterns in Vue.js. We'll start with a few insights into how components are actually implemented in Vue.js, to get a better grasp of how they work and interact with each other. We'll continue with a short primer on how to test your components, as the hands-on part of the workshop will require you writing components that pass certain tests. We're then gonna directly tackle the patterns, which, depending on how fast we'll move and participants' interests, can be some or all of the following:</p>
        <ul>
        <li>parent <-> child communication using props and events</li>
        <li>using mixins to share common functionality between components</li>
        <li>using lazy-loading to load components only when they need to be displayed</li>
        <li>using v-model with form input components, and even with entire forms</li>
        <li>using functional components for improved rendering performance, and also to implement the popular React HOC (higher-order components) pattern</li>
        <li>using slots to customize how generalist components look like and also to manage layouts in multi-page applications</li>
        <li>using render functions instead of templates whenever we need more complex rendering logic</li>
        </ul>
        <p>At the end of the workshop participants will have a better understanding of how to leverage these patterns to create reusable components for more maintainable applications, and how to use tests to define the requirements and API of their components.</p>
      `,
      prerequisites: `Participants should be fairly familiar with Vue.js - having worked on a real-world application, or even played around with a simple one, like the always-present-in-all-tutorial Todos, is recommended. Having unsolved pain-points when dealing with components in Vue.js is a plus! :-)`,
      seats: 20,
      soldOut: false,
      socialMedia: '',
    },
    previousTalks: [],
    otherTalks: [],
  },
];
