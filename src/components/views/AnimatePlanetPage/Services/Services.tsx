import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");
  const title = t("title");
  const services = t.raw("items");

  return (
    <section
      id="services"
      className="container mx-auto flex w-full flex-col px-4 py-20 text-gray-800 md:flex-row md:px-0 dark:text-white"
    >
      <div className="w-full pr-8 md:w-1/4">
        <h2 className="relative text-6xl font-extrabold md:sticky md:top-20">
          {title}
        </h2>
      </div>

      <div className="w-full md:w-3/4">
        {services.map((service: any) => (
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
    </section>
  );
};

export default Services;
