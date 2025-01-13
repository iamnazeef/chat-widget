import { useDispatch, useSelector } from "react-redux";
import { selectRouteSlice, setCurrentRoute } from "../redux/routerSlice";

const useRouter = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectRouteSlice)

    const navigateTo = (path: string, params?: object) => {
        dispatch(setCurrentRoute({ path, params }));
    }

    return { currentPage, navigateTo }
};

export default useRouter;