import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import LabelIcon from '@material-ui/icons/Label';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';


// function SideBarButtons() {
//     return (
//         <Wrapper>
            
//         </Wrapper>
//     )
// }

// export default SideBarButtons

// const Wrapper= styled.div``

export const sideBarButtons = [
    {
        icon: <InboxIcon />,
        text: 'Inbox'
    },
    {
        icon: <StarIcon />,
        text: 'Starred'
    },
    {
        icon: <WatchLaterIcon />,
        text: 'Snoozed'
    },
    {
        icon: <SendIcon />,
        text: 'Sent'
    },
    {
        icon: <InsertDriveFileIcon />,
        text: 'Drafts'
    },
    {
        icon: <ExpandMoreIcon />,
        text: 'More'
    },
    {
        icon: <ExpandLessIcon />,
        text: 'Less'
    },
    {
        icon: <LabelImportantIcon />,
        text: 'Important'
    },
    {
        icon: <ChatIcon />,
        text: 'Chats'
    },
    {
        icon: <MailIcon />,
        text: 'All Mail'
    },
    {
        icon: <ErrorIcon />,
        text: 'Spam'
    },
    {
        icon: <DeleteIcon />,
        text: 'Trash'
    },
    {
        icon: <LabelIcon />,
        text: 'Categories'
    },
    {
        icon: <SettingsIcon />,
        text: 'Manage labels'
    },
    {
        icon: <AddIcon />,
        text: 'Create new label'
    }

]