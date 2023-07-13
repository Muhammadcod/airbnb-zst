import Navbar from "./components/navbar";
import Filters from "./components/filters";
import Listings from "./components/listings";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Filters />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
