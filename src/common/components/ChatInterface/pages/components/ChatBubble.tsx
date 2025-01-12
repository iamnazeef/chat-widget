import { FC } from "react";
import styles from "../styles/ChatBubble.module.css";

interface IChatBubble {
    children: React.ReactNode;
    align: "left" | "right";
    leftBubbleIcon?: React.ReactNode;
    rightBubbleIcon?: React.ReactNode;
    backgroundColor?: string;
}

const ChatBubble: FC<IChatBubble> = ({ 
    children, align, backgroundColor, leftBubbleIcon, rightBubbleIcon }) => {

    return (
        <div 
            id="chat-interface-bubble-container" 
            className={styles.chatBubbleContainer}
        >
            {align === "left" && 
            <div 
                id="avatar" 
                className={styles.leftBubbleIcon}
            >
                {leftBubbleIcon}
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
            {align === "right" && <div id="avatar" className={styles.rightBubbleIcon}>{rightBubbleIcon}</div>}
        </div>
    )
}

export default ChatBubble;