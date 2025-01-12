import { FC } from "react";
import { ORCA_LOGO_LINK } from "../../../../../constants";
import styles from "../styles/ChatListItem.module.css";

interface IChatListItem {
    title: string;
    agent: string;
    time: string;   
}

const ChatListItem: FC<IChatListItem> = ({ title, agent, time }) => {
    return (
        <li className={styles.chatListItem}>
            <div className="logo">
                <img src={ORCA_LOGO_LINK} height="24px" width="24px" />
            </div>
            <div className={styles.chatInfo}>
                <p className={styles.title}>{title}</p>
                <div className={styles.metaData}>
                    <p className={styles.agentName}>{agent}</p>
                    <span>&bull;</span>
                    <p className={styles.time}>{time}</p>
                </div>
            </div>
        </li>
    )
}

export default ChatListItem;