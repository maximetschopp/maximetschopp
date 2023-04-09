import { imageComponentProps } from '@/app/utils/types';
import styles from './imageComponent.module.css';
import Image from 'next/image';

export default function ImageComponent({ src, alt, caption } : imageComponentProps) {

    alt = alt || 'Image';

    return (
        <div className={styles.image}>
            <Image src={src} alt={alt} fill />
        </div>
    )
}