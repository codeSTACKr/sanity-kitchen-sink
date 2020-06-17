import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import styles from "./blog-post-preview-frontpage.module.css";

function BlogPostPreviewFrontpage(props) {
  return (
    <div className={styles.root + " w-full container mx-auto"}>
      <h2 className={styles.headline}>Most Recent Posts</h2>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => {
            // if (
            //   node.id !== "289f253d-db24-52a5-a5e3-5da9be6e43a8" &&
            //   node.id !== "add229a6-acff-5e06-b6ec-d97eec72a52a"
            // ) {
            return (
              <li key={node.id} className={styles.hover}>
                <BlogPostPreview {...node} isInList />
              </li>
            );
            // }
          })}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

BlogPostPreviewFrontpage.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewFrontpage;
