import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import SidebarOption from './SidebarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';
import { query, collection } from '@firebase/firestore'
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
    const q = query(collection(db, "rooms"));
    const [ channels ] = useCollection(q)
    const [user] = useAuthState(auth)
    
    return ( 
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Wayne Enterprise</h2>
                    <h3>
                        <CircleIcon />
                        { user.displayName }
                    </h3>
                </SidebarInfo>
                    <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon = { InsertComment } title = "Threads" />
            <SidebarOption Icon = { Inbox } title = "Mentions &amp; reactions" />
            <SidebarOption Icon = { Drafts } title = "Saved items" />
            <SidebarOption Icon = { BookmarkBorder } title = "Channel browser" />
            <SidebarOption Icon = { PeopleAlt } title = "People &amp; user groups" />
            <SidebarOption Icon = { Apps } title = "Apps" />
            <SidebarOption Icon = { FileCopy } title = "FileBrowser" />
            <SidebarOption Icon = { ExpandLess } title = "Show less" />
            <hr />
            <SidebarOption Icon = { ExpandMore } title = "Channel" />
            <hr />
            <SidebarOption Icon = { Add } addChannelOption title = "Add Channel" />

            { channels?.docs.map( doc => (
                <SidebarOption title = { doc.data().name } key = { doc.id } id = { doc.id } />
               ))
            }
        </SidebarContainer>
     );
}
 
export default Sidebar;

const SidebarContainer = styled.div`
    color : white;
    background-color : var(--slack-color);
    flex : 0.3;
    max-width: 260px;
    margin-top: 60px;
    border-top: 1px sold #49274b;
    overflow-y : scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    > hr {
        margin-top : 10px;
        margin-bottom : 10px;
        border : 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding : 8px;
        color : #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex : 1;

    > h2 {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 10px;
        margin-top: 1px;
        margin-right : 5px;
        color: green;
    }
`;

