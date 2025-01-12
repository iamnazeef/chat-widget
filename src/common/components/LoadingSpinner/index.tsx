import styles from "./index.module.css";
import spinnerIcon from "../../icons/ic-spinner.svg";

const LoadingSpinner = () => {
    return (
        <div id="spinner">
            <img src={spinnerIcon} className={styles.spinner} />
        </div>
    )
}

export default LoadingSpinner;