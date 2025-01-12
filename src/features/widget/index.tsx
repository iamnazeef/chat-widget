import { useEffect, useState, memo } from "react";
import ChatInterface from "../../common/components/ChatInterface"
import Fab from "../../common/components/Fab";
import styles from "./index.module.css";
import chatBubbleIcon from "../../common/icons/ic-chat-bubble.svg";
import closeIcon from "../../common/icons/ic-x.svg";
import { setupChatWidget } from "../../api/chatInterface";
import { useDispatch } from "react-redux";
import { saveWidgetSetupData } from "./redux/widgetSetupSlice";

const Widget = () => {
    const [showChatInterface, setShowChatInterface] = useState(false);
    const dispatch = useDispatch();
    const fabIcon = showChatInterface ? closeIcon : chatBubbleIcon;

    const handleClick = () => {
        setShowChatInterface(prev => !prev);
    }

    const initiateChatWidget = async (appId: string) => {
        const response = await setupChatWidget(appId);
        dispatch(saveWidgetSetupData(response.data));
    }
    
    useEffect(() => {
        // Todo: Access APP_ID from URL
        const APP_ID = import.meta.env.VITE_APP_ID;
        initiateChatWidget(APP_ID)
    }, [])

    return (
        <div id="widget" className={styles.widget}>
            <ChatInterface hidden={!showChatInterface} />
            <Fab 
                onClick={handleClick} 
                icon={fabIcon}
            />
        </div>
    )
}

export default memo(Widget);