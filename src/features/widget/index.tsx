import { useEffect, useState, memo } from "react";
import ChatInterface from "../../common/components/ChatInterface"
import Fab from "../../common/components/Fab";
import styles from "./index.module.css";
import chatBubbleIcon from "../../common/icons/ic-chat-bubble.svg";
import closeIcon from "../../common/icons/ic-x.svg";
import { setupChatWidget } from "../../api/widget";
import { useDispatch } from "react-redux";
import { saveWidgetSetupData } from "./redux/widgetSetupSlice";
import { getLastUserMessage } from "../../api/chatInterface";
import useRouter from "../../common/components/ChatInterface/hooks/useRouter";

const Widget = () => {
    const dispatch = useDispatch();
    const { navigateTo } = useRouter();
    const { search } = window.location;
    const searchParams = new URLSearchParams(search);
    const [showChatInterface, setShowChatInterface] = useState(false);
    const fabIcon = showChatInterface ? closeIcon : chatBubbleIcon;

    const handleClick = () => {
        setShowChatInterface(prev => !prev);
    }

    const initiateChatWidget = async (appId: string) => {
        const response = await setupChatWidget(appId);
        dispatch(saveWidgetSetupData(response.data));
    }

    const getLastMessage = async () => {
        const response = await getLastUserMessage();
        if (response.data && response.data?.conversations) {
            const conversations = response.data.conversations || [];
            if (conversations.length > 0) {
                const conversationId = conversations[0]?.conversationId;
                navigateTo('newChat', { conversationId });;
            }
        }
    }
    
    useEffect(() => {
        const APP_ID = import.meta.env.VITE_APP_ID || searchParams.get('appId');
        initiateChatWidget(APP_ID);
        getLastMessage();
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