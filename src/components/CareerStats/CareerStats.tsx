"use client";

const stats = [
  {
    value: "7+",
    label: "Years of Experience",
    description: "in software development",
  },
  {
    value: "6+",
    label: "Countries",
    description:
      "Collaborated with teams in USA, Germany, UK, Colombia, Mexico, Brazil and more.",
  },
  {
    value: "5+",
    label: "Industries Worked In",
    description: "AdTech, ERP, SaaS, Construction Tech, Developer Tools",
  },
];

const CareerStats = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="p-8 flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-thin-500 text-black font-mono mb-2">
              {stat.value}
            </div>
            <div className="text-base font-semibold text-gray-700 mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-gray-500">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerStats;
