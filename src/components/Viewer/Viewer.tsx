import AddEditForm from "../AddEditForm/AddEditForm";
import "./Viewer.css";

const Viewer = () => {
  return (
    <div className="viewer__container">
      <div className="viewer__add-button-container">
        <button className="viewer__add-button">+ add new link</button>
      </div>
      <div>
        <AddEditForm />
      </div>
    </div>
  );
};

export default Viewer;
