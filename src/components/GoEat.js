import './home.css';
import { useParams, useHistory } from "react-router-dom";
import { useCallback } from 'react';

export const GoEat = () => {
  const history = useHistory();
  const { name, category } = useParams();
  const onClick = useCallback(() => history.push(`/web/${name}/${category}`), [history, name, category]);
  return (
    <div className="main">
      <span className="greetings">Иди покушай</span>
      <div className="bottom-align">
        <button 
          className="custom-button"
          onClick={onClick}
        >
          Спасибо, все было вкусно
        </button>
      </div>
    </div>
  );
};