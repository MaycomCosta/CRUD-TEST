import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, SingUp } from '../pages/index'
import ProtectedRoute from './privateRoute';



function Routes() {  
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={SingUp} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
