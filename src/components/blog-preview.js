import React from 'react'
import { Link } from 'gatsby'
import styles from './blog-preview.module.css'

export default ({ post }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <small>{post.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
