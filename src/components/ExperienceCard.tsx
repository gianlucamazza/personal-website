interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  location: string;
}

const ExperienceCard = ({ title, company, period, description, tech, location }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-green-400">{title}</h3>
          <p className="text-gray-300">{company}</p>
          <p className="text-gray-400 text-sm mt-1">{location}</p>
        </div>
        <p className="text-gray-400 mt-2 md:mt-0 font-mono">{period}</p>
      </div>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 bg-gray-800 text-xs text-green-400 rounded font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;