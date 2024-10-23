import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ title, children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-mono text-green-400 mb-12">
          <span className="text-gray-500">$</span> {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;