'use client';

import { ProjectProps } from "@/app/utils/types"
import styles from './project.module.css'
import { spaceGrotesk, inter } from '@/app/utils/font'
import TagContainer from "../tagContainer/tagContainer"
import Thumbnail from "../Thumbnail/thumbnail";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Project({name, desktop_thumbnail, mobile_thumbnail, tags, category, grid_span, accentColor, dir} : ProjectProps) {

    desktop_thumbnail = desktop_thumbnail ? desktop_thumbnail : "mobile_thumbnail";
    const [thumbnailUrl, setThumbnailUrl] = useState(desktop_thumbnail);

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth / window.innerHeight < 2/3) {
                setThumbnailUrl(mobile_thumbnail);
            } else {
                setThumbnailUrl(desktop_thumbnail);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [desktop_thumbnail, mobile_thumbnail]);

    // swap url on window resize to mobile thumbnail


    return(
        <Link href={"/projects/" + dir} style={{gridColumn : "span " + grid_span, textDecoration : 'none'}}>
        <article className={styles.project} style={{gridColumn : "span " + grid_span, color : accentColor}}>
            <div className={styles.desc + " " + spaceGrotesk.className}>
                <div className={styles.title}>{name}</div>
                <TagContainer category={category} tags={tags} tagColor={accentColor} categoryColor={accentColor} />
            </div>
            <Thumbnail src={thumbnailUrl} classname={styles.thumbnail} />
        </article>
        </Link>
    )
}