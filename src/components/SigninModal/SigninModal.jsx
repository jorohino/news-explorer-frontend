import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";

const SigninModal = ({}) => {
  return (
    <ModalWithForm titleText="Sign in">
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
      <div className="modal__button-container">
        <button type="submit" className="modal__submit-btn">
          Sign in
        </button>
        <div className="modal__redirect-container">
          <p className="modal__redirect-text">or</p>
          <button type="button" className="modal__redirect-btn">
            Sign up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SigninModal;
