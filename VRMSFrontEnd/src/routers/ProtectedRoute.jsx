import { Link,Switch, Route } from "react-router-dom";

function ProtectedRoute(props)
{
    debugger;
    if(true)
    {
        return <Route path={props.path} exact
        component={props.component}/>
    }
    else
    {
      return <Login setUserName={props.setUserName}/>
    }
}

export default ProtectedRoute;