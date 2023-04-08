import TagContainer from '@/components/tagContainer/tagContainer'
import styles from './styles.module.css'
import { getProjectData } from '@/app/utils/getProjectData'
import { spaceGrotesk, inter } from '@/app/utils/font'

type Props ={
    params: {
        slug: string
    }
}

export default function ProjectPage({ params: {slug} }: Props) {

    const projectData = getProjectData(slug);
    console.log(projectData);

    interface BodyContent {
        type: string;
        src?: string;
        content?: string;
    }
      
    const bodyContent = projectData.body.map(({ type, src, content }: BodyContent, index : number) => {
        switch (type) {
          case 'text':
            return (
              <div key={index} className={styles.text + " " + inter.className}>
                <p className={styles.paragraph}>{content}</p>
              </div>
            );
          case 'image':
            return (
              <div key={index} className={styles.image}>
                <img src={src} alt={`Image ${index + 1}`} />
              </div>
            );
          case 'video':
            return (
              <div key={index} className={styles.videoContainer}>
                <video className={styles.video} src={src} controls muted autoPlay playsInline loop></video>
              </div>
            );
          // add additional cases for each content type
          default:
            return null;
        }
      });

    return (
      <div className={styles.main}>
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