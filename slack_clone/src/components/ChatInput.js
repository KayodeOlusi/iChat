import styled from 'styled-components';
import { Button } from "@mui/material";
import { db } from '../firebase';
import { doc, addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { SendRounded } from '@mui/icons-material';

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
                <Button type = "submit" onClick = { sendMessage } style = {{ fontSize : '11px' }}>
                    <SendRounded />
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
        position : fixed;
        bottom : 35px;
        left : 93%;
        color : var(--slack-color) !important;
    }

    input[type = text] {
        overflow-wrap: break-word;
        word-break: break-all;
        white-space : nowrap;
    }

    @media (max-width: 740px) {
        > form {
            justify-content : left;
            margin-left : 10px;
        }

        > form > input {
            padding : 15px;
            width : 60%;
        }

        > form > button {
            position : fixed;
            bottom : 35px;
            left : 85%;
        }

        > form > input::-webkit-input-placeholder{
            font-size : 10px;
        }
    }

    @media (min-width: 741px) {
        > form > button {
            bottom : 40px !important;
        }
    }
`;