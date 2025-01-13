import { Routes } from "./models";
import ChatHistory from "./pages/ChatHistory";
import NewChat from "./pages/NewChat";

export const routeComponent: { [key: string]: React.ComponentType } = {
    'newChat': NewChat,
    'chatHistory': ChatHistory,
}

const routes: Routes = {
    'newChat': {
        id: "newChat",
        title: "New Chat",
        params: {}
    },
    'chatHistory': {
        id: "chatHistory",
        title: "Chat History",
    },
}

export default routes;