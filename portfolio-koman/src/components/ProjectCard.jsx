import { Link } from 'react-router-dom';

function ProjectCard({ tag, title, description, link }) {
  return (
    <article className="project-card">
      <span className="project-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="btn primary">
        Voir le projet
      </Link>
    </article>
  );
}

export default ProjectCard;
