import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footerTitle}>🥗 DietPredict</h3>
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>About Us</a>
        <a href="#" className={styles.footerLink}>Privacy Policy</a>
        <a href="#" className={styles.footerLink}>Terms of Service</a>
        <a href="#" className={styles.footerLink}>Contact</a>
        <a href="#" className={styles.footerLink}>FAQ</a>
      </div>
      <p className={styles.copyright}>© 2025 DietPredict. All rights reserved.</p>
      <p className={styles.tagline}>Your journey to better health starts here 🌟</p>
    </footer>
  );
}