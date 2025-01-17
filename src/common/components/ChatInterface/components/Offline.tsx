import styles from "./styles/Offline.module.css";

const Offline = () => {
    return (
        <div id="offline" className={styles.offline}>
            <p>You're offline</p>
            <i>Your messages will be sent once you're back online</i>
        </div>
    )
}

export default Offline;