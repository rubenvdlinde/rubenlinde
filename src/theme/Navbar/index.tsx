import React, { useEffect } from 'react';
import Navbar from '@theme-original/Navbar';
import { useLocation } from '@docusaurus/router';

export default function NavbarWrapper(props) {
  const location = useLocation();
  const isHomepage =
    location.pathname === '/' || location.pathname === '/rubenlinde/';

  useEffect(() => {
    if (isHomepage) {
      document.body.classList.add('homepage');
    } else {
      document.body.classList.remove('homepage');
    }
  }, [isHomepage]);

  return <Navbar {...props} />;
}
