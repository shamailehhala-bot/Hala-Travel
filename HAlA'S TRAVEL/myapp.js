let flights = [
    {
        id: 1,
        from: "Amman",
        to: "Dubai",
        departureDate: "2026-02-15",
        returnDate: "2026-02-20",
        price: 180,
        availableSeats: 12
    },
    {
        id: 2,
        from: "Cairo",
        to: "Istanbul",
        departureDate: "2026-03-01",
        returnDate: "2026-03-07",
        price: 220,
        availableSeats: 8
    }
];

let bookings = [
    {
        bookingId: 101,
        from: "Amman",
        to: "Dubai",
        tickets: 2,
        status: "confirmed"
    }
];

console.log("Flights available:", flights);

function showFlights() {
    const flightsList = document.getElementById("flightsList");
    flights.forEach(flight => {
        const li = document.createElement("li");
        li.textContent = `${flight.from} → ${flight.to} | Departure: ${flight.departureDate} | Price: $${flight.price}`;
        flightsList.appendChild(li);
    });
}

window.onload = showFlights;

function bookTicket() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const tickets = document.getElementById("tickets").value;
    const message = document.getElementById("message");

    if (from === "" || to === "" || tickets === "") {
        message.textContent = " Please fill all required fields";
        message.style.color = "red";
    } else {
        bookings.push({
            from: from,
            to: to,
            tickets: tickets,
            status: "confirmed"
        });

        message.textContent =
            " Booking Confirmed! From: " + from +
            " | To: " + to +
            " | Tickets: " + tickets;
        message.style.color = "green";

        console.log("New booking:", bookings[bookings.length - 1]);
    }
}
