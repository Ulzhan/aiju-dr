import './home.css';
import { useParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';

export const Test = () => {
  const {type} = useParams();
  const [isAdmin, setIsAdmin] = useState(false);  
  const [showSplash, setShowSplash] = useState(true);
  const [showAns, setShowAns] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const questions = useMemo(() => [
    {
      id: 1,
      question: ' Какое настоящее имя у Айж?',
      answers: [
        {
          letter: 'A',
          text: 'Айжулдыз'
        },
        {
          letter: 'B',
          text: 'Айжүн'
        },
        {
          letter: 'C',
          text: 'Айжүрек'
        },
        {
          letter: 'D',
          text: 'Айжүзекше'
        },
      ],
      correct: 'B',
      correctImage: '/assets/aijun.jpg'
    },
    {
      id: 2,
      question: ' Какой натуральный цвет волос у Айж?',
      answers: [
        {
          letter: 'A',
          text: 'Коштан'
        },
        {
          letter: 'B',
          text: 'Черный'
        },
        {
          letter: 'C',
          text: 'Синий'
        },
        {
          letter: 'D',
          text: 'Блонд'
        },
      ],
      correct: 'B',
      correctImage: '/assets/waw.jpg'
    },
    {
      id: 3,
      question: 'Какой у Айж сосок?',
      answers: [
        {
          letter: 'A',
          text: '',
          img: '/assets/soski/sosok1.jpeg'
        },
        {
          letter: 'B',
          text: '',
          img: '/assets/soski/sosok2.jpg'
        },
        {
          letter: 'C',
          text: '',
          img: '/assets/soski/sosok3.jpg'
        },
        {
          letter: 'D',
          text: '',
          img: '/assets/soski/sosok4.jpg'
        },
      ],
      correct: 'B',
      correctImage: '/assets/soska.jpg'
    },
    {
      id: 4,
      question: 'Что нельзя трогать у Айж?',
      answers: [
        {
          letter: 'A',
          text: 'Жопу'
        },
        {
          letter: 'B',
          text: 'Сиськи',
        },
        {
          letter: 'C',
          text: 'Письку'
        },
        {
          letter: 'D',
          text: 'Волосы'
        },
      ],
      correct: 'D',
    },
    {
      id: 5,
      question: 'Что Айж умеет делать одновременно?',
      answers: [
        {
          letter: 'A',
          text: 'Сосать и пить'
        },
        {
          letter: 'B',
          text: 'Пить и сосать',
        },
        {
          letter: 'C',
          text: 'Пиздеть и жрать'
        },
        {
          letter: 'D',
          text: 'Жрать и пиздеть'
        },
      ],
      correct: 'A',
      correctVideo: 'https://www.youtube.com/embed/Bd0hS2M9h1k'
    },
    {
      id: 6,
      question: 'Почему Айж отшила последнего ухажера?',
      answers: [
        {
          letter: 'A',
          text: 'Маленькая зп'
        },
        {
          letter: 'B',
          text: 'Маленький писюн',
        },
        {
          letter: 'C',
          text: 'Он в целом маленький'
        },
        {
          letter: 'D',
          text: 'Он не слушает Скрипи'
        },
      ],
      correct: 'D'
    },
    {
      id: 7,
      question: 'Че бар 2 лесбухи кеттiк па?'
    }
  ], []);

  const activeQuestion = useMemo(()=> {
    return questions.find(item => item.id === activeIndex);
  },  [activeIndex, questions]);


  useEffect(() => {
    if(type === 'admin') {
      setIsAdmin(true);
    }
  }, [type]);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 10000);
  }, []);

  return (
    <div className="main">
      {showSplash ? (
        <div className="height-100">
          <img className="height-100" src="/assets/globus.jpg" alt=""/>
        </div>
      ) : (
        <>
            {
              isAdmin ? (
                <div className="parallel-90">
                  <div>
                    <h1>Вопрос {activeIndex}: </h1>
                    <h2 className="wrap-text">{activeQuestion.question}</h2>
                    {activeQuestion.answers && activeQuestion.answers.length > 0 &&
                      <div>
                        {activeQuestion.answers.map((ans, key) => (
                          <div key={key}>
                            <br></br><br></br>
                            <span>
                              {ans.letter}. {ans.text}
                            </span>
                            {ans.img && (
                              <img src={ans.img} alt="" className="height-30" />
                            )}
                          </div>
                        ))}
                      </div>
                    }
                    <div className="bottom-align">
                      <div className="parallel">
                        <button
                          className="custom-button"
                          onClick={() => setShowAns(true)}
                        >
                          Ответ
                        </button>
                        {(activeIndex < questions.length) && (
                          <button
                            className="custom-button margin-left-40"
                            onClick={() => {
                              setActiveIndex(activeIndex + 1);
                              setShowAns(false);
                            }}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {showAns && (
                    <div className="margin-left">
                      <h2>{activeQuestion.correct}</h2>
                      {activeQuestion.correctImage && (
                        <img src={activeQuestion.correctImage} alt="" className="height-80" />
                      )}
                      {activeQuestion.correctVideo && (
                        <iframe width="300" height="415" src={activeQuestion.correctVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      )}
                    </div>
                  ) }
                </div>
              ) : (
                <>
                  <span className="wrap-text">Отвечай на вопросы</span>
                    <br></br>
                  <div className="parallel-90">
                    <button
                      className="custom-button red"
                    >
                      A
                    </button>
                    <button
                      className="custom-button red"
                    >
                      B
                    </button>
                  </div>
                    <br></br> <br></br>
                  <div className="parallel-90">
                    <button
                      className="custom-button red"
                    >
                      C
                    </button>
                    <button
                      className="custom-button red"
                    >
                      D
                    </button>
                  </div>
                </>
              )
            }
        </>
      )}
    </div>
  );
};