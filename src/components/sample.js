

import React, { useState } from "react";
import style from "./style/sample.module.css";
import { useDispatch } from "react-redux";
import Pay from "./Pay";
import { act } from "../store/index"
import { Link } from "react-router-dom";
// import Pay from "./Pay";


const MovieTicketBooking = () => {
    let dispatch = useDispatch()
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedMovieT, setSelectedMovieT] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [bookbtn, setBookbtn] = useState(false);
    const [book, setBook] = useState("")

    const moviesT = [
        { name: "KG Cinemas", availableSeats: 65 },
        { name: "INOX Prozone Mall", availableSeats: 52 },
        { name: "Rayal Theatre", availableSeats: 78 },
    ];

    const handleSelectMovie = (event) => {
        setSelectedMovieT(event.target.value);
    };

    const handleSelectSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }

    };

    const handleBookTicket = () => {
        if (!selectedMovieT || !selectedSeats.length) {
            setShowMessage(true);
            return;
        }

        setBook(`Ticket booked for movie: ${selectedMovieT} and seat numbers: ${selectedSeats.join(", ")} total price is ${100 * selectedSeats.length}`);

        dispatch(act.seat(selectedSeats));
        // console.log(selectedSeats);
        setBookbtn(true)
    };


    return (
        <div className={`${style.container}`}>
            <p>Movie Ticket Booking</p>
            <div>
                <label>Select Theater:</label>
                <select onChange={handleSelectMovie}>
                    <option value="">Select</option>
                    {moviesT.map((moviet) => (
                        <option key={moviet.name} value={moviet.name}>
                            {moviet.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedMovieT && (
                <div>
                    <h2>Seats:{`${selectedSeats.join(", ")}`}</h2>
                    <div className={`${style.seat}`} >
                        {Array.from({ length: moviesT.find((m) => m.name === selectedMovieT).availableSeats }, (_, index) => (
                            <div
                                key={index}
                                className={`${style.seats}`}
                                style={{
                                    backgroundColor: selectedSeats.includes(index + 1) ? "green" : "white",
                                }}
                                onClick={() => handleSelectSeat(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showMessage && (
                <div style={{ color: "red" }}>
                    Please select movie and seat(s) to book ticket.
                </div>
            )}
            <button className={`${style.button}`} onClick={handleBookTicket}>Book Ticket</button>

            {bookbtn && <Link to={"/pay"}> <button className={`${style.button}`}>PAY</button></Link>}


        </div>
    );
};
export default MovieTicketBooking;