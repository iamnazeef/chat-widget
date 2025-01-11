import useRouter from "../hooks/useRouter";
import styles from "./styles/Content.module.css";

const Content = () => {
    const { currentPage } = useRouter();
    const Page = currentPage.component;

    return (
        <div id="content" className={styles.content}>
            <Page />
        </div>
    )
}

export default Content;