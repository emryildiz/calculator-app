import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import styles from './styles.module.css'

function Toggle() {
    const {themeState, changeThemeState} = useTheme();

  return (
    <div className={styles.toggle}>
    <div className={styles.states}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
    <div onClick={() => changeThemeState()}
    className={`${styles.toggleWrapper} ${themeState === 2 && styles.secondState} ${themeState === 3 && styles.thirdState}`}>
      <div className={styles.toggleBtn} onClick={() => changeThemeState()}></div>
    </div>
    </div>
  )
}

export {Toggle}
