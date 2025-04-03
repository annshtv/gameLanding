import React from 'react'
import styles from './buttons/button.module.css'
function BuyButton(props) {
  return (
    <button className={styles.buyButton}>
        {props.children}
    </button>
  )
}

export default BuyButton
