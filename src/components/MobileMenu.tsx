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
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
      
      <div className={styles.menuContent}>
        <BuyButton>info</BuyButton>
        <BuyButton>Buy</BuyButton>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/telega1.svg" alt="Telegram" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/twitter1.svg" alt="Twitter" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/medium1.svg" alt="Medium" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/sova1.svg" alt="Eagle" />
          </a>
          <a href="#" className={styles.iconLink}>
            <img src="/pictures/man1.svg" alt="Discord" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;