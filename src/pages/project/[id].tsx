import { useEffect, useState } from 'react';
import ProjectInfoPage from '../../components/project-info-page';
import projectsData from '../../data/projects.json';
import { useParams } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
}

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      const projectData = projectsData.find((project) => project.id === parseInt(id));
      setProject(projectData || null);
    }
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
      <ProjectInfoPage
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
        githubUrl={project.githubUrl}
      />
  );
};

export default ProjectPage;
