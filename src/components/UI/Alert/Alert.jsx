export const Alert = ({ type, message, toggleAlert }) => (
  <div className={`alert alert--${type}`}>
    {message}
    <span
      className="alert__close-button" 
      onClick={() => toggleAlert()}
    >&times;</span>
  </div>
)
