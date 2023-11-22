import React, { useState } from 'react';
import FormComponent from '../component/FormData';
import { handleSubmit } from '../component/HandleSubmit';
import { ContactFormData } from '../models/ContactFormData';
import Header from '../component/ui/Header';
import Footer from '../component/ui/Footer';
import styles from '../styles/TicketPage.module.css'; 

const TicketPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ firstName: '', lastName: '', email: '', telNumber: '', ticketType: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [visitorName, setVisitorName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmission = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.telNumber || !formData.ticketType) {
      alert('Vänligen fyll i alla fält.');
      return;
    }

    try {
      const responseData = await handleSubmit(formData);
      if (responseData) {
        setVisitorName(`${formData.firstName} ${formData.lastName}`);
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Det gick inte att skicka data:', error);
    }
  };

  return (
    <main className={styles.bodyBackground}>
      <Header/>
      <article className={styles.ticketContainer}>
        <section className={styles.box}>
          <h1 className={styles.ticketTitle}>Biljetter</h1>

          <section className={styles.text}>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna. Leo a diam sollicitudin tempor id eu nisl nunc. Augue eget arcu dictum varius duis at consectetur lorem. Diam donec adipiscing tristique risus nec feugiat in fermentum.</p>
              <p>1 dag: 450kr</p>
              <p>2 dagar: 700kr</p>
            </div>
          </section>

          <FormComponent formData={formData} handleChange={handleChange} />
          <div className={styles.selectContainer}>
  <select name="ticketType" onChange={handleChange} value={formData.ticketType}>
    <option value="">Välj biljettyp</option>
    <option value="one-day">En dag</option>
    <option value="two-day">Två dagar</option>
  </select>
</div>
          <button onClick={handleSubmission} className={styles.btn}>
            Skicka
          </button>
        </section>
      </article>
      {showPopup && (
        <div className={styles.popup}>
          <p>Registrering lyckad! {visitorName}'s biljettinformation är sparad.</p>
          <button onClick={() => setShowPopup(false)}>Stäng</button>
        </div>
      )}
      <Footer />
    </main>
  );
};

export default TicketPage;
