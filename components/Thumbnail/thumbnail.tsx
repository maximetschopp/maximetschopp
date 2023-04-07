// src: string, classname?: string

type ThumbnailProps = {
    src: string,
    classname?: string
}

export default function Thumbnail({src, classname} : ThumbnailProps){
    if(src.includes("mp4")){
        return <video className={classname + " zoomtofill"} src={src} autoPlay loop muted playsInline />
    } else {
        return <img className={classname} src={src} />
    }
}