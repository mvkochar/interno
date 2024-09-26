import React from 'react'
import './css/Projects.css'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import ProjectsItem from '../components/ProjectsItem/ProjectsItem'

const Projects = () => {
    return (
        <>
            <main className='projects-main'>
                <div className="projects-main-content">
                    <h1 className="projects-main-title">Our projects</h1>
                    <p className="projects-main-desc">Home / Projects</p>
                </div>
            </main>
            <div className="projects-categories d-f jc-sb">
                <button className='projects-categories-item'>Bathroom</button>
                <button className='projects-categories-item categories-item__active'>Bed Room</button>
                <button className='projects-categories-item'>Kitchen</button>
                <button className='projects-categories-item'>Living Area</button>
            </div>
            <div className="projects-box d-f jc-sb">
                {
                    ProjectsList.map((project)=> {
                        return (
                            <ProjectsItem
                                id={project.id}
                                image={project.image}
                                title={project.title}
                                category={project.category}
                            />
                        )
                    })
                }
            </div>
            <div className="projects-pagination d-f">
                <button className='projects-pagination-item pagination-item__active'>01</button>
                <button className='projects-pagination-item'>02</button>
                <button className='projects-pagination-item'>03</button>
                <button className='projects-pagination-item pagination-item-next'>
                    <img src="/images/arrow-right.png" alt="arrow-right" />
                </button>
            </div>
        </>
    )
}

export default Projects