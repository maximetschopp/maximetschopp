import styles from './textComponent.module.css';
import { textComponentProps } from '@/app/utils/types';
import { inter } from '@/app/utils/font';

export default function TextComponent({ body, ...rest } : textComponentProps) {

    return (
        <div className={styles.text + ' ' + inter.className}>
            <p className={styles.paragraph}
                dangerouslySetInnerHTML={{__html: body}}
            >
                {/* {body} */}
            </p>
        </div>
    )
}