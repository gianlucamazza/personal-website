interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
      <h3 className="text-xl font-semibold text-green-400 mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800 border border-green-500/20 rounded text-xs text-green-400 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;