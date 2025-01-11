import styles from "./styles/Toolbar.module.css";
import newChatIcon from "../../../icons/ic-new-chat.svg";
import chatHistoryIcon from "../../../icons/ic-chat-history.svg";

const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
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
                <button className={styles.newChat}>
                    <img src={newChatIcon} />
                </button>
                <button className={styles.chatHistory}>
                    <img src={chatHistoryIcon} />
                </button>
            </div>
        </div>
    )
}

export default Toolbar;