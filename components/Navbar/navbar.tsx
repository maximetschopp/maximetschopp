'use client'

import { ProjectProps } from '@/app/utils/types';
import Logo from '../logo/logo';
import styles from './navbar.module.css';
import { projectData } from '@/app/utils/projectData';
import { inter, spaceGrotesk } from '@/app/utils/font';
import Image from 'next/image';
import { useState } from 'react';
import TagContainer from '../tagContainer/tagContainer';
import Thumbnail from '../Thumbnail/thumbnail';

export default function Navbar() {

    let projects = projectData.projects;
    let projectsByCategory = {} as { [key: string]: ProjectProps[] };
    const [categoryProjects, setCategoryProjects] = useState<JSX.Element[] | undefined>(undefined);
    const [hoveredProject, setHoveredProject] = useState<ProjectProps | undefined>(undefined);

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
                <div className={styles.project + " " + spaceGrotesk.className} key={project.name}
                    data-project={project.name} data-category={category}
                    onMouseEnter={handleProjectHover} onMouseOver={handleProjectHover}>
                    {project.name}
                </div>
            )
        });
        setCategoryProjects(projectsList);
    }

    const handleProjectHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let project = e.currentTarget.dataset.project;
        let category = e.currentTarget.dataset.category;
        if(!project || !category) return;
        console.log(project);
        // get project data from projectsByCategory
        let projectData = projectsByCategory[category];
        let projectObj = projectData.find((projectObj) => {
            return projectObj.name === project;
        });
        if(!projectObj) return;
        console.log(projectObj);
        setHoveredProject(projectObj);
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
                            onClick={handleCategoryHover} //onMouseOver={handleCategoryHover}
                        >{category}</div>
                    )
                })}
                <div className={styles.expanded_container}>
                    <div className={styles.project_list}>
                        {categoryProjects}
                    </div>
                    {
                        hoveredProject &&
                        <div className={styles.project_info}>
                            <div className={styles.projectThumbnail}>
                                <Thumbnail src={hoveredProject.desktop_thumbnail} classname={styles.thumbnail} />
                                {/* <Image src={hoveredProject.desktop_thumbnail} alt="projectThumbnail"
                                fill={true} className={styles.projectThumbnail}
                                /> */}
                            </div>
                            <TagContainer tags={hoveredProject.tags} category={hoveredProject.category} />
                        </div>
                    }
                </div>
            </div>
            <div>
                Contact
            </div>
        </nav>
    );
}