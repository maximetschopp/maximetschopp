import TagContainer from '@/components/tagContainer/tagContainer'
import styles from './styles.module.css'
import { getProjectData } from '@/app/utils/getProjectData'
import { spaceGrotesk, inter } from '@/app/utils/font'
import VideoComponent from '@/components/blog/videoComponent/videoComponent'
import { BodyContent, imageComponentProps, textComponentProps, videoComponentProps } from '@/app/utils/types'
import ImageComponent from '@/components/blog/imageComponent/imageComponent'
import TextComponent from '@/components/blog/textComponent/textComponent'

type Props ={
    params: {
        slug: string
    }
}

export default function ProjectPage({ params: {slug} }: Props) {

    const projectData = getProjectData(slug);
    console.log(projectData);

    const bodyContent = projectData.body.map(({ type, props }: BodyContent, index: number) => {
      switch (type) {
        case 'text': {
          const { body, ...rest } = props as textComponentProps;
          return body ? (
            // <div key={index} className={`${styles.text} ${inter.className}`}>
            //   <p className={styles.paragraph} {...rest}>{text}</p>
            // </div>
            <TextComponent key={index} body={body} {...rest} />
          ) : null;
        }
        case 'image': {
          const { src, ...rest } = props as imageComponentProps;
          return src ? (
            <ImageComponent key={index} src={src} {...rest} />
          ) : null;
        }
        case 'video': {
          const { src, ...rest } = props as videoComponentProps;
          return src ? (
            <VideoComponent key={index} src={src} {...rest} />
          ) : null;
        }
        default:
          return null;
      }
    });
    

    return (
      <div className={styles.main}
      style={{
        background: `
          linear-gradient(180deg, rgba(28, 28, 28, 1) 0%, ${projectData.gradientColor} 100%)
        `
        }}
      >
          <div className={styles.container}>
                <section className={styles.header}>
                    <h1 className={styles.title + " " + spaceGrotesk.className}>{projectData.title}</h1>
                    <TagContainer tags={projectData.tags} category={projectData.category} 
                    tagColor={'rgba(255, 255, 255, 0.9)'} />
                </section>
                {bodyContent}
          </div>
      </div>
    )
}


// 1:58:00