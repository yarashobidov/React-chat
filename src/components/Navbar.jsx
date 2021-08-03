import { Grid, Button, AppBar,Toolbar } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {LOGIN_ROUTE} from '../util/const'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useContext } from 'react'
import { Context } from '../index'

function Navbar() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar style={{background: 'linear-gradient(-45deg, #39249a, #e14e42)'}} position="static">
            <Toolbar variant="dense" >
                <h3>Obidov Yarash</h3>
                <Grid container justifyContent={'flex-end'}>
                    {user ? <Button onClick={() => auth.signOut()} variant="outlined">EXIT</Button>
                           : <NavLink to={LOGIN_ROUTE}>
                                <Button variant="outlined">LOGIN</Button>
                            </NavLink>
                    }                    
                </Grid>               
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
