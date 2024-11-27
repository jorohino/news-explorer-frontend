import "./ModalWithForm.css";

function ModalWithForm({ children, titleText, titleModifier }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className={`modal__title ${titleModifier ? titleModifier : ""}`}>
          {titleText}
        </h2>
        <button className="modal__close" type="button"></button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
