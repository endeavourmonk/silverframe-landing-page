import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import CinemaSelector from "../components/booking/CinemaSelector";
import SeatSelector from "../components/booking/SeatSelector";
import BookingSummary from "../components/booking/BookingSummary";
import { ALL_MOVIES } from "../data";

// Booking steps
enum BookingStep {
  SelectCinema = 0,
  SelectSeats = 1,
  Checkout = 2,
}

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<(typeof ALL_MOVIES)[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState<BookingStep>(
    BookingStep.SelectCinema
  );

  // Booking state
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCinema, setSelectedCinema] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [ticketPrice] = useState<number>(12.99);

  useEffect(() => {
    // Simulate API fetch
    const fetchMovie = () => {
      setLoading(true);
      const foundMovie = ALL_MOVIES.find((m) => m.id === Number(id));

      if (foundMovie) {
        setMovie(foundMovie);
        // Set default date to today
        const today = new Date();
        setSelectedDate(today.toISOString().split("T")[0]);
      }

      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  const handleContinue = () => {
    if (currentStep < BookingStep.Checkout) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process payment and complete booking
      alert("Booking successful! Your tickets have been confirmed.");
      navigate(`/movies/${id}`);
    }
  };

  const handleBack = () => {
    if (currentStep > BookingStep.SelectCinema) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canContinue = () => {
    switch (currentStep) {
      case BookingStep.SelectCinema:
        return selectedCity && selectedCinema && selectedDate && selectedTime;
      case BookingStep.SelectSeats:
        return selectedSeats.length > 0;
      case BookingStep.Checkout:
        return true;
      default:
        return false;
    }
  };

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p className="text-lg">Loading booking page...</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, we couldn't find the movie you're looking for.
        </p>
        <Button asChild>
          <Link to="/movies">Back to Movies</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Link
        to={`/movies/${id}`}
        className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Movie Details
      </Link>

      <div className="mb-8 flex flex-col md:flex-row gap-6 items-start">
        {/* Movie poster */}
        <div className="w-full md:w-1/4">
          <div className="overflow-hidden rounded-lg border">
            <img
              src={movie.image}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Movie info */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{movie.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium px-2 py-1 bg-secondary rounded-full">
                {movie.genre}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${
                currentStep >= BookingStep.SelectCinema
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              1
            </div>
            <div
              className={`h-1 w-16 ${
                currentStep > BookingStep.SelectCinema
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            ></div>
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${
                currentStep >= BookingStep.SelectSeats
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              2
            </div>
            <div
              className={`h-1 w-16 ${
                currentStep > BookingStep.SelectSeats
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            ></div>
            <div
              className={`rounded-full h-10 w-10 flex items-center justify-center ${
                currentStep >= BookingStep.Checkout
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              3
            </div>
          </div>
          <div className="text-sm font-medium">
            {currentStep === BookingStep.SelectCinema && "Select Cinema"}
            {currentStep === BookingStep.SelectSeats && "Select Seats"}
            {currentStep === BookingStep.Checkout && "Checkout"}
          </div>
        </div>
      </div>

      {/* Booking steps */}
      <div className="mb-8">
        {currentStep === BookingStep.SelectCinema && (
          <CinemaSelector
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedCinema={selectedCinema}
            setSelectedCinema={setSelectedCinema}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        )}

        {currentStep === BookingStep.SelectSeats && (
          <SeatSelector
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            ticketPrice={ticketPrice}
          />
        )}

        {currentStep === BookingStep.Checkout && (
          <BookingSummary
            movie={{
              title: movie.title,
              image: movie.image,
              duration: movie.duration || "",
            }}
            city={selectedCity}
            cinema={selectedCinema}
            date={selectedDate}
            time={selectedTime}
            seats={selectedSeats}
            ticketPrice={ticketPrice}
          />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
        {currentStep > BookingStep.SelectCinema ? (
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
        ) : (
          <div></div>
        )}
        <Button onClick={handleContinue} disabled={!canContinue()}>
          {currentStep < BookingStep.Checkout ? "Continue" : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};

export default BookingPage;
