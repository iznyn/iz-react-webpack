/**
 * components/Footer/index.js
 */
import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  console.log('Footer');
  return (
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
};

export default Footer;
