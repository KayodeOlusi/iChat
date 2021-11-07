import styled from 'styled-components';
import { Button } from "@mui/material";
import { db } from '../firebase';
import { doc, addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const ChatInput = ({ channelName, channelId, chatRef }) => {
    const [input, setInput] = useState("")
    const [user] = useAuthState(auth)
   
    const sendMessage = (e) => {
        e.preventDefault()

        if(!channelId) {
            return false
        }

        addDoc(collection(doc(db, "rooms", channelId), "messages"), {
            message: input,
            timestamp : serverTimestamp(),
            user : user.displayName,
            userImage : user.photoURL
        })

        chatRef.current.scrollIntoView({
            behavior : "smooth"
        })

        setInput("")
    }

    return ( 
        <ChatInputContainer>
            <form>
                <input value = { input } onChange = { e => setInput(e.target.value) } type = "text" placeholder = {` Message # ${ channelName ? channelName : "channel" } `}/>
                <Button hidden type = "submit" onClick = { sendMessage }>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
     );
}
 
export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius : 20px;

    > form {
        position: relative;
        display : flex;
        justify-content : center;
    }

    > form > input {
        position : fixed;
        bottom : 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding : 20px;
        outline: none;
    }

    > form > button {
        display : none !important;
    }
`;