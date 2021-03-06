import { useState } from 'react';

import styles from '../../styles/App.module.css';

const PublicPageImage = ({ size }: { size: number }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div title="Public page" tabIndex={0}>
            <svg 
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                width={size} height={size * 1.25} viewBox="0 0 55 69" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    className={hovered ? styles.imageHovered : styles.imageUnhovered}
                    d="M34.375 0H6.875C5.05164 0 3.30295 0.726962 2.01364 2.02096C0.724328 3.31496 0 5.07001 0 6.9V62.1C0 63.93 0.724328 65.685 2.01364 66.979C3.30295 68.273 5.05164 69 6.875 69H48.125C49.9484 69 51.697 68.273 52.9864 66.979C54.2757 65.685 55 63.93 55 62.1V20.7L34.375 0ZM48.125 62.1H6.875V6.9H30.9375V24.15H48.125V62.1Z" 
                    fill="#EFEFEF"
                />
            </svg>
        </div>
    );
}

export default PublicPageImage;
