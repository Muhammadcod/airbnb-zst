import Navbar from "./components/navbar";
import Filters from "./components/filters";
import Listings from "./components/listings";
import Footer from "./components/footer";
import ModalButton from "./components/modal-button";
import { useState } from "react";
import Map from "./components/map";

function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <Filters />
      {showMap ? <Map /> : <Listings />}
      <Footer />
      <ModalButton onClick={() => setShowMap(!showMap)}>
        {showMap ? "Show List" : "Show Map"}
      </ModalButton>
    </div>
  );
}

export default App;
