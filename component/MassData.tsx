import React, { useState, useEffect } from 'react';
import { MässaInfo } from '../models/MässaInfo';
import styles from '../styles/MassData.module.css';

const MassData: React.FC = () => {
  const [mässaInfo, setMässaInfo] = useState<MässaInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/massinfo') 
      .then((response) => response.json())
      .then((data) => {
        setMässaInfo(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Laddar...</div>;
  }

  if (!mässaInfo) {
    return <div>Kunde inte ladda mässinformation.</div>;
  }
  return (
    <div className={styles.massDataContainer}> 
    <img src={mässaInfo.imageUrl} alt={mässaInfo.namn} className={styles.massDataImage} />
      <h1 className={styles.massDataTitle}>{mässaInfo.namn}</h1>
      <p className={styles.massDataText}>{mässaInfo.beskrivning}</p>
      <p className={styles.massDataText}><strong>Plats:</strong> {mässaInfo.plats}</p>
      <p className={styles.massDataText}><strong>Datum:</strong> {mässaInfo.datum}</p>
      <p className={styles.massDataText}><strong>öpping:</strong> {mässaInfo.öpping}</p>
      <p className={styles.massDataText}><strong>Stängnig:</strong> {mässaInfo.stängning}</p>
      
    </div>
  );
};

export default MassData;
