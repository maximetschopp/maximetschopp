import styles from './tagContainer.module.css'
import { inter } from '@/app/utils/font'

export default function TagContainer({tags, category} : {tags: string[], category: string}) {

    let color = getColor(category);

    return(
        <div className={styles.tag_container + " " + inter.className}>
            <div className={styles.category} style={{background : color}} >{category}</div>
            {tags.map((tag) => {
                return(
                    <div className={styles.tag}>{tag}</div>
                )
            })}
        </div>
    )
}

function getColor(category: string) {
    switch(category) {
        case "3D-Rendering":
            return "#A88AD8";
        case "Web Development":
            return "#CCDCDF";
        case "2D-Design":
            return "#F9C5B8";
    }
    console.error("Invalid category, no color found for:" + category);
}