import DestinationCard from "./DestinationCard";

const destinations = [
    { title: "Paris", desc: "Experience the city of love and culture." },
    { title: "London", desc: "Discover history, business, and modern life." },
    { title: "Dubai", desc: "Luxury, shopping, and unforgettable experiences." },
    { title: "Istanbul", desc: "A unique mix of history and modern lifestyle." }
];

function DestinationsList() {
    return (
        <>
            {destinations.map((item, index) => (
                <DestinationCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </>
    );
}

export default DestinationsList;
