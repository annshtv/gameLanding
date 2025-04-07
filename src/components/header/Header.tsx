import { useState, useEffect } from 'react';
import BuyButton from '../UI/BuyButton';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.headerHidden : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>$TUT</div>
          <nav className={styles.desktopNav}>
            <BuyButton>info</BuyButton>
            <div className={styles.icons}>
              <a href="#" className={styles.iconButton}><img src="/pictures/telega.svg" alt="Telegram" /></a>
              <a href="#" className={styles.iconButton}><img src="/pictures/twitter.svg" alt="Twitter" /></a>
              <a href="#" className={styles.iconButton}><img src="/pictures/medium.svg" alt="Medium" /></a>
              <a href="#" className={styles.iconButton}><img src="/pictures/sova.svg" alt="Eagle" /></a>
              <a href="#" className={styles.iconButton}><img src="pictures/man.svg" alt="Discord" /></a>
            </div>
            <BuyButton>Buy</BuyButton>
          </nav>
          <button 
            className={`${styles.burgerMenu} ${menuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
      </header>
      
      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
      
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;