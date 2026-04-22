import React from 'react';
import styles from './Team.module.css';
import { teamMembers } from '../../../data/team';
import mailIcon from "../../../assets/icons/Icon (19).svg";

export const Team: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.badge}>Our Teachers With Expertise</div>
        <h2 className={styles.title}>Our Team Members</h2>
        <p className={styles.headerDesc}>
          At Little Learners Academy, our teaching team is the heart of our educational journey. 
          We take great pride in employing highly qualified and passionate educators who possess 
          a deep understanding of early childhood development.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.memberInfo}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.memberImage} 
                />
                <h3 className={styles.memberName}>{member.name}</h3>
              </div>
              <button className={styles.mailButton} aria-label="Send Email">
                <img src={mailIcon} alt="Email Icon" />
              </button>
            </div>

            <div className={styles.textContainer}>
              <span className={styles.qualification}>
                Qualification: {member.qualification}
              </span>
              <p className={styles.description}>
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};