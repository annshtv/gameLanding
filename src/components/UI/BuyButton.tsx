import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './buttons/button.module.css'

type BuyButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function BuyButton({ children, className = '', ...rest }: BuyButtonProps) {
  return (
    <button className={`${styles.buyButton} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default BuyButton
