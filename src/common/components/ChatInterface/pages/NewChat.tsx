import { FC, useEffect, useState } from "react";
import styles from "./styles/NewChat.module.css";
import ChatBubble from "./components/ChatBubble";
import ChatInput from "./components/ChatInput";
import GlitterIcon from "../../../icons/ic-glitter.svg";
import RightArrowIcon from "../../../icons/ic-arrow-right.svg";
import { ORCA_LOGO_LINK } from "../../../../constants";
import { getLastUserConversation, sendMessage } from "../../../../api/chatInterface";
import { IChat } from "../../../types";
import useRouter from "../hooks/useRouter";
import lodash from "lodash";
import { v4 as uuidv4 } from 'uuid';
import Markdown from 'react-markdown'
import useNavigatorOnLine from "../../../../hooks/useNavigatorOnLine";
import useAPIQueue from "../../../../hooks/useAPIQueue";
import Offline from "../components/Offline";

const RIGHT_CHAT_BUBBLE_BACKGROUND = "rgba(118, 107, 232, 0.14)"

const GREETING_MESSAGE = (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "self-start", gap: "8px" }}>
        <p>Hi, welcome to Orca 👋</p>
        <p>Support AI Agent on deck—shoot your questions my way!</p>
        <p>You can also reach out to the team by enabling 
        human-assist option`</p>
    </div>
)

interface IBubbleIcon {
    align: "left" | "right"
}

const NewChat = () => {
    const [chats, setChats] = useState<IChat[]>([]);
    const [loadingResponse, setLoadingResponse] = useState(false);
    const { currentPage } = useRouter();
    const { status } = useNavigatorOnLine();
    const { executeWithOfflineSupport, isProcessing: isAPIProcessing } = useAPIQueue();

    const setUserMessage = (message: string) => {
        setChats((prev) => ([
            ...prev,
            {
                messageId: "",
                content: message,
                source: "",
                type: "visitor",
                createdAt: 0,
                conversationId: "",
            },
        ]))
    }

    const handleSendMessage = async (message: string) => {
        setUserMessage(message);
        try {
            setLoadingResponse(true);
            const response = await executeWithOfflineSupport(
                'SEND_MESSAGE',
                message,
                async (message) => {
                    const result = await sendMessage(message);
                    setChats((prev) => ([
                        ...prev,
                        result.data
                    ]))
                    return result;
                }
            )

            if (response) {
                console.log('Message sent successfully');
            } else {
                console.log('Message queued for later');
            }
        } catch(e) {
            console.error(e);
        } finally {
            setLoadingResponse(false);
        }
    }

    const fetchPreviousChat = async (conversationId: string) => {
        const response = await getLastUserConversation(conversationId);
        const messages = response.data.conversation.messages;
        setChats((prev) => ([
            ...prev,
            ...messages,
        ]))
    }

    useEffect(() => {
        if (currentPage.params) {
            if (!lodash.isEmpty(currentPage?.params) && currentPage.params?.conversationId) {
                const conversationId  = currentPage.params.conversationId;
                fetchPreviousChat(conversationId);
            } else if (currentPage.params.clearChat) {
                setChats([]);
            }
        }
    }, [currentPage])

    return (
        <div className={styles.newChat}>
            <div id="chat" className={styles.chats}>
                <div className={styles.chatBubble}>
                    <ChatBubble align="left" bubbleIcon={<BubbleIcon align="left" />}>
                        {GREETING_MESSAGE}
                    </ChatBubble>
                </div>
                {chats.map((chat) => {
                    const align = chat.type === "ai" ? "left" : "right"
                    const backgroundColor = chat.type === "ai" ? "" : RIGHT_CHAT_BUBBLE_BACKGROUND;
                    return (
                        <div
                            key={uuidv4()}
                            className={`${styles.chatBubble} ${align === "right" ? styles.floatRight : styles.floatLeft}`}
                        >
                            <ChatBubble
                                align={align}
                                bubbleIcon={<BubbleIcon align={align} />}
                                backgroundColor={backgroundColor}
                            >
                                <Markdown>
                                    {chat.content}
                                </Markdown>
                            </ChatBubble>
                        </div>
                    )
                })}
                {loadingResponse || isAPIProcessing && (
                    <div className={styles.chatBubble}>
                        <LoadingResponse />
                    </div>
                )}
                {!status && <Offline />}
            </div>
            <div id="input" className={styles.input}>
                <ChatInput onClick={handleSendMessage} startIcon={GlitterIcon} endIcon={RightArrowIcon} />
            </div>
        </div>
    )
}

const BubbleIcon: FC<IBubbleIcon> = ({ align }) => {
    const className = align+'BubbleIcon';

    return (
        <div className={styles[className]}>
            <img width="28px" height="28px" src={ORCA_LOGO_LINK} />
        </div>
    )
}

const LoadingResponse = () => {
    return (
        <ChatBubble align="left" bubbleIcon={<BubbleIcon align="left" />}>
            Thinking...
        </ChatBubble>
    )
}

export default NewChat;