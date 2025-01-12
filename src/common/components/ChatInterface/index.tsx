import { FC, memo } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import styles from  "./index.module.css";

interface IChatInterface {
    hidden: boolean;
}

const ChatInterface: FC<IChatInterface> = ({ hidden }) => {
    const visibility = hidden ? "hide" : "show";

    return (
        <div 
            id="chat-interface"
            className={`${styles.chatInterface} ${styles[visibility]}`}
        >
            <Toolbar />
            <Content />
            <Footer />
        </div>
    )
}

export default memo(ChatInterface);