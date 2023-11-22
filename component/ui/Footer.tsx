
 import styles from '../../styles/Footer.module.css';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Virkmässan - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
