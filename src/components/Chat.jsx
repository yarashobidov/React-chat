import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core'
import {  useContext, useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../index'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import firebase from 'firebase'

function Chat() {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    
    const [value, setValue] = useState("")
    const [messages, loading, error] = useCollectionData(
        firestore.collection('messages').orderBy("createdAt")
    )
    const sendMessage = async () => {
        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue("")
    }


    if(loading){
        return <Loader />
    }
    return (
        <Container>
            <Grid 
                container 
                style={{height: window.innerHeight - 50, marginTop: 5}}
                justify="center"
            >
                <div 
                    style={{
                        width: '90%', 
                        height: '60vh', 
                        border: '1px solid gray', 
                        overflowX: 'auto'
                    }}
                >
                    {messages.map(message => 
                        <div>
                            <Grid container>
                                <Avatar />
                            </Grid>
                        </div>
                    )}
                </div>
                <Grid 
                    container 
                    direction="column"
                    alignItems="flex-end"
                    style={{width: '88%'}}
                >
                    <TextField  
                        placeholder="Message" 
                        fullWidth 
                        variant="outlined" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button 
                        variant="outlined"
                        style={{background: 'green', marginTop: 2}}
                        onClick={sendMessage}
                    >Send Message</Button>
                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Chat


