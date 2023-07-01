import { useEffect } from 'react'
import styles from './tagContainer.module.css'
import { inter } from '@/app/utils/font'

type Props = {
    tags: string[],
    category: string,
    tagColor?: string
    categoryColor?: string
}

export default function TagContainer({tags, category, tagColor, categoryColor} : Props) {

    let categoryBackgroundColor = getColor(category);
    console.log(tagColor);

    return(
        <div className={styles.tag_container + " " + inter.className}
        >
            <div 
                className={styles.category}
                style={{
                    background : categoryBackgroundColor, 
                    border: "1px solid " + categoryColor + " !important",
                    color: categoryColor,
                }}
            >
                {category}
            </div>
            {tags.map((tag) => {
                return(
                    <div className={styles.tag} key={tag}
                    style={{
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: tagColor,
                        color: tagColor,
                    }}
                    >{tag}</div>
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
            return "#82b2bb";
        case "2D-Design":
            return "#F9C5B8";
    }
    console.error("Invalid category, no color found for:" + category);
}