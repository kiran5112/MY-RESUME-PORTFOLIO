import React, { useState } from 'react';
import MOVIE_DATA from "../LocalMovie";

const SeatBooking = () => {
  const[seats,setSeats]=useState(MOVIE_DATA)
  console.log(seats);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      // Seat is already selected, remove it from the list
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      // Seat is not selected, add it to the list
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div>
      <h2>Movie Seat Booking</h2>
      <div className="seat-container">
        {seats.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <div
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                key={seatIndex}
                onClick={() => handleSeatClick(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.Title}>Seat {seat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatBooking;
