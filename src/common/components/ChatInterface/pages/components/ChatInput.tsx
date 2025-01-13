import { FC, KeyboardEvent, useState } from "react";
import styles from "../styles/ChatInput.module.css";

type TKeyboardEvent = KeyboardEvent<HTMLDivElement>;

interface IChatInput {
    startIcon: string;
    endIcon: string;
    onClick: (message: string) => void;
}

const ChatInput: FC<IChatInput> = ({ startIcon, endIcon, onClick }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (!message) return;
        onClick(message);
        setMessage("");
    }

    const handleOnKeyUp = (event: TKeyboardEvent) => {
        if (event.key !== "Enter") return;
        handleSendMessage();
    }

    return (
        <div id="chat-input" className={styles.chatInput} onKeyUp={handleOnKeyUp}>
            <img src={startIcon} height="20px" width="20px" />
            <textarea 
                value={message} 
                onChange={(event) => setMessage(event.target.value)} 
                className={styles.textarea} 
                rows={1} 
                placeholder="Type your message here..." 
            />
            <button 
                onClick={handleSendMessage} 
                title="Ask Orca AI" 
                className={styles.sendButton}
            >
                <img className={styles.endIcon} src={endIcon} height="16px" width="16px" />
            </button>
        </div>
    )
}

export default ChatInput;