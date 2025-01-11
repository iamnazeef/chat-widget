import useRouter from "../hooks/useRouter";

const Content = () => {
    const { currentPage } = useRouter();
    const Page = currentPage.component;

    return (
        <div id="content" className="content">
            <Page />
        </div>
    )
}

export default Content;