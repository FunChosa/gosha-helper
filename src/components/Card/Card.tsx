import "./Card.css";
import Delete from "../../icons/delete.svg";
import PinTrue from "../../icons/pin_true.svg";
import PinFalse from "../../icons/pin_false.svg";
import Edit from "../../icons/edit.svg";

const Card = () => {
  return (
    <div className="card__container">
      <div className="card__content-top">
        <div className="card__content-top-left"></div>
        <div className="card__content-top-right">
          <div className="card__content-top-right-icons">
            <img
              src={true ? PinTrue : PinFalse}
              alt="pinned"
              className="card__content-top-right-icon"
            />
            <img
              src={Edit}
              alt="edit"
              className="card__content-top-right-icon"
            />
            <img
              src={Delete}
              alt="delete"
              className="card__content-top-right-icon"
            />
          </div>
          <button className="card__content-top-right-button">
            go to env →{" "}
          </button>
        </div>
      </div>
      <div className="card__content-bottom"></div>
    </div>
  );
};

export default Card;
