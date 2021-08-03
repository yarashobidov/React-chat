import {Route, Switch, Redirect} from 'react-router-dom'
import { previteRoutes, publicRoutes } from '../routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../util/const'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../index'
 
function AppRouter() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ? (
        <Switch>
            {previteRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact={true} />
            )}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({path, component}) => 
                <Route key={path} path={path} component={component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter
