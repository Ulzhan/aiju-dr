import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReactCodeInput from "react-code-input";
import Timer from 'react-compound-timer';
import './home.css'

export const Home = () => {
  const [isTrue, setIsTrue] = useState(false);
  const history = useHistory();
  const { name, category, id, code } = useParams();
  const toUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const onCodeChange = (val) => {
   if (val === code) {
     setIsTrue(true);
   }
  }

  useEffect(() => {
    if (isTrue) {
      setTimeout(() => history.push('/goeat'), 3000);
    }
  }, [isTrue, history]);
  return (
    <div className="main">
      <span className="greetings">Салам, {toUpper(name)}</span>
      <span className="start">Игра началась</span>
      <span className="wrap-text"> <span className="task">Задание 1: </span> Найди картину</span>
      <div>
        <img src={`/assets/${category}/${id}.png`} alt="" />
      </div>
      <br></br>
      <span className="wrap-text"> <span className="task">Введи код: </span>
        <ReactCodeInput type='number' fields={4} onChange={onCodeChange}/>
      </span>
      {isTrue && <span className="task green">Код верный!</span>}
      <span className="task">Осталось времени: 
        <span className="margin-left">
          <Timer
            initialTime={180000}
            direction="backward"
          >
            {() => (
              <React.Fragment>
                <Timer.Hours />:0
                <Timer.Minutes />:
                <Timer.Seconds /> 
              </React.Fragment>
            )}
          </Timer>
        </span>
      </span>
    </div>
  );
};