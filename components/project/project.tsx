'use client';

import { ProjectProps } from "@/app/utils/types"
import styles from './project.module.css'
import { spaceGrotesk, inter } from '@/app/utils/font'
import TagContainer from "../tagContainer/tagContainer"
import Thumbnail from "../Thumbnail/thumbnail";
// import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useState } from "react";

export default function Project({name, desktop_thumbnail, mobile_thumbnail, tags, category, grid_span, accentColor, dir} : ProjectProps) {

    // let thumbnail = null;
    // if(desktop_thumbnail.includes("mp4")){
    //     thumbnail = <video className={styles.video + " zoomtofill"} src={desktop_thumbnail} autoPlay loop muted playsInline />
    // } else {
    //     thumbnail = <img className={styles.image} src={desktop_thumbnail} />
    // }
    // const router = useRouter();
    
    // const handleProjectClick = () => {
    //     router.push('/project/' + dir);
    // }

    desktop_thumbnail = desktop_thumbnail ? desktop_thumbnail : "mobile_thumbnail";
    const [thumbnailUrl, setThumbnailUrl] = useState(desktop_thumbnail);

    return(
        <Link href={"/project/" + dir} style={{gridColumn : "span " + grid_span, textDecoration : 'none'}}>
        <article className={styles.project} style={{gridColumn : "span " + grid_span, color : accentColor}}>
            <div className={styles.desc + " " + spaceGrotesk.className}>
                <div className={styles.title}>{name}</div>
                <TagContainer category={category} tags={tags} tagColor={accentColor} categoryColor={accentColor} />
            </div>
            <Thumbnail src={thumbnailUrl} classname={styles.thumbnail} 
            dir={dir} />
        </article>
        </Link>
    )
}