import httpService from "../../utils/httpService";

export const setupChatWidget = (appId: string) => {
    return httpService.post("/chat/visitor/", { appId });
}
