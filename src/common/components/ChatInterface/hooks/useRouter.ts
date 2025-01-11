import { useDispatch, useSelector } from "react-redux";
import { selectRouteSlice, setCurrentRoute } from "../redux/routerSlice";

const useRouter = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectRouteSlice)

    const navigateTo = (route: string) => {
        dispatch(setCurrentRoute(route));
    }

    return { currentPage, navigateTo }
};

export default useRouter;