import React from 'react';
import { NextPage } from 'next';
import { Omrade } from '../models/omrade';
import Header from '../component/ui/Header';
import Footer from '../component/ui/Footer';
import styles from '../styles/EventDetail.module.css';

type EventDetailsProps = {
  omrade: Omrade; 

};

const EventDetail: NextPage<EventDetailsProps> = ({ omrade }) => {
  


  return (
    <div className={styles.bodyBackground}>
      <Header />
    <div className={styles.pageContainer}>
        
    
        <div className={styles.card}>
            <h2 className={styles.header}>{omrade.namn}</h2> 
            <img src={omrade.imageUrl} alt={omrade.namn} className={styles.image} />
            <p className={styles.beskrivning}>{omrade.beskrivning}</p>
            <p className={styles.öppettider}>öppettider {omrade.öppettider}</p>
            <p className={styles.extraInfo}>{omrade.extraInfo}</p>
            
        </div>
       
    </div> 
    <Footer />
    </div>
  );
};

export default EventDetail;
