'use client'

import { useEffect, useState } from 'react'
import styles from './tagContainer.module.css'
import { inter } from '@/app/utils/font'

type Props = {
    tags: string[],
    category: string,
    border?: string
    categoryBorder?: string
}

export default function TagContainer({tags, category, border, categoryBorder} : Props) {

    let color = getColor(category);
    const [style, setStyle] = useState({} as React.CSSProperties);

    useEffect(() => {
        let styleObj = {} as React.CSSProperties;
        if (border) {
          styleObj = { ...styleObj, "--border": `${border} !important` } as any;
        }
        if (categoryBorder) {
          styleObj = { ...styleObj, "--categoryBorder": `${categoryBorder} !important` } as any;
        }
        setStyle(styleObj);
      }, [border, categoryBorder]);

    return(
        <div className={styles.tag_container + " " + inter.className}
        style={style}
        >
            <div className={styles.category} style={{background : color}} >{category}</div>
            {tags.map((tag) => {
                return(
                    <div className={styles.tag} key={tag}>{tag}</div>
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