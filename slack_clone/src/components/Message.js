import styled from 'styled-components'
import moment from 'moment'
import { forwardRef } from 'react';

const Message = forwardRef(({ message, timestamp, user, userImage }, ref) => {
    return ( 
        <MessageContainer ref = { ref }>
            <img src = { userImage } alt="" />

            <MessageInfo>
                <h4>
                    { user }{" "}
                    <span className = "message__time">
                         { moment(timestamp?.toDate()).calendar() }
                    </span>
                </h4>
                <p>{ message }</p>
            </MessageInfo>
        </MessageContainer>
     );
})
 
export default Message;

const MessageContainer = styled.div`
    display : flex;
    align-items : center;
    padding : 20px;

    > img {
        height: 50px;
        border-radius: 8px;
        object-fit: contain;
    }

    @media (max-width: 740px) {
        > img {
            display : none;
        }
    }
`;

const MessageInfo = styled.div`
    padding-left : 20px;
    word-break: break-all;
    > h4 > span {
        color : gray;
        font-weight : 300;
        margin-left : 4px;
        font-size : 10px;
    }

    @media (max-width: 740px) {
        padding-left : 0px;

        > h4 {
            font-size : 11px;
        }

        > p {
            font-size : 9px;
            padding-top : 4px;
        }
    }
`;