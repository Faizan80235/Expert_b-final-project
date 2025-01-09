import React from 'react';
import "./App.css";
import Routing from "./Personal/Routes/Routing"; // Import your Routing component
import FullScreenPopup from "./FullScreenPopup"; // Assuming you created this component

function App() {
  return (
    <div>
      <FullScreenPopup /> {/* Show the full-screen popup */}
      <Routing /> {/* Render your Routing component */}
    </div>
  );
}

export default App;
