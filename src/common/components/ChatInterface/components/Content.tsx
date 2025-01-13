import useRouter from "../hooks/useRouter";
import { routeComponent } from "../routes";
import styles from "./styles/Content.module.css";

const Content = () => {
    const { currentPage } = useRouter();
    const Page = routeComponent[currentPage.id];

    return (
        <div id="content" className={styles.content}>
            <Page />
        </div>
    )
}

export default Content;