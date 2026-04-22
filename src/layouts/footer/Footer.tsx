import React from 'react';
import styles from './Footer.module.css';
import { FOOTER_DATA } from '../../data/Footer'; 
import { Link } from 'react-router-dom';

import LogoIcon from '../../assets/icons/shape-14.svg';
import EmailIcon from '../../assets/icons/Icon (19).svg';
import PhoneIcon from '../../assets/icons/Icon (2).svg';
import AddressIcon from '../../assets/icons/Icon (3).svg';
import FBIcon from '../../assets/icons/Icon (6).svg';
import TWIcon from '../../assets/icons/Icon (5).svg';
import LNIcon from '../../assets/icons/Icon (4).svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainWrapper}>
        
        <div className={styles.topContainer}>
          
          <div className={styles.leftBrandSide}>
            <div className={styles.brandSection}>
              <div className={styles.logoContainer}>
                <img src={LogoIcon} alt="Logo" className={styles.logo} />
                <span className={styles.brandName}>Little Learners</span>
              </div>
              <p className={styles.description}>
                We believe in the power of play to foster creativity, problem-solving skills, and imagination.
              </p>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <img src={EmailIcon} alt="Email" />
                <span>hello@littlelearners.com</span>
              </div>
              <div className={styles.contactItem}>
                <img src={PhoneIcon} alt="Phone" />
                <span>+91 91813 23 2309</span>
              </div>
              <div className={styles.contactItem}>
                <img src={AddressIcon} alt="Address" />
                <span>Somewhere in the World</span>
              </div>
            </div>
          </div>

          <nav className={styles.linksGrid}>
            {FOOTER_DATA.sections.map((section, idx) => (
              <div key={idx} className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.path} className={styles.navLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <hr className={styles.separator} />

        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link to="/terms">Terms of Service</Link>
            <span className={styles.dot}></span>
            <Link to="/privacy">Privacy Policy</Link>
            <span className={styles.dot}></span>
            <Link to="/cookie">Cookie Policy</Link>
          </div>

          <div className={styles.socialButtonsContainer}>
            <a href="https://facebook.com" className={styles.socialBtn} target="_blank" rel="noreferrer">
              <img src={FBIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" className={styles.socialBtn} target="_blank" rel="noreferrer">
              <img src={TWIcon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" className={styles.socialBtn} target="_blank" rel="noreferrer">
              <img src={LNIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} Little Learners Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};