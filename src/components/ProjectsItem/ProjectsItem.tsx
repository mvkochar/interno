import React from 'react'
import classes from "./ProjectsItem.module.css"

type ProjectsItemProps = {
    id: number
    image: string
    title: string
    category: string
}

const ProjectsItem = ({id, image, title, category}:ProjectsItemProps) => {
  return (
    <div className={classes.projects_item}>
        <div><img src={image} alt="project" /></div>
        <div className={classes.projects_item_info}>
            <div>
                <h4 className={classes.projects_item_title}>{title}</h4>
                <h5 className={classes.projects_item_cat}>{category}</h5>
            </div>
            <a href="" className="d-b"><img src="/images/arrow-right-icon.png" alt="arrow-right-icon" /></a>
        </div>
    </div>
  )
}

export default ProjectsItem