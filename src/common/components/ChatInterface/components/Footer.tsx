import orcaLogo from "../../../icons/ic-orca-logo.svg";
import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <div id="chat-interface-footer" className={styles.footer}>
            <a className={styles.hyperLink} href="https://getorca.ai" target="_blank" rel="noopener">
                <img src={orcaLogo} width={20} height={18} />
                <p>Powered by ORCA AI</p>
            </a>
        </div>
    )
}

export default Footer;