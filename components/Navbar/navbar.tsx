'use client'

import { ProjectProps } from '@/app/utils/types';
import Logo from '../logo/logo';
import styles from './navbar.module.css';
import { projectData } from '@/app/utils/projectData';
import { inter } from '@/app/utils/font';
import { useState } from 'react';

export default function Navbar() {

    let projects = projectData.projects;
    let projectsByCategory = {} as { [key: string]: ProjectProps[] };
    const [categoryProjects, setCategoryProjects] = useState(<></>);

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

    const handleCategoryHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let category = e.currentTarget.dataset.category;
        if(!category) return;
        let categoryProjects = projectsByCategory[category];
        let projectsList = categoryProjects.map((project) => {
            return(
                <div className={styles.project} key={project.name}>
                    {project.name}
                </div>
            )
        });
        setCategoryProjects(projectsList);
    }

    return (
        <nav className={styles.navbar + " " + styles.fixed + " " + inter.className}>
            <div className={styles.logo_container}>
                <Logo />
            </div>
            <div className={styles.dropdown_container}>
                {Object.keys(projectsByCategory).map((category) => {
                    return(
                        <div className={styles.category} key={category}
                            data-category={category} onMouseEnter={handleCategoryHover}
                            onClick={handleCategoryHover} onMouseOver={handleCategoryHover}
                        >{category}</div>
                    )
                })}
                <div className={styles.expanded_container}>
                    <div className={styles.project_list}>
                        {categoryProjects}
                    </div>
                </div>
            </div>
            <div>
                Contact
            </div>
        </nav>
    );
}