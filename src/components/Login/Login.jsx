// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import { Template } from './Template';
// Import actions
import { login } from '../../redux/actions/authActions';

export const Component = ({ 
  login,
  successRequest,
  errorRequest,
  messageError
}) => {
  /** 
   * @constant - Defines if Spinner should displayed and if login request is loading.
   * @type {boolean} 
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @typedef alertMessage
   * @type {object}
   *  @property {string} message - Message to display.
   *  @property {string} type - Type of message ['success', 'info', 'warning', 'error'].
   *  @property {number} show - Defines if AlertMessage should displayed.
   */
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    type: '',
    show: false
  });

  /**
   * @typedef loginState
   * @type {object}
   *  @property {string} email - User email.
   *  @property {string} password - User password.
   */
  const [loginState, setLoginState] = useState({
    email: '',
    password: ''
  });

  /**
   * @function handlerInputs
   * @param {HTMLElement} element
   * Updates login state using element name
   */
  const handlerInputs = (element) => {
    setLoginState({
      ...loginState,
      [element.name]: element.value
    })
  }

  /**
   * @function toggleAlert
   * Toogle alert message
   */
  const toggleAlert = () => {
    setAlertMessage({
      ...alertMessage,
      show: !alertMessage.show
    })
  }

  // Handle success request
  // Stop loader
  useEffect(() => {
    if (successRequest) {
      setIsLoading(false);
    }
  }, [successRequest])

  // Handle error request
  // Stop loader and set data for alert message
  useEffect(() => {
    if (errorRequest && messageError) {
      setIsLoading(false);
      setAlertMessage({
        message: messageError,
        type: 'error',
        show: true
      });
    }
  }, [errorRequest, messageError])

  /**
   * @function login
   * Start login fetch with user data
   */
  const validForm = (data) => {
    setIsLoading(true);
    login(data);
  }

  return (
    <Template
      login={validForm}
      state={loginState} 
      handlerInputs={handlerInputs}
      isLoading={isLoading}
      alertMessage={alertMessage}
      toggleAlert={toggleAlert}
    />
  )
};

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  login(data) {
    dispatch(login({ data }))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  successRequest: state.authReducer.successRequest,
  errorRequest: state.authReducer.errorRequest,
  messageError: state.authReducer.messageError
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);
