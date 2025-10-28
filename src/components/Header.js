import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🥗 DietPredict</div>

      <div className={styles.authButtons}>
        <Link href="../auth/login" className={`${styles.button} ${styles.loginButton}`}>
          Login
        </Link>
        <Link href="../auth/signup" className={`${styles.button} ${styles.signupButton}`}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
