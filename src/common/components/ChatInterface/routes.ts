import { Routes } from "./models";
import ChatHistory from "./pages/ChatHistory";
import NewChat from "./pages/NewChat";

const routes: Routes = {
    'new-chat': {
        id: "newChat",
        component: NewChat,
        title: "New Chat"
    },
    'chat-history': {
        id: "chatHistory",
        component: ChatHistory,
        title: "Chat History",
    },
}

export default routes;