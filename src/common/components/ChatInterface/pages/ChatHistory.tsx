import { useEffect, useState } from "react";
import ChatListItem from "./components/ChatListItem";
import { getChatHistory } from "../../../../api/chatInterface";
import LoadingSpinner from "../../LoadingSpinner";

const ChatHistory = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleChatClick = (id: string) => {
        console.log(id)
    }

    const fetchChatHistory = async () => {
        try {
            setIsLoading(true);
            const response = await getChatHistory();
            console.log(response.data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchChatHistory();
    }, [])

    if (isLoading)
        return <LoadingSpinner />

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