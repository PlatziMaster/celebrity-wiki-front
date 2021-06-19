// Import components
import { FacebookButton } from '../UI/Button/Facebook/Facebook';
import { GoogleButton } from '../UI/Button/Google/Google';
import { Alert } from '../UI/Alert/Alert';
import { Spinner } from '../UI/Spinner/Spinner';
// Import icons
import EmailIcon from '../../assets/svgs/email.svg';
import PadlockIcon from '../../assets/svgs/padlock.svg';

export const Template = ({
  state, 
  handlerInputs,
  isLoading,
  alertMessage,
  toggleAlert
}) => (
  <section className="login py-5">
    <span className="logo--login" />

    <section className="login__container">
      <h1 className="login__title">Sign in</h1>

      <div className="social-media-buttons">
        <GoogleButton />
        <FacebookButton />
      </div>

      <p className="login__description">or use your email and password:</p>

      {alertMessage.show && 
        <Alert message={alertMessage.message} type={alertMessage.type} toggleAlert={toggleAlert}/>
      }

      <form className="login__form">

        <label className="login__label" htmlFor="email">
          email
        </label>
        <div className="login__input">
          <input 
            type="email" 
            id="email"
            name="email"
            value={state.email}
            onChange={e => handlerInputs(e.target)} 
          />
          <img src={EmailIcon} alt="Email icon" />
        </div>

        <label className="login__label" htmlFor="password">
          password
        </label>
        <div className="login__input">
          <input
            type="password" 
            id="password"
            name="password"
            value={state.password}
            onChange={e => handlerInputs(e.target)} 
          />
          <img src={PadlockIcon} alt="Padlock icon" />
        </div>

        <button 
          className="login__button" 
          type="button"
          disabled={!state.password || !state.email}
        >
          {isLoading ? <Spinner /> : 'sign in'}
        </button>

      </form>
    </section>
  </section>
);