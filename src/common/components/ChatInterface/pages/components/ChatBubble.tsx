import { FC } from "react";
import styles from "../styles/ChatBubble.module.css";

interface IChatBubble {
    children: React.ReactNode;
    align: "left" | "right";
    bubbleIcon?: React.ReactNode;
    backgroundColor?: string;
}

const ChatBubble: FC<IChatBubble> = ({ 
    children, align, backgroundColor, bubbleIcon }) => {

    return (
        <div 
            id="chat-interface-bubble-container" 
            className={styles.chatBubbleContainer}
        >
            {align === "left" && 
            <div 
                id="avatar" 
                className={styles.bubbleIcon}
            >
                {bubbleIcon}
            </div>}
            <div
                id="chat-interface-bubble" 
                style={{ 
                    backgroundColor,
                }} 
                className={`${styles.chatBubble} ${styles[align]}`}
             >
                {children}
            </div>
            {align === "right" &&
            <div 
                id="avatar" 
                className={styles.bubbleIcon}
            >
                {bubbleIcon}
            </div>}
        </div>
    )
}

export default ChatBubble;