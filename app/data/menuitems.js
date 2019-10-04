/*
Supported types of menu items:

  1. Simple menu items
  {
    id: 1,
    url: "/url",
    label: "Label"
  },

  2. Nested menu items
  {
    id: 1,
    label: "Label"
    links: [
      {
        id: 1.1,
        url: "/url1",
        label: "Label1"
      },
      {
        id: 1.2,
        url: "/url2",
        label: "Label2"
      }
    ]
  }

  3. Menu items (or sub items) that should only be visible on certain routes
  {
    id: 1,
    url: "/url",
    label: "Label"
    whitelist: ['/certain-route', /^\/everything/underneath/]
  }

  4. Menu items (or sub items) that should not be visible on certain routes
  {
    id: 1,
    url: "/url",
    label: "Label"
    blacklist: ['/certain-route', /^\/nothing/underneath/]
  }

  Menu items can have both a whitelist and a blacklist. When determining if an item should be visible or not, the blacklist always overrides the whitelist.
*/

export default [
  {
    id: 1,
    url: '/#speakers',
    label: 'speakers',
    blacklist: ['/2017', '/2018'],
  },
  {
    id: 1.1,
    url: '#speakers',
    label: 'speakers',
    whitelist: ['/2017', '/2018', '/2019'],
  },
  {
    id: 2,
    url: '/#schedule',
    label: 'schedule',
    blacklist: ['/2017', '/2018', '/2019', '/2020'],
  },
  {
    id: 2.1,
    url: '#schedule',
    label: 'schedule',
    whitelist: ['/2017', '/2018', '/2019'],
  },
  // {
  //   id: 3,
  //   url: '/#mission',
  //   label: 'mission',
  // },
  {
    id: 4,
    url: '/#organizers',
    label: 'organizers',
    blacklist: ['/2017', '/2018', '/2019'],
  },
  {
    id: 4.1,
    url: '#sponsors',
    label: 'sponsors',
    whitelist: ['/2017', '/2018', '/2019'],
  },
  {
    id: 5,
    url: '/#contactForm',
    label: 'contact',
  },
  {
    id: 7,
    label: 'Back to 2020',
    url: '/',
    whitelist: ['/2017', '/2018', '/2019'],
  },
];
