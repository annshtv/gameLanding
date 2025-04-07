import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.cloudContainer}>
        <div className={styles.cloudLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" preserveAspectRatio="none">
            <path d="M500,150 C500,80 450,50 400,50 C380,20 340,0 300,0 C220,0 200,50 150,50 C100,50 50,20 0,50 C0,50 0,300 0,300 L500,300 Z" fill="#131722"/>
          </svg>
          <div className={styles.footerTextLeft}>tutorial, 2025</div>
        </div>
        
        <div className={styles.cloudRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" preserveAspectRatio="none">
            <path d="M0,150 C0,80 50,50 100,50 C120,20 160,0 200,0 C280,0 300,50 350,50 C400,50 450,20 500,50 C500,50 500,300 500,300 L0,300 Z" fill="#131722"/>
          </svg>
          <div className={styles.footerTextRight}>team@tutorialtoken.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;