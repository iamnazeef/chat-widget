import styles from "./styles/Toolbar.module.css";
import newChatIcon from "../../../icons/ic-new-chat.svg";
import chatHistoryIcon from "../../../icons/ic-chat-history.svg";
import useRouter from "../hooks/useRouter";
import { ORCA_LOGO_LINK } from "../../../../constants";

const Toolbar = () => {
    const { navigateTo, currentPage } = useRouter();
    const handleNewChat = () =>  navigateTo('newChat', { clearChat: true });
    const handleChatHistory = () => navigateTo('chatHistory');
    const isChatHistoryActive = currentPage.id === "chatHistory";

    return (
        <div id="chat-interface-toolbar" className={styles.toolbar}>
            <div className={styles.logo}>
                <img 
                    height="22px" 
                    width="22px" 
                    className="png" 
                    src={ORCA_LOGO_LINK} 
                />
                <p className={styles.name}>Orca</p>
            </div>
            <div className={styles.actions}>
                {isChatHistoryActive && (
                    <p className={styles.conversations}>
                        <img src={chatHistoryIcon} height="14px" width="14px" />
                        Conversations
                    </p>
                )}
                <button 
                    className={styles.newChat}
                    onClick={handleNewChat} 
                    title="Start new chat" 
                >
                    <img src={newChatIcon} />
                </button>
                {!isChatHistoryActive && (
                    <button 
                        className={styles.chatHistory}
                        onClick={handleChatHistory} 
                        title="Show all conversations" 
                    >
                        <img src={chatHistoryIcon} />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Toolbar;