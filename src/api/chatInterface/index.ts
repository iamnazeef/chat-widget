import httpService from "../../utils/httpService"

export const getChatHistory = (page = 1, limit = 10) => {
    return httpService.get('/chat/visitor/conversation', { page, limit });
}

export const getLastUserMessage = (page = 1, limit = 1) => {
    return httpService.get('/chat/visitor/conversation', { page, limit });
}

export const getLastUserConversation = (conversationId: string, page = 1, limit = 100) => {
    return httpService.get(`/chat/visitor/conversation/${conversationId}`, { page, limit })    
}

export const sendMessage = (message: string) => {
    return httpService.post('/chat/visitor/message', { message });
}
