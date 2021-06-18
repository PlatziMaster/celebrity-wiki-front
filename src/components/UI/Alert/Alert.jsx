export const Alert = ({ type, message, toggleAlert }) => (
  <div class={`alert alert--${type}`}>
    <span
      class="alert__close-button" 
      onClick={() => toggleAlert()}
    >&times;</span>
    {message}
  </div>
)
