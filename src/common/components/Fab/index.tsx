import styles from "./index.module.css";
import { FC, useState } from "react";

interface IFab {
    onClick: () => void;
    icon: string;
}

const Fab: FC<IFab> = ({ onClick, icon }) => {
    const [animateFabIcon, setAnimateFabIcon] = useState(false);
    const [animateFabSize, setAnimateFabSize] = useState(false);
    const animateIcon = animateFabIcon ? "animateIcon" : "";
    const animateFab = animateFabSize ? "animateSize" : "";

    const animate = () => {
        setAnimateFabIcon(true);
        setAnimateFabSize(true);
        setTimeout(() => {
            setAnimateFabIcon(false);
        }, 500);
        setTimeout(() => {
            setAnimateFabSize(false);
        }, 200);
    }

    const handleClick = () => {
        animate();

        /** Fab click action */
        onClick();
    }

    return (
        <button className={`${styles.fab} ${styles[animateFab]}`} onClick={handleClick}>
            <img src={icon} className={styles[animateIcon]} />
        </button>
    )
}

export default Fab;
