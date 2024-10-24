import React from 'react'
import styles from './styles.module.css'
import {useCalculator} from "../../contexts/CalculatorContext"

function Screen() {
    const {screenText} = useCalculator();
  return (
    <div className={styles.screen}>
      <label>{screenText}</label>
    </div>
  )
}

export {Screen}
