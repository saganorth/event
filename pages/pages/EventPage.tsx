import React, { useState, useEffect } from 'react';
import EventList  from '../component/EventList';
import { Omrade } from '../models/omrade';
import Header from '../component/ui/Header';
import Footer from '../component/ui/Footer';
import styles from '../styles/EventPage.module.css'; 

const EventPage: React.FC = () => {
  const [omraden, setOmraden] = useState<Omrade[]>([]);


 

  useEffect(() => {
    
    fetch('http://localhost:3000/api/omraden')
        .then(response => {
            if (!response.ok) {
                throw new Error('Nätverkssvar var inte ok');
            }
            return response.json();
        })
        .then(data => {
            setOmraden(data);
        })
        .catch(error => {
            console.error('Det gick inte att hämta data:', error);
        });
}, []);
  

return (
  <div className={styles.bodyBackground}>
    <Header/>
    <div className={styles.pageContent}>
      
      <EventList omraden={omraden} />
   
    </div>
    <Footer/>
  </div>
);
};



export default EventPage;
