'use client'
import Link from "next/link";

type ThumbnailProps = {
    src: string,
    classname?: string,
    dir: string
}

export default function Thumbnail({src, classname, dir} : ThumbnailProps){

    let targetUrl = "/project/" + dir;

    if(src.includes("mp4")){
        return ( 
            <Link href={targetUrl}>
                <video className={classname + " zoomtofill"} src={src} autoPlay loop muted playsInline />
            </Link>
        );
    } else {
        return ( 
            <Link href={targetUrl}>
                <img className={classname} src={src}/>
            </Link>
        );
    }
}