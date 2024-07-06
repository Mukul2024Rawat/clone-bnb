import { useState, useEffect } from "react";
import axios from "axios";
import { Booking } from "@/types/userAuthentication";

const MyBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("/api/bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBookings(response.data);
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">My Bookings</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="mb-4">
            <div className="p-4 border border-gray-300 rounded-lg">
              <p>{booking.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBookings;
