'use client'
import { useRouter } from "next/navigation";

type ThumbnailProps = {
    src: string,
    classname?: string,
    dir: string
}

export default function Thumbnail({src, classname, dir} : ThumbnailProps){

    const router = useRouter();

    const handleProjectClick = (dir : string) => {
        router.push('/project/' + dir);
    }

    if(src.includes("mp4")){
        return <video className={classname + " zoomtofill"} src={src}
                onClick={() => handleProjectClick(dir)}
                autoPlay loop muted playsInline 
            />;
    } else {
        return <img className={classname} src={src}
            onClick={() => handleProjectClick(dir)}
        />;
    }
}