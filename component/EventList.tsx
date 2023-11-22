import React from 'react';
import { Omrade } from "../models/omrade";
import Link from 'next/link'; 
import styles from '../styles/EventList.module.css'; 

type OmradeListProps = {
  omraden: Omrade[]; 
};

const EventList: React.FC<OmradeListProps> = ({ omraden }) => {
  if (!omraden || omraden.length === 0) {
    return <p>Inga områden hittades!</p>;
  }

  return (
    <div className={styles.listContainer}>
      <h1 className={styles.listTitle}>Områden på Mässan</h1>
      
      <ul className={styles.list}>
        {omraden.map((omrade) => (
        <section className={styles.box}>
          <li key={omrade.id} className={styles.listItem}>
            <Link href={`/omraden/${omrade.id}`}>
              <div className={styles.itemLink}>
                <h2 className={styles.itemTitle}>{omrade.namn}</h2>
                <img src={omrade.imageUrl} alt={omrade.namn} className={styles.itemImage} />
                <p className={styles.itemDescription}>{omrade.beskrivning}</p>
              </div>
            </Link>
          </li> 
          </section>
        ))}
      </ul>
     
    </div>
  );
};

export default EventList;

