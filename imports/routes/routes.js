import {Router, Route , browserHistory} from 'react-router';
import NotFound from './../ui/NotFound';
import PageContainer from './../ui/PageContainer';


export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={PageContainer}/>
    <Route path="*" component={NotFound}/>
  </Router>

);
