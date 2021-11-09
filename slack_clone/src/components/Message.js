import styled from 'styled-components'
import moment from 'moment'


const Message = ({ message, timestamp, user, userImage }) => {
    console.log(timestamp)
    return ( 
        <MessageContainer>
            <img src = { userImage } alt="" />

            <MessageInfo>
                <h4>
                    { user }{" "}
                    <span>
                         { moment(timestamp?.toDate()).calendar() }
                    </span>
                </h4>
                <p>{ message }</p>
            </MessageInfo>
        </MessageContainer>
     );
}
 
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
`;

const MessageInfo = styled.div`
    padding-left : 20px;

    > h4 > span {
        color : gray;
        font-weight : 300;
        margin-left : 4px;
        font-size : 10px;
    }
`;