import { useState, useRef } from "react";

import {
  Container,
  Content,
  Display,
  ButtonsContainer,
  Buttons,
} from "./CalculatorStyles";

const Calculator = () => {
  const [calcAns, setCalcAns] = useState([]);
  const calcDisplayRef = useRef([]);

  function test1(e) {
    let display = document.getElementById("calcDisplay");
    if (e.target.value !== undefined) {
      if (e.target.value === "=") {
        let nanArray = [];
        for (let i = 0; i < calcDisplayRef.current.length; i++) {
          if (i === calcDisplayRef.current.length - 1) {
            if (isNaN(calcDisplayRef.current[i])) {
              display.innerHTML = "error";
              calcDisplayRef.current = [];
              break;
            }
          }
          if (
            isNaN(calcDisplayRef.current[i]) &&
            i !== calcDisplayRef.current.length - 1
          ) {
            let nanObject = {};
            nanObject.symbol = calcDisplayRef.current[i];
            nanObject.index = i;

            nanArray.push(nanObject);

            if (isNaN(calcDisplayRef.current[i + 1])) {
              display.innerHTML = "Error";
              calcDisplayRef.current = [];
              break;
            }
          }
        }
        for (let i = 0; i < nanArray.length; i++) {
          if (i === nanArray.length - 1) {
            break;
          }
          if (
            nanArray[i].symbol === "." &&
            nanArray[i + 1].symbol === nanArray[i].symbol
          ) {
            display.innerHTML = "error";
            calcDisplayRef.current = [];
            break;
          }
        }
        if (nanArray.length !== 0) {
          // let isSolving=true;
          // while(isSolving){
          // }
        }
      } else if (e.target.value === "ac") {
        calcDisplayRef.current = [];
        display.innerHTML = calcDisplayRef.current.join("");
      } else if (e.target.value === "del") {
        calcDisplayRef.current.pop();
        display.innerHTML = calcDisplayRef.current.join("");
      } else {
        if (parseInt(e.target.value)) {
          calcDisplayRef.current.push(parseInt(e.target.value));
        } else {
          calcDisplayRef.current.push(e.target.value);
        }

        display.innerHTML = calcDisplayRef.current.join("");
      }
    }
  }

  return (
    <Container>
      <Content>
        <Display children="" id="calcDisplay" />
        <ButtonsContainer onClick={test1}>
          <Buttons children="ac" value="ac" />
          <Buttons children="del" value="del" />
          <Buttons children="/" value="/" />
          <Buttons children="7" value="7" />
          <Buttons children="8" value="8" />
          <Buttons children="9" value="9" />
          <Buttons children="X" value="*" />
          <Buttons children="4" value="4" />
          <Buttons children="5" value="5" />
          <Buttons children="6" value="6" />
          <Buttons children="-" value="-" />
          <Buttons children="1" value="1" />
          <Buttons children="2" value="2" />
          <Buttons children="3" value="3" />
          <Buttons children="+" value="+" />
          <Buttons children="0" value="0" />
          <Buttons children="." value="." />
          <Buttons children="ANS" value="ANS" />
          <Buttons children="=" value="=" />
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default Calculator;
