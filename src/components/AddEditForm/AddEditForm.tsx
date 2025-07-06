import "./AddEditForm.css";

const AddEditForm = () => {
  return (
    <div className="add-edit-form__container">
      <h1>Adding new link</h1>
      <input
        type="number"
        placeholder="Branch number"
        className="add-edit-form__input-branch"
      />
      <input
        type="text"
        placeholder="https://www.figma.com/design/uaGFw6cccDSSnAoV0aweHS/Собираем_лендинг_вместе?node-id=1632-10&t=fveQ4BWIu3itY532-0"
        className="add-edit-form__input-link"
      />
      <textarea placeholder="Описание" />
      <button>Save</button>
    </div>
  );
};

export default AddEditForm;
