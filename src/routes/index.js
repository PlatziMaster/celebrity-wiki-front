// Import react-router-dom components
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
// Import private and public route
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// Import views
import { LoginView } from '../views/Login/Login';
import { Celebrityview } from '../views/Celebrity/Celebrity';
import { HomepageView} from '../views/Home/Homepage';
import { Artistview } from '../views/Artist/Artist';
// Import components
// --- Here import the components like header and footer ---

export const Routes = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <PublicRoute exact path="/login" component={LoginView} />
        <PrivateRoute exact path="/" component={HomepageView} />
        <PrivateRoute exact path="/celebrity/:id" component={Celebrityview} />
        <PrivateRoute exact path="/artist/:id" component={Artistview} />
        <Redirect to="/" />
      </Switch>
    </main>
  </BrowserRouter>
);