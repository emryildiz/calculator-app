import React from 'react'
import styles from './styles.module.css'
import {useCalculator} from "../../contexts/CalculatorContext"

function Key({variant, children}) {
  const {signPressed, numPressed, calculate, reset, deleteKey} = useCalculator();

  const onClicked = () => {
    const numberValue = parseFloat(children);
    if (!isNaN(numberValue) || children === '.') {
      numPressed(children);
    }
    else if(children === "x" || children === "/" || children === "+" || children === "-"){
      signPressed(children);
    }
    else if(children === "="){
      calculate()
    }
    else if(children === "RESET"){
      reset();
    }
    else if(children === "DEL"){
      deleteKey();
    }
  }

  return (
    <button className={`${styles.key} ${styles[variant]}`}
    onClick={() => onClicked()}>{children}</button>
  )
}

export {Key}
