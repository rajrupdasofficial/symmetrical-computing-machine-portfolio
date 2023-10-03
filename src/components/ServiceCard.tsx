import React from "react";
import "../assets/css/services.scss";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string; // Add a new prop for the image URL
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="service-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
