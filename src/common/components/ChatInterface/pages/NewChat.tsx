import { useState } from "react";
import styles from "./styles/NewChat.module.css";
import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";
import GlitterIcon from "../../../icons/ic-glitter.svg";
import RightArrowIcon from "../../../icons/ic-arrow-right.svg";
import { ORCA_LOGO_LINK } from "../../../../constants";

const RIGHT_CHAT_BUBBLE_BACKGROUND = "rgba(118, 107, 232, 0.14)"

const NewChat = () => {
    const [chats, setChats] = useState([]);

    return (
        <div className={styles.newChat}>
            <div id="chat" className={styles.chats}>
                <ChatBubble align="left" leftBubbleIcon={<LeftBubbleIcon />}>
                    <p>Hi, welcome to Orca 👋</p>
                    <p>Support AI Agent on deck—shoot your questions my way!</p>
                    <p>You can also reach out to the team by enabling human-assist option</p>
                </ChatBubble>
            </div>
            <div id="input" className={styles.input}>
                <ChatInput startIcon={GlitterIcon} endIcon={RightArrowIcon} />
            </div>
        </div>
    )
}

const LeftBubbleIcon = () => {
    return (
        <div className={styles.leftBubbleIcon}>
            <img width="28px" height="28px" src={ORCA_LOGO_LINK} />
        </div>
    )
}

export default NewChat;