'use client'

import { ProjectProps } from '@/app/utils/types';
import Logo from '../logo/logo';
import styles from './navbar.module.css';
import { projectData } from '@/app/utils/projectData';
import { inter } from '@/app/utils/font';

export default function Navbar() {

    let projects = projectData.projects;
    let projectsByCategory = {} as { [key: string]: ProjectProps[] };
    projects.forEach((project : ProjectProps) => {
        // Get the category name for the current project
        let category = project.category;
      
        // If the category does not exist in the projectsByCategory object, create a new array for it
        if (!projectsByCategory[category]) {
          projectsByCategory[category] = [];
        }
      
        // Add the current project object to the array for its category
        projectsByCategory[category].push(project);
      });

    return (
        <nav className={styles.navbar + " " + styles.fixed + " " + inter.className}>
            <div className={styles.logo_container}>
                <Logo />
            </div>
            <div className={styles.dropdown_container}>
                {Object.keys(projectsByCategory).map((category) => {
                    return(
                        <div className={styles.category} key={category}
                            data-category={category}
                        >{category}</div>
                    )
                })}
                <div className={styles.background}>

                </div>
            </div>
            <div>
                Contact
            </div>
        </nav>
    );
}