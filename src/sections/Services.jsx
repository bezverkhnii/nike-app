import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          label={service.label}
          subtext={service.subtext}
          img={service.imgURL}
        />
      ))}
    </section>
  );
};

export default Services;
