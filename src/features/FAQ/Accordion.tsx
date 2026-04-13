
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { AccordionItem } from './AccordionItem';
import { FAQ_DATA } from '../../utils/data';

export const Accordion = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const { questions, badge, title, description } = FAQ_DATA;

  const midIndex = Math.ceil(questions.length / 2);
  const leftColumn = questions.slice(0, midIndex);
  const rightColumn = questions.slice(midIndex);

  return (
    <section className={styles.container}>
      <header className={styles.subContainer}>
        <div className={styles.badgeWrapper}>
          <span className={styles.badge}>{badge}</span>
        </div>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.paragraph}>{description}</p>
      </header>

      <div className={styles.itemsContainer}>
        <div className={styles.column}>
          {leftColumn.map((item) => (
            <AccordionItem 
              key={item.id} 
              {...item} 
              isOpen={openId === item.id} 
              onToggle={() => setOpenId(openId === item.id ? null : item.id)} 
            />
          ))}
        </div>
        <div className={styles.column}>
          {rightColumn.map((item) => (
            <AccordionItem 
              key={item.id} 
              {...item} 
              isOpen={openId === item.id} 
              onToggle={() => setOpenId(openId === item.id ? null : item.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};