'use client'
import Link from "next/link";

type ThumbnailProps = {
    src: string,
    classname?: string,
    dir: string,
    onClickFunction?: Function
}

export default function Thumbnail({src, classname, dir, onClickFunction} : ThumbnailProps){

    let targetUrl = "/project/" + dir;

    if(src.includes("mp4")){
        return ( 
            <Link href={targetUrl} onClick={() => onClickFunction && onClickFunction()}>
                <video className={classname} src={src} autoPlay loop muted playsInline/>
            </Link>
        );
    } else {
        return ( 
            <Link href={targetUrl} onClick={() => onClickFunction && onClickFunction()}>
                <img className={classname} src={src}/>
            </Link>
        );
    }
}