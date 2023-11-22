import Link from 'next/link';
import styles from '../../styles/Header.module.css'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.homeLink}>Hem</div>
        </Link>
        <h1 className={styles.header}>VirkMässan</h1>
       <Link href="/TicketPage">
        <div className={styles.ticketLink}>Handla</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;