export const Timeline = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Started Frontend Career',
      description: 'First professional role as junior developer',
    },
    {
      year: '2022',
      title: 'Mastered React Ecosystem',
      description: 'Built complex applications with Redux',
    },
    {
      year: '2023',
      title: 'UI/UX Specialization',
      description: 'Focused on design systems and accessibility',
    },
  ];

  return (
    <div className="space-y-8">
      {milestones.map((item, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-neon-blue rounded-full mt-1"></div>
            {i < milestones.length - 1 && (
              <div className="w-0.5 h-full bg-gray-300"></div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-medium">
              {item.year} - {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
