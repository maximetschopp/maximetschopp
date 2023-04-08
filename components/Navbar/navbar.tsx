'use client'

import { ProjectProps } from '@/app/utils/types';
import Logo from '../logo/logo';
import styles from './navbar.module.css';
import { projectData } from '@/app/utils/projectData';
import { inter, spaceGrotesk } from '@/app/utils/font';
import { useState } from 'react';
import TagContainer from '../tagContainer/tagContainer';
import Thumbnail from '../Thumbnail/thumbnail';
import { useRouter } from 'next/navigation';
import { goToProject } from '@/app/utils/utils';

export default function Navbar() {

    const router = useRouter();
    let projects = projectData.projects;
    let projectsByCategory = {} as { [key: string]: ProjectProps[] };
    const [previousCategory, setPreviousCategory] = useState<string | undefined>(undefined);
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
                <div
                  className={styles.project + " " + spaceGrotesk.className}
                  key={project.name}
                  data-project={project.name}
                  data-category={category}
                  onMouseEnter={handleProjectHover}
                  onMouseOver={handleProjectHover}
                  onClick={() => handleProjectClick(project.dir)} // add onClick here
                >
                  {project.name}
                </div>
            )
        });
        setCategoryProjects(projectsList);
        if(previousCategory !== category || previousCategory === undefined){
            setHoveredProject(categoryProjects?.[0]);
            setPreviousCategory(category);
        }
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

    const handleLogoClick = () => {
        router.push('/');
    }
    const handleContactClick = () => {
        router.push('/about');
    }
    const handleProjectClick = (dir : string) => {
        router.push('/project/' + dir);
    }

    return (
        <nav className={styles.navbar + " " + styles.fixed + " " + inter.className}>
            <div className={styles.logo_container} onClick={handleLogoClick}>
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
                                <Thumbnail src={hoveredProject.desktop_thumbnail} classname={styles.thumbnail} dir={hoveredProject.dir} />
                            </div>
                            <div className={styles.projectTitle + ' ' + spaceGrotesk.className}>{hoveredProject.name}</div>
                            <TagContainer tags={hoveredProject.tags} category={hoveredProject.category} 
                                tagColor='rgb(255,255,255)' categoryColor='white'
                            />
                        </div>
                    }
                    { !hoveredProject && <h1>&lt;-- please select a project </h1> }
                </div>
            </div>
            <div onClick={handleContactClick}>
                Contact
            </div>
        </nav>
    );
}