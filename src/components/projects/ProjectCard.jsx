import React from 'react';

export default function ProjectCard({ title, image, description, tech = [], link }) {
  return (
    <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {image ? (
        <div className="relative overflow-hidden aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {tech.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="text-xs py-1 px-2 rounded-full bg-oceanBlue/20 text-skyBlue">
                {t}
              </span>
            ))}
          </div>
        ) : null}
        {description ? <p className="text-gray-400 mb-4">{description}</p> : null}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block text-skyBlue font-medium transition-colors duration-300 hover:text-oceanBlue">
            View Project <span className="ml-1">→</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
