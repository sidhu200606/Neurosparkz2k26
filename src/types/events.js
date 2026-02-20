// EventData object structure for plain React JS

// Example of how each event should look:
const exampleEvent = {
  title: "Event Title",              // string
  description: "Short description",  // string
  icon: null,                        // import the actual icon component from lucide-react
  details: "Detailed info about event", // string
  venue: "Venue name",               // string
  time: "10:00 AM - 11:00 AM",       // string
  date: "Day 1",                     // string
  coordinators: [                     // array of coordinators
    { name: "Coordinator 1", phone: "+91 1234567890" },
    { name: "Coordinator 2", phone: "+91 9876543210" },
  ],
  rules: ["Rule 1", "Rule 2", "Rule 3"], // array of strings
};