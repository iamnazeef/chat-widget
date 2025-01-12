import { useState } from "react";
import ChatInterface from "../../common/components/ChatInterface"
import Fab from "../../common/components/Fab";
import styles from "./index.module.css";
import chatBubbleIcon from "../../common/icons/ic-chat-bubble.svg";
import closeIcon from "../../common/icons/ic-x.svg";

const Widget = () => {
    const [showChatInterface, setShowChatInterface] = useState(false);
    const [animate, setAnimate] = useState(false);
    const fabIcon = showChatInterface ? closeIcon : chatBubbleIcon

    const handleClick = () => {
        setAnimate(true);
        setShowChatInterface(prev => !prev);
        setTimeout(() => {
            setAnimate(false);
        }, 500);
    }

    return (
        <div id="widget" className={styles.widget}>
            <ChatInterface hidden={!showChatInterface} />
            <Fab 
                onClick={handleClick} 
                icon={fabIcon}
                animate={animate}
            />
        </div>
    )
}

export default Widget;