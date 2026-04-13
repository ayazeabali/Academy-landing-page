
import React from 'react';
import styles from './Footer.module.css';
import { FOOTER_DATA } from '../utils/data';

import LogoIcon from '../assets/icons/shape-14.svg';
import EmailIcon from '../assets/icons/Icon (19).svg';
import PhoneIcon from '../assets/icons/Icon (2).svg';
import AddressIcon from '../assets/icons/Icon (3).svg';
import FBIcon from '../assets/icons/Icon (6).svg'; 
import TWIcon from '../assets/icons/Icon (5).svg';
import LNIcon from '../assets/icons/Icon (4).svg';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContainer}>
        
        <div className={styles.leftBrandSide}>
          <div className={styles.brandSection}>
            <img src={LogoIcon} alt="Logo" className={styles.logo} />
            <p className={styles.description}>{FOOTER_DATA.description}</p>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <img src={EmailIcon} alt="" className={styles.contactIcon} />
              <span>{FOOTER_DATA.contact.email}</span>
            </div>
            <div className={styles.contactItem}>
              <img src={PhoneIcon} alt="" className={styles.contactIcon} />
              <span>{FOOTER_DATA.contact.phone}</span>
            </div>
            <div className={styles.contactItem}>
              <img src={AddressIcon} alt="" className={styles.contactIcon} />
              <span>{FOOTER_DATA.contact.address}</span>
            </div>
          </div>
        </div>

        <nav className={styles.linksGrid}>
          {FOOTER_DATA.sections.map((section, idx) => (
            <div key={idx} className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{section.title}</h4>
              <ul className={styles.linkList}>
                {section.links.map((link, i) => (
                  <li key={i} className={styles.linkItem}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <hr className={styles.separator} />

      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.legalLinks}>
            <span>Terms of Service</span>
            <span className={styles.divider}>|</span>
            <span>Privacy Policy</span>
            <span className={styles.divider}>|</span>
            <span>Cookie Policy</span>
          </div>

          <div className={styles.socialButtonsContainer}>
            <a href="https://facebook.com" className={styles.socialButton} target="_blank" rel="noreferrer">
              <img src={FBIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" className={styles.socialButton} target="_blank" rel="noreferrer">
              <img src={TWIcon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" className={styles.socialButton} target="_blank" rel="noreferrer">
              <img src={LNIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        
        <p className={styles.copyright}>{FOOTER_DATA.copyright}</p>
      </div>
    </footer>
  );
};