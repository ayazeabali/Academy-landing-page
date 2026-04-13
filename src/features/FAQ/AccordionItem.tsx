
import React from 'react';
import styles from './FAQ.module.css';

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem = ({ question, answer, isOpen, onToggle }: Props) => {
  return (
    <div 
      className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} 
      onClick={onToggle}
    >
      <div className={styles.faqHeader}>
        <h4 className={styles.itemHeading}>{question}</h4>
        <div className={styles.iconBtn}>
          {isOpen ? '−' : '+'}
        </div>
      </div>
      
      {isOpen && (
        <div className={styles.faqBody}>
          <div className={styles.divider}></div>
          <p className={styles.itemParagraph}>{answer}</p>
        </div>
      )}
    </div>
  );
};