import ChatListItem from "./components/ChatListItem";

const ChatHistory = () => {
    const handleChatClick = (id: string) => {
        console.log(id)
    }

    return (
        <ul id="chat-list">
            <ChatListItem 
                id="1"
                title="I Dont Have Any Idea?" 
                agent="Orca AI"
                time="10 hours ago"
                onClick={handleChatClick}
            />
        </ul>
    )
}

export default ChatHistory;