import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const RegisterModal = ({}) => {
  return (
    <ModalWithForm titleText="Sign up">
      <label htmlFor="email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password{" "}
        <input
          type="text"
          className="modal__input"
          id="password"
          name="password"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="username" className="modal__label">
        Username{" "}
        <input
          type="text"
          className="modal__input"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </label>
      <div className="modal__button-container">
        <button type="submit" className="modal__submit-btn">
          Sign up
        </button>
        <div className="modal__redirect-container">
          <p className="modal__redirect-text">or</p>
          <button type="button" className="modal__redirect-btn">
            Sign in
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
