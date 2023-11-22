import React from 'react';
import styles from '../styles/Home.module.css'; 
import Link from 'next/link';
import MassData from '../component/MassData';

const HomePage = () => {
  const massomraden = ["Garnmarknaden", "Hantverksförsäljare", "Foodtrucks", "Scenen"];
  return (
 
    <main>
      <div className={styles.bodyBackground}>   
      <article className={styles['main-area']}>
        <section className={styles.box}>
          <MassData />
        </section>
      </article>
      <article className={styles['info-area']}>
        <section className={styles['display-image']}></section>
        <section className={styles.box}>
          <h3 className={styles['page-title']}>Att göra</h3>
          <ul>
            {massomraden.map((omrade, index) => (
              <div key={index}>{omrade}</div>
            ))}
          </ul>
          <Link href='/EventPage'>
            <div className={`${styles.btn} ${styles['btn-light']}`}>Se områden</div>
          </Link>
        </section>
      </article>
      <article className={styles['info-area']}>
        <section id='store' className={styles.box}>
          <i className='fa-solid fa-shop'></i>
          <h3>Detta vill du inte missa!</h3>
          <Link href='/TicketPage'>
            <div className={`${styles.btn} ${styles['btn-more']}`}>köp biljetter</div>
          </Link>
        </section>
      </article>
      </div>
    </main>
    
  );
};

export default HomePage;
