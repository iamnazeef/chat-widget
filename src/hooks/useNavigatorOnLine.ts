import { useEffect, useState } from "react"

const getOnLineStatus = () => 
    typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
        ? navigator.onLine : true

const useNavigatorOnLine = () => {
    const [status, setStatus] = useState(getOnLineStatus());

    const setOnLine = () => setStatus(true);
    const setOffline = () => setStatus(false);

    useEffect(() => {
        window.addEventListener('online', setOnLine);
        window.addEventListener('offline', setOffline);

        return () => {
            window.removeEventListener('online', setOnLine);
            window.removeEventListener('offline', setOffline);
        }
    }, [])

    return { status };
}

export default useNavigatorOnLine;