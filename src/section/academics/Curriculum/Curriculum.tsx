import styles from './Curriculum.module.css';
import shapeImg from '../../../assets/images/Shape.png'; 
interface CurriculumProps {
  data: {
    badge: string;
    title: string;
    description: string;
    items: { title: string; content: string; image: string }[];
  };
}

export const Curriculum = ({ data }: CurriculumProps) => {
  return (
    <section className={styles.curriculumSection}>
      <div className={styles.header}>
        <span className={styles.badge}>{data.badge}</span>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
      </div>

      <div className={styles.grid}>
        {data.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={shapeImg} alt="" className={styles.orangeShape} />

              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImg}
              />
            </div>

            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardContent}>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};