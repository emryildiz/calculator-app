import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [screenText, setScreenText] = useState('');
    let [value1, setValue1] = useState('');
    let [value2, setValue2] = useState('');
    let [isSignPressed, setIsSignPressed] = useState(false);
    let [sign, setSign] = useState('');

    const numPressed = (key) => {
        console.log(key)
        if(isSignPressed === false){
            setValue1(value1 += key);
            setScreenText(value1);
        }   
        else{
            setValue2(value2 += key);
            setScreenText(value2);
        }
    }

    const signPressed = (key) => {
        sign = setSign(key);
        setIsSignPressed(true);
    }

    const calculate = () => {
        if(sign === '')
            return;
        if(value2 === '')
            return;

        const numberValue1 = parseFloat(value1);
        const numberValue2 = parseFloat(value2);
        let result = 0;
        switch (sign) {
            case "+":
                result = numberValue1 + numberValue2;
                break;
            case "-":
                result = numberValue1 - numberValue2;
                break;
             case "x":
                result = numberValue1 * numberValue2;
             break;
             case "/":
                result = numberValue1 / numberValue2;
                break;
        }
        setIsSignPressed(false);
        setValue1(result.toString())
        setValue2('');
        setScreenText(result.toString());
    }

    const reset = () => {
        setValue1('');
        setValue2('');
        setScreenText('');
        setSign('');
        setIsSignPressed(false);
    }

    const deleteKey = () => {
        if(isSignPressed)
        {
            if(value2 !== ''){
                let result = value2.slice(0, -1);
                setValue2(result);
                setScreenText(result);
            }
        }
        else{
            if(value1 !== ''){
                let result = value1.slice(0, -1);
                setValue1(result);
                setScreenText(result);
            }
        }
    }


    return <CalculatorContext.Provider value={{numPressed, signPressed, calculate, reset, deleteKey, screenText}}>
        {children}
    </CalculatorContext.Provider>
};


export const useCalculator = () => useContext(CalculatorContext);