import { videoComponentProps } from '@/app/utils/types';
import styles from './videoComponent.module.css';

export default function VideoComponent({ src, alt, caption } : videoComponentProps) {

    let isYoutube = src.includes( 'youtube' ) || src.includes( 'youtu.be' );

    return (
        <div className={styles.videoContainer}>
            { 
                !isYoutube && 
                <video className={styles.video} src={src} controls muted autoPlay playsInline loop></video>
            }
            {
                isYoutube &&
                <iframe src={src} width={'auto'} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
        </div>
    )
}