import React from 'react'
import { Toggle } from '../toggle'
import styles from './styles.module.css'
function ToggleWrapper() {
  return (
    <div className={styles.toggleWrapper}>
      <h4>Theme</h4>
      <Toggle></Toggle>
    </div>
  )
}

export {ToggleWrapper}
