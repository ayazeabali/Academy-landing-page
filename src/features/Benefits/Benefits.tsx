import React from 'react';
import styles from './Benefits.module.css';
import { BENEFITS_DATA } from '../../utils/data';

// تعريف بنية العنصر الواحد لـ TypeScript
interface BenefitItem {
  icon: string;
  title: string;
  content: string;
}

export const Benefits: React.FC = () => {
  // تأكد من وجود البيانات قبل الرندر
  if (!BENEFITS_DATA?.items) return null;

  return (
    <section className={styles.container}>
      <header className={styles.subContainer}>
        <h2 className={styles.heading}>{BENEFITS_DATA.title}</h2>
        <p className={styles.paragraph}>{BENEFITS_DATA.description}</p>
      </header>

      {/* هذه الحاوية هي المسؤولة عن توزيع الـ 3 كاردات */}
      <div className={styles.itemsContainer}>
        {BENEFITS_DATA.items.map((item: BenefitItem, index: number) => (
          <article key={index} className={styles.card}>
            <div className={styles.iconContainer}>
            <img 
  src={item.icon}  /* نستخدم المتغير مباشرة لأنه يحتوي على الأيقونة المستوردة */
  alt={item.title} 
  className={styles.icon} 
/>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.cardHeading}>{item.title}</h3>
              <p className={styles.cardParagraph}>{item.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};