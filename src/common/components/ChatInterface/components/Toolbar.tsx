import styles from "./styles/Toolbar.module.css";
import newChatIcon from "../../../icons/ic-new-chat.svg";
import chatHistoryIcon from "../../../icons/ic-chat-history.svg";
import useRouter from "../hooks/useRouter";

const Toolbar = () => {
    const { navigateTo, currentPage } = useRouter();
    const handleNewChat = () =>  navigateTo('new-chat');
    const handleChatHistory = () => navigateTo('chat-history');
    const isChatHistoryActive = currentPage.id === "chatHistory";

    return (
        <div id="chat-interface-toolbar" className={styles.toolbar}>
            <div className={styles.logo}>
                <img 
                    height="22px" 
                    width="22px" 
                    className="png" 
                    src="https://app.getorca.ai/docgen/assets/docGenLogo-960f4560.png" 
                />
                <p className={styles.name}>Orca</p>
            </div>
            <div className={styles.actions}>
                <button 
                    className={styles.newChat}
                    onClick={handleNewChat} 
                    title="Start new chat" 
                >
                    <img src={newChatIcon} />
                </button>
                {!isChatHistoryActive && <button 
                    className={styles.chatHistory}
                    onClick={handleChatHistory} 
                    title="Show all conversations" 
                >
                    <img src={chatHistoryIcon} />
                </button>}
            </div>
        </div>
    )
}

export default Toolbar;