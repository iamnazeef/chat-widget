import { FC } from "react";
import styles from "../styles/ChatBubble.module.css";

interface IChatBubble {
    children: React.ReactNode;
    align: "left" | "right"; 
}

const ChatBubble: FC<IChatBubble> = ({ children, align }) => {

    return (
        <div id="chat-interface-bubble" className={`${styles.chatBubble} ${styles[align]}`}>
            {children}
        </div>
    )
}

export default ChatBubble;