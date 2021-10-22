import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import './home.css';

export const Web = () => {
  const { name, category } = useParams();
  const [answer, setAnswer] = useState('');
  const [takenCat, setTakenCat] = useState();
  const [isTrue, setIsTrue] = useState(false);

  const finalText = useMemo(() => [
    {
      name: 'mouse',
      text: [
        {
          takeFrom: 'Aray',
          text: 'Мир',
          to: 'abdul'
        },
        {
          takeFrom: 'Danik',
          text: 'такой же',
          to: 'maya'
        },
        {
          takeFrom: 'Nastya',
          text: 'чудесный',
          to: 'aza'
        },
        {
          takeFrom: 'Mira',
          text: 'как и раньше,',
          to: 'atygay'
        },
        {
          takeFrom: 'Dimka',
          text: 'помни',
          to: 'aijun'
        },
      ],
    },
    {
      name: 'panda',
      text: [
        {
          takeFrom: 'Gokha',
          text: 'Никогда',
          to: 'mira'
        },
        {
          takeFrom: 'Zhazira',
          text: 'не переставай',
          to: 'dimka'
        },
        {
          takeFrom: 'Madik',
          text: 'верить в',
          to: 'ayman'
        },
        {
          takeFrom: 'Madi',
          text: 'чудеса',
          to: 'adis'
        },
        {
          takeFrom: 'Aydana',
          text: 'мира',
          to: 'aray'
        },
      ],
    },
    {
      name: 'minions',
      text: [
        {
          takeFrom: 'Maya',
          text: 'Самое',
          to: 'aynura'
        },
        {
          takeFrom: 'Aza',
          text: 'дорогое',
          to: 'china'
        },
        {
          takeFrom: 'Askhat',
          text: 'что есть',
          to: 'aydana'
        },
        {
          takeFrom: 'Adis',
          text: 'у тебя',
          to: 'nastya'
        },
        {
          takeFrom: 'Aiju',
          text: 'и есть ты!',
          to: 'madik'
        },
      ],
    },
    {
      name: 'advangers',
      text: [
        {
          takeFrom: 'Ayman',
          text: 'Забота',
          to: 'danik'
        },
        {
          takeFrom: 'Atygay',
          text: 'даренная тобой',
          to: 'askhat'
        },
        {
          takeFrom: 'China',
          text: 'бесценна',
          to: 'zhazira'
        },
        {
          takeFrom: 'Aynura',
          text: 'для каждого',
          to: 'gokha'
        },
        {
          takeFrom: 'Abdul',
          text: 'из нас',
          to: 'madi'
        },
      ],
    }
  ], []);

  const onTextChange = (event) => {
    if (event && event.target.value === answer) {
      setIsTrue(true);
    }
  };

  const toUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    const cat = finalText.find((item) => item.name === category);
    setTakenCat(cat ? cat.text.find(item => item.to === name) : undefined);
    takenCat && setAnswer(takenCat.text)
  }, [finalText, category, name, takenCat]);

  return (
    <div className="main">
      <span className="wrap-text"> <span className="task">Задание 2: </span> 
        Введи слово от <span className="task">{takenCat?.takeFrom || 'ОШИБКА'}</span>
      </span>
      <input className="custom-input" onChange={(a, b) => onTextChange(a, b)}/>
      <br></br>
      {isTrue && <span className="task green">Все верно, молодец {toUpper(name)}!</span>}
    </div>
  );
};