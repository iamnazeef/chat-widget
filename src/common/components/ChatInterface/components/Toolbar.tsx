import styles from "./styles/Toolbar.module.css";
import NewChatIcon from "../../../icons/ic-new-chat.svg";
import ChatHistoryIcon from "../../../icons/ic-chat-history.svg";

const Toolbar = () => {
    return (
        <div className={styles.Toolbar}>
            <div className={styles.Logo}>
                <img 
                    height="22px" 
                    width="22px" 
                    className="png" 
                    src="https://app.getorca.ai/docgen/assets/docGenLogo-960f4560.png" 
                />
                <p className={styles.Name}>Orca</p>
            </div>
            <div className={styles.Actions}>
                <button className={styles.NewChat}>
                    <img src={NewChatIcon} />
                </button>
                <button className={styles.ChatHistory}>
                    <img src={ChatHistoryIcon} />
                </button>
            </div>
        </div>
    )
}

export default Toolbar; 