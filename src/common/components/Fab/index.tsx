import styles from "./index.module.css";
import { FC } from "react";

interface IFab {
    onClick: () => void;
    icon: string;
    animate: boolean;
}

const Fab: FC<IFab> = ({ onClick, icon, animate }) => {
    const animateClassName = animate ? "animate" : ""
    const handleClick = () => onClick();

    return (
        <button className={styles.fab} onClick={handleClick}>
            <img src={icon} className={styles[animateClassName]} />
        </button>
    )
}

export default Fab;
