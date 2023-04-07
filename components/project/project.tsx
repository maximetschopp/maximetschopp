import { ProjectProps } from "@/app/utils/types"
import styles from './project.module.css'
import { spaceGrotesk, inter } from '@/app/utils/font'
import TagContainer from "../tagContainer/tagContainer"


export default function Project({name, desktop_thumbnail, mobile_thumbnail, tags, category, grid_span, accentColor} : ProjectProps) {

    let thumbnail = null;
    if(desktop_thumbnail.includes("mp4")){
        thumbnail = <video className={styles.video} src={desktop_thumbnail} autoPlay loop muted playsInline />
    } else {
        thumbnail = <img className={styles.image} src={desktop_thumbnail} />
    }

    return(
        <article className={styles.project} style={{gridColumn : "span " + grid_span, color: accentColor}}>
            <div className={styles.desc + " " + spaceGrotesk.className}>
                <div className={styles.title}>{name}</div>
                <TagContainer category={category} tags={tags} />
            </div>
            {thumbnail}
        </article>
    )
}