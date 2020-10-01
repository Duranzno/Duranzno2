// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useProjectsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query ProjectsListQuery {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "page"}, isProject:{eq:true}, draft: {ne: true}}}) {
        nodes {
          frontmatter {
            title
            template
            slug
            draft
            date
            description
            category
          }
        }
      }
    }       
    `
  );

  return allMarkdownRemark.nodes;
};

export default useProjectsList;
