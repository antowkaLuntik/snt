import "./roadmap.css";
import map from "../../img/map.jpg";
import dom from "../../img/dom.jpg";

export const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="title">Как проехать</div>
      <div className="text">Едешь туда, потом туда и бум ты тут</div>
      <div className="map">
        <img src={map} height="400px" width="700px" alt="Фотка" />
        <img src={dom} height="400px" width="450px" />
      </div>
    </div>
  );
};
