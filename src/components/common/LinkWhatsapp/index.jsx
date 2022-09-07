import React from 'react'
import styles from "./style.module.css"

export default function LinkWhatsapp({ phoneNumber, ...props }) {
  return (
    <a href={`https://wa.me/${phoneNumber || "+972535277354"}`} className={styles.watsapp}>
      <img src="/images/icon-btns/wahtsapp.svg" alt="☎" />
    </a>
  );
}