import React from 'react';

import Link from '../common/link';

const NavItem = ({ url, children }) => (
  <Link href={url}>
    <span className="link-label">{children}</span>
    <style jsx>
      {`
        .link-label {
          text-transform: capitalize;
        }
      `}
    </style>
  </Link>
);

export default NavItem;
