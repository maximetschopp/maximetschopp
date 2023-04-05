import { ProjectProps } from "@/app/utils/types"
import styles from './project.module.css'

export default function Project({name, desktop_thumbnail, mobile_thumbnail, tags} : ProjectProps) {
    return(
        <article className={styles.project}>
            <div>{name}</div>
            <img className={styles.bgImage} src={desktop_thumbnail} />
        </article>
    )
}