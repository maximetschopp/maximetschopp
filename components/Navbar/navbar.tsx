'use client'

import Logo from '../logo/logo';
import styles from './navbar.module.css';

export default function Navbar({projectData} : {projectData: any}) {

    console.log("hi");
    console.log(projectData);
    console.log(projectData.projects);
    let projects = projectData.projects;
    let projectsByCategory = {};
    projects.forEach((project : object[]) => {
        // Get the category name for the current project
        let category = project.category;
      
        // If the category does not exist in the projectsByCategory object, create a new array for it
        if (!projectsByCategory[category]) {
          projectsByCategory[category] = [];
        }
      
        // Add the current project object to the array for its category
        projectsByCategory[category].push(project);
      });

      console.log(projectsByCategory);

    return (
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <Logo />
            </div>
            <div className={styles.dropdown_container}>
                {Object.keys(projectsByCategory).map((category) => {
                    return(
                        <div className={styles.dropdown}>
                            <div className={styles.category}>{category}</div>
                            <div className={styles.dropdown_content}>
                                {projectsByCategory[category].map((project) => {
                                    return(
                                        <div> {project.name} </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                Contact
            </div>
        </div>
    );
}