// Import libraries
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const Component = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render = {props => {
        // Check if token exists
        if (token) {
          // If token exists return view
          return <Component {...props} />
        } else {
          // If token doesn't exists redirect to login view
          return (
            <Redirect 
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }} 
            />
          )
        }
      }}
    />
  )
}

// Map state from global state to component props
const mapStateToProps = state => ({
  token: state.authReducer.token,
});

// Connect component with Redux
export const PrivateRoute = connect(mapStateToProps, null)(Component);