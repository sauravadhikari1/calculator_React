import React from 'react'
import Keypad from './keypad'
import Screen from './Screen'
import { useState } from 'react'

const Calculator = () => {

  function calculateValue(operationString){
    let result = "";
        try {
            if (operationString === "") {
                result = "0";
            } else {
                result = eval(operationString);
            }
        } catch (e) {
            result = "0";
        }
        return result;
    };
    const operatorList = ["/", "x", "*", "-", "+", "=", "%"];
    const numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialCharacterList = [".", "Enter"];

    function getLastNumber(numInput) {
        let highestIndex = {
            index: 0,
            symbol: ",",
        };
        // ["/", "x", "*", "-", "+", "=", "%"];

        for (let operator of operatorList) {
            let operatorIndex = numInput.lastIndexOf(operator);
            if (operatorIndex > highestIndex.index) {
                highestIndex.index = operatorIndex;
                highestIndex.symbol = operator;
            }
        }

        let numInputArray = numInput.split(highestIndex.symbol);
        console.log(numInputArray);
        return numInputArray[numInputArray.length - 1];
    }

    function allowDot(numInput) {
        let lastExpression = getLastNumber(numInput);
        if (lastExpression.includes(".")) {
            return false;
        } else {
            return true;
        }
    }
  
  let [topDisplay, setTopDisplay] = useState("");
    let [bottomDisplay, setBottomDisplay] = useState("0");


    function Addtodisplay(str){
      let topResult = topDisplay;
        let bottomResult = bottomDisplay;

        switch (str.toLowerCase()) {
            case "c":
                topResult = "";
                break;
            case "del":
                topResult = topResult.substr(0, topResult.length - 1);
                break;
            case "%":
            case "/":
            case "x":
            case "-":
            case "+":
            case "*":
                if (topResult.length > 0) {
                    if (str == "x") {
                        str = "*";
                    }
                    topResult = topResult + str;
                }
                break;
            case "=":
            case "enter":
                break;
            case ".":
                if (allowDot(topResult)) {
                    topResult = topResult + str;
                }
                break;
            default:
                topResult = topResult + str;
                break;
        }

        // Top Value
        setTopDisplay(topResult);

        // Evaulate value
        bottomResult = calculateValue(topResult);

        setBottomDisplay(bottomResult);
    };
            
  return (
    <>
      <div className="wrapper">
        <div className="container">
            <Screen topDisplay={topDisplay} bottomDisplay={
            bottomDisplay}/>
        <Keypad Addtodisplay ={Addtodisplay}/>
        
        </div>
      </div>
    </>
  )
}


export default Calculator
