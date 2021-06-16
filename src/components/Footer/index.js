/**
 * components/Footer/index.js
 */
import React from 'react';

import Container from 'components/Container';

const Footer = () => (
  <footer className="footer">
    <Container>
      <p>
        <small>
          Copyright &copy; 2021 by <a to="/">My Site</a>
        </small>
      </p>
    </Container>
  </footer>
);

// export default memo(Footer);
export default Footer;
