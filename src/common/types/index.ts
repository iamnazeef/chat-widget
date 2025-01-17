export interface IPagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export interface IChat {
    messageId: string;
    content: string;
    source: string;
    type: "ai" | "visitor";
    createdAt: number;
    conversationId: string;
}
