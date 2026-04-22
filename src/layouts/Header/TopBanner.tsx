import styles from './Header.module.css';

export const TopBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src="../../assets/images/left-vector.png" className={styles.leftIcon} alt="" />
      
      <div className={styles.bannerContent}>
        <span>Admission is Open, Grab your seat now</span>
        <span className={styles.arrow}>→</span>
      </div>

      <img src="../../assets/images/right-vector.png" className={styles.rightIcon} alt="" />
    </div>
  );
};