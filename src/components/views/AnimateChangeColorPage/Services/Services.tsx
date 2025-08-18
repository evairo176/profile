const Services = () => {
  const services = [
    {
      id: "01",
      title: "Full-Stack Web Development",
      description:
        "Building robust, scalable web applications from front-end to back-end, ensuring seamless functionality and user experience.",
    },
    {
      id: "02",
      title: "API Development",
      description:
        "Designing and implementing RESTful APIs to enable efficient communication between different software systems and services.",
    },
    {
      id: "03",
      title: "Database Design & Management",
      description:
        "Creating efficient database structures and managing data flow to ensure optimal performance and data integrity.",
    },
    {
      id: "04",
      title: "Cloud Integration",
      description:
        "Leveraging cloud technologies to deploy, scale, and manage applications, ensuring high availability and cost-effectiveness.",
    },
    {
      id: "05",
      title: "DevOps & CI/CD",
      description:
        "Implementing continuous integration and deployment pipelines to streamline development processes and improve code quality.",
    },
    {
      id: "06",
      title: "Performance Optimization",
      description:
        "Analyzing and optimizing application performance to ensure fast load times and smooth user interactions across all devices.",
    },
  ];

  return (
    <div className="container mx-auto flex w-full flex-col px-4 py-20 text-gray-800 md:flex-row md:px-0 dark:text-white">
      <div className="w-full pr-8 md:w-1/4">
        <h2 className="relative text-6xl font-extrabold md:sticky md:top-20">
          SERVICES
        </h2>
      </div>

      <div className="w-full md:w-3/4">
        {services.map((service) => (
          <div key={service.id} className="mb-16 flex items-start">
            <div className="mr-6 text-5xl font-bold text-purple-600 dark:text-purple-400">
              {service.id}
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
