import React from 'react';

const categories = [
  {
    title: 'Matrix Operations',
    data: [
      { name: 'Python', value: 40, color: '#EAB308' },
      { name: 'Anantavyay', value: 95, color: '#818CF8' },
      { name: 'C', value: 98, color: '#10B981' }
    ]
  },
  {
    title: 'String Processing',
    data: [
      { name: 'Python', value: 45, color: '#EAB308' },
      { name: 'Anantavyay', value: 92, color: '#818CF8' },
      { name: 'C', value: 95, color: '#10B981' }
    ]
  },
  {
    title: 'Numerical Computing',
    data: [
      { name: 'Python', value: 50, color: '#EAB308' },
      { name: 'Anantavyay', value: 96, color: '#818CF8' },
      { name: 'C', value: 98, color: '#10B981' }
    ]
  }
];

export function PerformanceChart() {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.title} className="space-y-3">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">{category.title}</h4>
          <div className="space-y-2">
            {category.data.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{item.name}</span>
                  <span className="text-gray-900 dark:text-white">{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}