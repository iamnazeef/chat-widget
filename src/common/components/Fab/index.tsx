import styles from "./index.module.css";
import chatBubbleIcon from "../../icons/ic-chat-bubble.svg";

const Fab = () => {
    return (
        <button className={styles.fab}>
            <img src={chatBubbleIcon} />
        </button>
    )
}

export default Fab;
