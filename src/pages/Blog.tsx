import React from 'react'
import './css/Blog.css'
import PostsList from '../components/PostsList/PostsList'
import BlogItem from '../components/BlogItem/BlogItem'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <div className="blog-main-content">
                    <h1 className="blog-main-title">Articles & News</h1>
                    <p className="blog-main-desc">Home / Blog</p>
                </div>
            </main>
            <section className='blog-latest'>
                <h3 className="blog-latest-title">Latest Post</h3>
                <div className="blog-latest-box d-f jc-sb align-center">
                    <div><img src="/images/blog-latest.png" alt="blog-latest" /></div>
                    <div>
                        <h4 className="blog-latest-subtitle">Low Cost Latest Invented Interior Designing Ideas</h4>
                        <p className="blog-latest-desc">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                            dignissim maximus.posuere in.Contrary to popular belief.
                        </p>
                        <p className="blog-latest-desc">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                        </p>
                        <div className="blog-latest-info d-f jc-sb align-center">
                            <p className="blog-latest-date">26 December, 2022</p>
                            <a href="" className="d-b"><img src="/images/arrow-right-icon.png" alt="arrow-right-icon" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-news'>
                <h3 className="blog-news-title">Articles & News</h3>
                <div className="blog-news-box d-f jc-sb">
                    {
                        PostsList.map((post) => {
                            return (
                                <BlogItem
                                    id={post.id}
                                    image={post.image}
                                    category={post.category}
                                    title={post.title}
                                    date={post.date}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Blog