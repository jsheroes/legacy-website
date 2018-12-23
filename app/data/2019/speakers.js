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
      title: 'TBA',
      description: '',
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
      title: 'TBA',
      description: '',
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
      title: 'TBA',
      description: '',
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
      title: 'TBA',
      description: '',
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
    name: 'sia',
    fullName: 'Sia Karamalegos',
    permalink: 'sia-karamalegos',
    firstName: 'Sia',
    reference: 'her',
    position: 'Founder and Lead Developer',
    company: 'Clio + Calliope',
    img: 'sia-karamalegos.jpg',
    twitter: 'https://twitter.com/thegreengreek',
    github: 'https://github.com/siakaramalegos',
    website: 'https://siakaramalegos.github.io/',
    description: `Sia Karamalegos is a developer, international conference speaker, and writer. She co-organizes #FrontEndParty, gnocode, and NOLA Hack Night in the New Orleans area. She is the founder and lead developer for Clio + Calliope Web Development and was recognized in the Silicon Bayou 100, the 100 most influential and active people in tech and entrepreneurship in Louisiana. When she's not coding, speaking, or consulting, Sia likes to design crochet patterns and dabble in charcoal figure drawing. She's also an avid endurance athlete.`,
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
      socialMedia: ``,
    },
    previousTalks: [],
    otherTalks: [],
  },
  {
    name: 'nir',
    fullName: 'Nir Kaufman',
    permalink: 'nir-kaufman',
    firstName: 'Nir',
    reference: 'him',
    position: 'Principal frontend developer',
    company: '500Tech',
    img: 'nir-kaufman.jpg',
    twitter: 'https://twitter.com/nirkaufman',
    github: 'https://github.com/nirkaufman',
    description: `Google Developer Expert in web technologies, public speaker and trainer, tech community activist ( ReactNYC ). Author of books about Front-end development, and the founder of the ‘’Frontend Band” - The first open-source rock n’ roll band! Principal Frontend consultant at 500Tech, a front-end consultancy in NYC.`,
    talk: null,
    workshop: {
      title: 'Build JavaScript Desktop Application with Electron',
      type: 'Half-Day Workshop',
      permalink: 'electron',
      logo: 'electron.png',
      description: `On this workshop we will dive into the world of Desktop application development with web technologies, using Electron - the open source framework by Github.
You will learn everything you need to know for design, build, debug, package and distribute cross-platform desktop applications that runs on Windows, Mac OS and linux.
By the end of this day, you will have the practical knowledge to build and ship your first Desktop application.`,
      prerequisites: 'Experience with JavaScript and web technologies',
      seats: 40,
      socialMedia: ``,
    },
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
    twitter: 'https://twitter.com/nirkaufman',
    github: 'https://github.com/nirkaufman',
    description: `Google Developer Expert in web technologies, public speaker and trainer, tech community activist ( ReactNYC ). Author of books about Front-end development, and the founder of the ‘’Frontend Band” - The first open-source rock n’ roll band! Principal Frontend consultant at 500Tech, a front-end consultancy in NYC.`,
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
    img: 'andrei-antal.jpeg',
    twitter: 'https://twitter.com/@andrei_antal',
    github: 'https://github.com/andrei-antal',
    description: ``,
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
        'Basic experience with Angular is required - modules, basics of creating and using components, services, basic routing, basic http etc. Also, since Angular is using TypeScript, understanding of basic TypeScript concepts will be required for the examples (types, classes, interfaces, generics, ES6 constructs) although explanation will be provided on request.',
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
