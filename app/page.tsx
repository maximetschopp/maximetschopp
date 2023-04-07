import Image from 'next/image'
import styles from './page.module.css'
import About from '@/components/about/about'
import { projectData } from './utils/projectData'
import Project from '@/components/project/project'
import { inter } from './utils/font'

export default function Home() {

  const projects = projectData.projects;

  //inter.className
  return (
    <main className={styles.main + " " + inter.className}>
      <About />
      <div className={styles.projectContainer}>
        {projects.map((project) => {
          return(
            <Project {...project} />
          )
        })}
      </div>
    </main>
  )
}
