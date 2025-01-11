import OrcaLogo from "../../../icons/ic-orca-logo.svg";
import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <a className={styles.HyperLink} href="https://getorca.ai" target="_blank" rel="noopener">
                <img src={OrcaLogo} width={20} height={18} />
                <p>Powered by ORCA AI</p>
            </a>
        </div>
    )
}

export default Footer;