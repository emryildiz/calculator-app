import React from 'react'
import styles from './styles.module.css'
import {Header} from "../../components/header"
import {Screen} from "../../components/screen"
import {KeyPad} from "../../components/keypad"

function CalculatorContainer() {
  return (
    <div className={styles.calculatorContainer}>
      <Header></Header>
      <Screen></Screen>
      <KeyPad></KeyPad>
    </div>
  )
}

export {CalculatorContainer}
