import React from 'react';
import styles from './MobileMenu.module.css';
import BuyButton from './UI/BuyButton';


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuHeader}>
        <div className={styles.logo}>$TUT</div>
        <div className={styles.headerButtons}>
          <BuyButton>Buy</BuyButton>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
      
      <div className={styles.menuContent}>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/telega.svg" alt="Telegram" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/medium.svg" alt="Medium" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/sova.svg" alt="Eagle" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/man.svg" alt="Discord" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;