export const TechStackIcons = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-medium mb-4 text-gray-700">
        Technologies I Work With
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {[
          'React',
          'Vue',
          'Tailwind',
          'TypeScript',
          'Redux',
          'Nuxt',
          'Expo',
          'Figma',
        ].map((tech) => (
          <div key={tech} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Replace with actual icons */}
              <span className="text-xs">{tech}</span>
            </div>
            <span className="text-xs text-gray-600">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
