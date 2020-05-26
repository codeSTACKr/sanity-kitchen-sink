import React from "react";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";

import BlogPostPreviewFrontpage from "../components/blog-post-preview-frontpage";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

const BlogPreview = (props) => {
  const { posts, data, errors } = props;

  console.log(posts);

  if (errors) {
    return (
      <GraphQLErrorList errors={errors} />
    );
  }

  // const site = (data || {}).site;
  // const postNodes = (data || {}).posts
  const postNodes = posts
    ? mapEdgesToNodes(posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : [];

  // if (!site) {
  //   console.warn(
  //     'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.',
  //   );
  // }

  return (
    <div className="bg-black py-6">
      {postNodes && <BlogPostPreviewFrontpage nodes={postNodes} />}
    </div>
  );
};

export default BlogPreview;
