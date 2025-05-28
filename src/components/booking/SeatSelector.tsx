import { useState } from "react";
import { generateTheaterLayout } from "../../data";

interface SeatSelectorProps {
  selectedSeats: string[];
  setSelectedSeats: (seats: string[]) => void;
  ticketPrice: number;
}

// Remove the generateTheaterLayout function

const SeatSelector = ({ selectedSeats, setSelectedSeats, ticketPrice }: SeatSelectorProps) => {
  const [theaterLayout] = useState(generateTheaterLayout());
  
  const toggleSeat = (seatId: string, currentStatus: "available" | "occupied" | "selected") => {
    if (currentStatus === "occupied") return;

    if (currentStatus === "selected") {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>

      <div className="flex justify-center mb-8">
        <div className="flex gap-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-secondary rounded-sm mr-2"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary rounded-sm mr-2"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-muted-foreground rounded-sm mr-2"></div>
            <span className="text-sm">Occupied</span>
          </div>
        </div>
      </div>

      {/* Screen */}
      <div className="relative mb-10">
        <div className="h-2 bg-primary rounded-lg w-3/4 mx-auto mb-2"></div>
        <div className="text-center text-sm text-muted-foreground">SCREEN</div>
      </div>

      {/* Seats */}
      <div className="flex flex-col items-center space-y-2">
        {theaterLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            <div className="w-6 flex items-center justify-center text-sm font-medium">
              {String.fromCharCode(65 + rowIndex)}
            </div>
            {row.map((seat) => {
              // Check if this seat is in our selectedSeats array
              const isSelected = selectedSeats.includes(seat.id);
              const status = isSelected ? "selected" : seat.status;
              
              return (
                <button
                  key={seat.id}
                  className={`w-6 h-6 rounded-t-sm text-xs flex items-center justify-center ${
                    status === "available" 
                      ? "bg-secondary hover:bg-secondary/80 cursor-pointer" 
                      : status === "selected" 
                        ? "bg-primary text-primary-foreground cursor-pointer" 
                        : "bg-muted-foreground cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => toggleSeat(seat.id, status)}
                  disabled={status === "occupied"}
                  title={`Seat ${seat.id}`}
                >
                  {seat.id.substring(1)}
                </button>
              );
            })}
            <div className="w-6 flex items-center justify-center text-sm font-medium">
              {String.fromCharCode(65 + rowIndex)}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">Booking Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Selected Seats:</span>
          <span>{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</span>
        </div>
        <div className="flex justify-between font-medium">
          <span>Total:</span>
          <span>${(selectedSeats.length * ticketPrice).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;