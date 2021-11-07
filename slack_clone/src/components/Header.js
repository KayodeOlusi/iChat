import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { AccessTime, HelpOutline, Search } from '@mui/icons-material';
import { auth } from '../firebase';
import { signOut } from '@firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    return ( 
        <HeaderContainer className="header">
            <HeaderLeft>
                <HeaderAvatar onClick = {() => signOut(auth) } src = { user.photoURL } alt = { user.displayName } />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <Search />
                <input type="text" placeholder = "Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
     );
}
 
export default Header;

const HeaderContainer = styled.div`
    display : flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor : pointer;
    :hover{
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    backgrund-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input {
        background-color: transparent !important;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 20px;
    }
`;