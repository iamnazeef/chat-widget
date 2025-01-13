import { useEffect, useState } from "react";
import ChatListItem from "./components/ChatListItem";
import { getChatHistory } from "../../../../api/chatInterface";
import LoadingSpinner from "../../LoadingSpinner";
import { IChat } from "../../../types";
import { timeAgo } from "../../../../utils/timeAgo";
import useRouter from "../hooks/useRouter";
import styles from "./styles/ChatHistory.module.css";

interface Conversation {
    conversationId: string;
    createdAt: number;
    organisationId: number;
    type: "ai" | "visitor";
    visitorType: string;
    lastMessage: IChat;
}

const ChatHistory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [chats, setChats] = useState<Array<Conversation>>([]);
    const { navigateTo } = useRouter();

    const handleChatClick = (id: string) => {
        navigateTo('newChat', { conversationId: id });
    }

    const fetchChatHistory = async () => {
        try {
            setIsLoading(true);
            const response = await getChatHistory();
            console.log(response.data);
            setChats(response.data?.conversations);
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
        <ul id="chat-list" className={styles.chatHistory}>
            {chats.map(chat => (
                <ChatListItem 
                    key={chat.conversationId}
                    id={chat.conversationId}
                    title={chat.lastMessage.content}
                    agent="Orca AI"
                    time={timeAgo(chat.createdAt)}
                    onClick={handleChatClick}
                />  
            ))}
        </ul>
    )
}

export default ChatHistory;