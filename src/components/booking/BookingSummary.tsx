import { Calendar, Clock, MapPin, Ticket } from "lucide-react";

interface BookingSummaryProps {
  movie: {
    title: string;
    image: string;
    duration: string;
  };
  city: string;
  cinema: string;
  date: string;
  time: string;
  seats: string[];
  ticketPrice: number;
}

const BookingSummary = ({
  movie,
  city,
  cinema,
  date,
  time,
  seats,
  ticketPrice,
}: BookingSummaryProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const totalPrice = seats.length * ticketPrice;
  const serviceFee = totalPrice * 0.05; // 5% service fee
  const finalTotal = totalPrice + serviceFee;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Booking details */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-1/3">
              <div className="overflow-hidden rounded-lg border">
                <img 
                  src={movie.image} 
                  alt={movie.title} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <p className="text-sm text-muted-foreground">{movie.duration}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{cinema}</p>
                <p className="text-sm text-muted-foreground">{city}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <p>{formatDate(date)}</p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <p>{time}</p>
            </div>

            <div className="flex items-start gap-2">
              <Ticket className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Seats</p>
                <p className="text-sm">{seats.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Payment details */}
        <div className="bg-card p-6 rounded-lg border">
          <h3 className="font-semibold mb-4">Payment Details</h3>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Tickets ({seats.length} × ${ticketPrice.toFixed(2)})</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>${serviceFee.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name on Card</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded-md"
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;