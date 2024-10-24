import React from 'react'
import styles from './styles.module.css'
import { ToggleWrapper } from '../toggle-wrapper'

function Header() {
  return (
    <div className={styles.header}>
      <h2>calc</h2>
      <ToggleWrapper></ToggleWrapper>
    </div>
  )
}

export {Header}