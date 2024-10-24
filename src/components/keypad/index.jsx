import React from 'react'
import { Key } from '../key'
import styles from './styles.module.css'
function KeyPad() {
  return (
    <div className={styles.keyPad}>
        <div className={styles.row}>
        <Key variant="primaryKey">7</Key>
        <Key variant="primaryKey">8</Key>
        <Key variant="primaryKey">9</Key>
        <Key variant="secondaryKey">DEL</Key>
        </div>

        <div className={styles.row}>
        <Key variant="primaryKey">4</Key>
        <Key variant="primaryKey">5</Key>
        <Key variant="primaryKey">6</Key>
        <Key variant="primaryKey">+</Key>
        </div>

        <div className={styles.row}>
        <Key variant="primaryKey">1</Key>
        <Key variant="primaryKey">2</Key>
        <Key variant="primaryKey">3</Key>
        <Key variant="primaryKey">-</Key>
        </div>

        <div className={styles.row}>
        <Key variant="primaryKey">.</Key>
        <Key variant="primaryKey">0</Key>
        <Key variant="primaryKey">/</Key>
        <Key variant="primaryKey">x</Key>
        </div>

        <div className={styles.row}>
        <Key variant="secondaryKey">RESET</Key>
        <Key variant="warningKey">=</Key>
        </div>
    </div>
  )
}

export {KeyPad}
