import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import styles from "./blog-post-preview-frontpage.module.css";

function BlogPostPreviewFrontpage(props) {
  console.log(props);
  return (
    <div className={styles.root + " w-full container mx-auto"}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
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
  browseMoreHref: "",
};

export default BlogPostPreviewFrontpage;
