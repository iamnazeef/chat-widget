import { FC } from "react";
import { ORCA_LOGO_LINK } from "../../../../../constants";
import styles from "../styles/ChatListItem.module.css";

interface IChatListItem {
    id: string;
    title: string;
    agent: string;
    time: string; 
    onClick: (id: string) => void;
}

const ChatListItem: FC<IChatListItem> = ({ id, title, agent, time, onClick }) => {
    const handleClick = () => onClick(id);

    return (
        <li className={styles.chatListItem} onClick={handleClick}>
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