import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import styles from './buttons/button.module.css'
function BuyButton(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {
  return (
    <button className={styles.buyButton}>
        {props.children}
    </button>
  )
}

export default BuyButton
