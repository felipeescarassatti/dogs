import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer2} container`}>
        <Dogs />
        <p>Dogs. Alguns direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
