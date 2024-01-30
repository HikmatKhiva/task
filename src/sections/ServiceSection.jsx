import React from "react";
import { service } from "../config";
import ServiceCard from "../components/ServiceCard";

const ServiceSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto text-center">
          <h2 className="text-white font-aeonik text-5xl mb-5">
            Innovative solutions <br /> for operational excellence
          </h2>
          <p className="font-intern text-xl text-grey-200">
            Tailored DevOps expertise driving your business momentum. <br />
            Personalized solutions for growth and evolution.
          </p>
        </div>
        <div className="flex gap-10 mt-14 justify-center relative">
          {service.map((item, index) => (
            <ServiceCard key={item.id} service={item} index={index} />
          ))}
          <div className="ellipse-service"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
