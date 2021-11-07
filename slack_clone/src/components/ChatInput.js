import styled from 'styled-components';
import { Button } from "@mui/material";
import { db } from '../firebase';
import { doc, addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { useState } from 'react';

const ChatInput = ({ channelName, channelId}) => {
    const [input, setInput] = useState("")
    const qRef = doc(db, "rooms", "messages")
    

    const sendMessage = (e) => {
        e.preventDefault()

        if(!channelId) {
            return false
        }

        addDoc(collection(db, qRef), {
            message: input,
            timestamp : serverTimestamp(),
            user : "Sonny"
        })

        setInput("")
    }

    return ( 
        <ChatInputContainer>
            <form>
                <input value = { input } onChange = { (e) => e.target.value } type = "text" placeholder = {` Message #Room `} />
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