// Import libraries
import { useState } from 'react';
// Import components
import { Template } from './Template';

export const Login = () => {
  /** 
   * @constant - Defines if Spinner should displayed and if login request is loading.
   * @type {boolean} 
   */
  const [isLoading] = useState(false);

  /**
   * @typedef alertMessage
   * @type {object}
   * @property {string} message - Message to display.
   * @property {string} type - Type of message ['success', 'info', 'warning', 'error'].
   * @property {number} show - Defines if AlertMessage should displayed.
   */
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    type: '',
    show: false
  });

  /**
   * @typedef loginState
   * @type {object}
   * @property {string} email - User email.
   * @property {string} password - User password.
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

  return (
    <Template
      state={loginState} 
      handlerInputs={handlerInputs}
      isLoading={isLoading}
      alertMessage={alertMessage}
      toggleAlert={toggleAlert}
    />
  )
};
