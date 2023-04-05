import Image from 'next/image'
import styles from './page.module.css'
import About from '@/components/about/about'
import Navbar from '@/components/Navbar/navbar'
import projectData from './projectData.json'

import { Inter } from 'next/font/google'
import Project from '@/components/project/project'
import { ProjectProps } from './utils/types'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Home() {

  const projects = projectData.projects;

  //inter.className
  return (
    <main className={styles.main + " " + inter.className}>
      <About />
      <Navbar projectData={projectData} />
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
