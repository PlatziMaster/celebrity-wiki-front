// Import react-router-dom components
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
// Import private and public route
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// Import views
import { LoginView } from '../views/Login/Login';
import { LandingView } from '../views/Landing/Landing';
import { Celebrityview } from '../views/Celebrity/Celebrity';
import { HomepageView} from '../views/Home/Homepage';
// Import components
// --- Here import the components like header and footer ---

export const Routes = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <PrivateRoute exact path="/" component={LandingView} />
        <PublicRoute exact path="/login" component={LoginView} />
        <PublicRoute exact path="/home" component={HomepageView} />
        <PublicRoute exact path="/celebrity/:id" component={Celebrityview} />
        <Redirect to="/" />
      </Switch>
    </main>
  </BrowserRouter>
);