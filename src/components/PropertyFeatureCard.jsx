import "./propertyFeatureCard.scss";

function PropertyFeatureCard({ icon, header, description }) {
  return (
    <div className="propertyFeatureCard">
      {icon}
      <div className="featureText">
        <span>{header}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PropertyFeatureCard;
