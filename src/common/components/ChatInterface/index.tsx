import Footer from "./components/Footer";
import Toolbar from "./components/Toolbar";
import styles from  "./index.module.css";

const ChatInterface = () => {
    return (
        <div id="chat-interface" className={styles.chatInterface}>
            <Toolbar />
            <Footer />
        </div>
    )
}

export default ChatInterface;