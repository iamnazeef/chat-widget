import httpService from "../../utils/httpService"

export const getChatHistory = (page = 1, limit = 10) => {
    return httpService.get('/chat/visitor/conversation', { page, limit });
}

export const setupChatWidget = (appId: string) => {
    return httpService.post("/chat/visitor/", { appId });
}
