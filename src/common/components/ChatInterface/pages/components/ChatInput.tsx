import { FC } from "react";
import styles from "../styles/ChatInput.module.css";

interface IChatInput {
    startIcon: string;
    endIcon: string;
}

const ChatInput: FC<IChatInput> = ({ startIcon, endIcon }) => {
    return (
        <div id="chat-input" className={styles.chatInput}>
            <img src={startIcon} height="20px" width="20px" />
            <textarea className={styles.textarea} rows={1} placeholder="Type your message here..." />
            <button title="Ask Orca AI" className={styles.sendButton}>
                <img className={styles.endIcon} src={endIcon} height="16px" width="16px" />
            </button>
        </div>
    )
}

export default ChatInput;