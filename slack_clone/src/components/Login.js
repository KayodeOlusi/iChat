import { Button } from '@mui/material';
import styled from 'styled-components'
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from '../firebase';

const Login = () => {
    const signIn = e => {
        e.preventDefault()
        signInWithPopup(auth, provider).catch(error => alert(error.message))
    }

    return ( 
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://images-platform.99static.com/Hrj0IDVBktRdEibybcXiOLqpgtE=/102x102:921x921/500x500/top/smart/99designs-contests-attachments/91/91476/attachment_91476002" alt="" />

                <h3>Sign in to LetsChat</h3>

                <Button onClick = { signIn }>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
     );
}
 
export default Login;

const LoginContainer = styled.div`
    background-color : #f8f8f8;
    height : 100vh;
    display : grid;
    place-items : center;
`;

const LoginInnerContainer = styled.div`
    padding : 100px;
    text-align : center;
    background-color : white;
    border-radius : 10px;
    box-shadow : 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

 > img {
     object-fit: contain;
     height : 200px;
     margin-bottom : 40px;
 }

 > button {
    padding : 15px !important;
    margin-top : 50px;
    text-transform : inherit !important;
    background-color : #ad3d6f;
    color : white;
 }

 > button: hover{
     background-color : #ad3d6f;
     opacity : 0.5;
 }
`;