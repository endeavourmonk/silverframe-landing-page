// Cinema and booking related data

// List of cities
export const CITIES = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// Cinemas by city
export const CINEMAS: Record<string, string[]> = {
  "New York": ["AMC Empire 25", "Regal E-Walk", "Angelika Film Center", "IFC Center"],
  "Los Angeles": ["TCL Chinese Theatre", "ArcLight Hollywood", "The Landmark", "Alamo Drafthouse"],
  "Chicago": ["AMC River East 21", "Music Box Theatre", "Landmark Century Centre", "ShowPlace ICON"],
  "Houston": ["Edwards Greenway Grand Palace", "AMC Studio 30", "Regal Edwards Marq'E"],
  "Phoenix": ["AMC Westgate 20", "Harkins Theatres Scottsdale", "Alamo Drafthouse Chandler"],
};

// Available showtimes
export const SHOWTIMES = ["10:00 AM", "12:30 PM", "3:00 PM", "5:30 PM", "8:00 PM", "10:30 PM"];

// Generate dates for the next 7 days
export const getDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      value: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    });
  }
  
  return dates;
};

// Generate a theater layout
export const generateTheaterLayout = () => {
  const rows = "ABCDEFGHIJ".split("");
  const seatsPerRow = 12;
  const layout: { id: string; status: "available" | "occupied" | "selected" }[][] = [];

  rows.forEach((row) => {
    const rowSeats = [];
    for (let i = 1; i <= seatsPerRow; i++) {
      // Randomly mark some seats as occupied
      const status: "available" | "occupied" | "selected" = Math.random() < 0.2 ? "occupied" : "available";
      rowSeats.push({ id: `${row}${i}`, status });
    }
    layout.push(rowSeats);
  });

  return layout;
};