import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { db } from '../firebase';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { doc, collection, orderBy, query } from '@firebase/firestore'
import Message from './Message';
import { useEffect, useRef } from 'react';
import FlipMove from 'react-flip-move'

const Chat = () => {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId)
    const [ roomDetails ] = useDocument(
        roomId && doc(db, "rooms", roomId)
    )
    const [ roomMessages, loading ] = useCollection(roomId && query(collection(doc(db, "rooms", roomId), "messages"), orderBy("timestamp", "asc")))

    useEffect(() => {
        chatRef?.current.scrollIntoView({
            behavior : "smooth"
        })
    }, [roomId, loading])

    // console.log(roomDetails?.data())
    // console.log(roomMessages)

    return ( 
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong># { roomDetails?.data().name }</strong></h4>
                        <StarBorderOutlined />
                    </HeaderLeft>
               
                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                        </p>
                    </HeaderRight>
                </Header>
               
                <ChatMessages>
                    
                        {
                            roomMessages?.docs.map(doc => {
                                const { message, user, userImage, timestamp } = doc.data()
                                    return (
                                        <FlipMove>
                                        <Message key = { doc.id } message = { message } user = { user } userImage = { userImage } timestamp = { timestamp }  />
                                        </FlipMove>
                                )
                            })
                        }
                    
                    <ChatBottom ref = { chatRef } />
                </ChatMessages>
               
                <ChatInput channelName = { roomDetails?.data().name } channelId = { roomId } chatRef = { chatRef } />
            </>
        </ChatContainer>
     );
}
 
export default Chat;

const ChatBottom = styled.div`
    padding-bottom : 200px;
`;

const ChatContainer = styled.div`
    flex : 0.7;
    flex-grow: 1;
    overflow-y : scroll;
    margin-top: 70px;
`;

const Header = styled.div`
    display : flex;
    justify-content : space-between;
    padding 20px;
    border-bottom: 1px solid lightgray;

    @media (max-width: 740px) {
        padding : 5px;
    }
`;

const HeaderLeft = styled.div`
    display : flex;
    align-items: center;

    > h4 {
        display : flex;
        text-transform : lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left : 10px;
        font-size : 10px;
    }

    @media (max-width: 740px) {
        > h4 {
            font-size: 12px;
        }
    
        > h4 > .MuiSvgIcon-root {
            font-size : 8px;
        }
    }
`;

const HeaderRight = styled.div`
    > p {
        display : flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right : 5px !important;
        font-size: 16px;
    }

    @media (max-width: 740px) {
        display : none;
    }
`;

const ChatMessages = styled.div``;



