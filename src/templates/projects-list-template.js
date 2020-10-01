// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useProjectsList } from '../hooks';

const ProjectListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const projects = useProjectsList();
  return (
    <Layout title={`Projects - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Projects">
        <ul>
          {projects.map(({ frontmatter: project }) => (
            <li key={project.title}>
              <Link to={`/pages/${kebabCase(project.title)}/`}>
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default ProjectListTemplate;
