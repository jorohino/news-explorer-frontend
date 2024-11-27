import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const SuccessModal = ({}) => {
  return (
    <ModalWithForm
      titleText="Registration successfully completed!"
      titleModifier="modal__title--success"
    >
      <button type="submit" className="modal__redirect-btn modal__signin-btn">
        Sign in
      </button>
    </ModalWithForm>
  );
};

export default SuccessModal;
