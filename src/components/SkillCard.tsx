import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const SkillCard = ({ icon, title, items }: SkillCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-4 text-green-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-400 flex items-center gap-2">
            <span className="text-green-500">$</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;