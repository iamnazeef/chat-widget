import { useEffect, useRef, useState } from "react";
import useNavigatorOnLine from "./useNavigatorOnLine";

interface QueueItem<T> {
    id: string;
    timestamp: number;
    action: {
      type: string;
      payload: T;
      handler: (payload: T) => Promise<any>;
    };
}

const useAPIQueue = () => {
    const { status: isNavigatorOnLine } = useNavigatorOnLine();
    const [queue, setQueue] = useState<QueueItem<any>[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const processingQueue = useRef(false);

    const processQueue = async () => {
        if (processingQueue.current || queue.length === 0) return;

        processingQueue.current = true;
        setIsProcessing(true);

        try {
            const currentQueue = [...queue];
            for (const item of currentQueue) {
                try {
                    await item.action.handler(item.action.payload);
                    // Remove successfully processed item from queue
                    setQueue(prev => prev.filter(queueItem => queueItem.id !== item.id));
                } catch (error) {
                    console.error(`Failed to process queue item ${item.id}: `, error);
                    // Keep item in queue if processing fails
                    break;
                }
            }
        } finally {
            setIsProcessing(false);
            processingQueue.current = false;
        }
    }

    const addToQueue = <T, >(
        type: string,
        payload: T,
        handler: (payload: T) => Promise<any>,
    ) => {
        const queueItem: QueueItem<T> = {
            id: `${type}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            timestamp: Date.now(),
            action: {
                type,
                payload,
                handler,
            }
        }

        setQueue(prev => [...prev, queueItem]);
    }

    const executeWithOfflineSupport = async <T, >(
        type: string,
        payload: T,
        handler: (payload: T) => Promise<any>,
    ) => {
        if (!isNavigatorOnLine) {
            addToQueue(type, payload, handler);
            return null;
        }

        try {
            return await handler(payload);
        } catch (error) {
            // If the action fails, add it to the queue
            addToQueue(type, payload, handler);
            throw error;
        }
    }

    useEffect(() => {
        const handleOnline = () => {
            processQueue();
        };

        if (isNavigatorOnLine) handleOnline();
    }, [queue, isNavigatorOnLine]);

    return { executeWithOfflineSupport, isProcessing }
}

export default useAPIQueue;