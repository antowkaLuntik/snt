import "./header.css";
import avatar from "../../img/avatar.png";
import exit from "../../img/exit.png";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const changePage = (page) => {
    dispatch({ type: page });
  };

  return (
    <div className="header">
      <div className="upper_header">
        <div className="temp"></div>
        <div className="title">
          <span>CНТ Наука - 1</span>
        </div>
        <div className="user">
          <img src={avatar} width="30px" height="30px" />
          <span>Имя пользователя</span>
          <img src={exit} width="30px" height="30px" />
        </div>
      </div>
      <div className="lower_header">
        <div className="block">
          <span>Главная</span>
        </div>
        <div className="block" onClick={() => changePage("news")}>
          <span>Новости</span>
        </div>
        <div className="block">
          <span>Взносы</span>
        </div>
        <div className="block">
          <span>Электроэнергия</span>
        </div>
        <div className="block" onClick={() => changePage("roadmap")}>
          <span>Схема проезда</span>
        </div>
        <div className="block">
          <span>Электричка</span>
        </div>
        <div className="block">
          <span>Автобус</span>
        </div>
      </div>
    </div>
  );
};
