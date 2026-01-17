function DestinationCard({ city, description }) {
    return (
        <div className="feature">
            <h3>{city}</h3>
            <p>{description}</p>
        </div>
    );
}

export default DestinationCard;
