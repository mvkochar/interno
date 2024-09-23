import React from 'react'
import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    title: string
    date: string
}

const BlogItem = ({ id, image, category, title, date }: BlogItemProps) => {
    return (
        <div className={classes.blog_item}>
            <div className="pos-r">
                <div><img src={image} alt="post" /></div>
                <div className={classes.blog_item_cat}>{category}</div>
            </div>
            <h4 className={classes.blog_item_title}>{title}</h4>
            <div className={classes.blog_item_info}>
                <div className="blog-item-date">{date}</div>
                <a href='' className='d-b'>
                    <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26.2671" r="26" fill="#F4F0EC" />
                        <path d="M23.771 32.9529L29.7139 26.2672L23.771 19.5815" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default BlogItem