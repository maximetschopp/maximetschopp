import styles from './styles.module.css'
import { getProjectData } from '@/app/utils/getProjectData'

type Props ={
    params: {
        slug: string
    }
}

export default function ProjectPage({ params: {slug} }: Props) {

    const projectData = getProjectData(slug);
    console.log(projectData);

    return (
      <div className={styles.main}>
          <div className={styles.container}>
              <h1>{projectData.title}</h1>
              <h2>{slug}</h2> 
          </div>
      </div>
    )
}


// 1:58:00