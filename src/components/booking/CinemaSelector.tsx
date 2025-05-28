import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { CITIES, CINEMAS, SHOWTIMES, getDates } from "../../data";

interface CinemaSelectorProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedCinema: string;
  setSelectedCinema: (cinema: string) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const CinemaSelector = ({
  selectedCity,
  setSelectedCity,
  selectedCinema,
  setSelectedCinema,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}: CinemaSelectorProps) => {
  const dates = getDates();

  // Reset cinema when city changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedCinema("");
  };

  return (
    <div className="space-y-8">
      {/* City Selection */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <MapPin className="mr-2 h-5 w-5" />
          Select City
        </h2>
        <div className="flex flex-wrap gap-2">
          {CITIES.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              onClick={() => handleCityChange(city)}
            >
              {city}
            </Button>
          ))}
        </div>
      </div>

      {/* Cinema Selection */}
      {selectedCity && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Select Cinema</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CINEMAS[selectedCity as keyof typeof CINEMAS].map((cinema) => (
              <div
                key={cinema}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedCinema === cinema
                    ? "border-primary bg-primary/5"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setSelectedCinema(cinema)}
              >
                <h3 className="font-medium">{cinema}</h3>
                <p className="text-sm text-muted-foreground">{selectedCity}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Date Selection */}
      {selectedCinema && (
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Select Date
          </h2>
          <div className="flex flex-wrap gap-2">
            {dates.map((date) => (
              <Button
                key={date.value}
                variant={selectedDate === date.value ? "default" : "outline"}
                onClick={() => setSelectedDate(date.value)}
              >
                {date.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Time Selection */}
      {selectedDate && (
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Select Time
          </h2>
          <div className="flex flex-wrap gap-2">
            {SHOWTIMES.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CinemaSelector;
