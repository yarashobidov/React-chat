import {Container, Grid} from '@material-ui/core'

function Loader() {
    return (
        <Container>
            <Grid 
                container 
                alignItems="center" 
                justify={"center"} 
                style={{height: window.innerHeight - 50}}
            >
                <Grid container justify={"center"} >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loader