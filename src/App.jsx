import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Information from "./components/Information";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full overflow-y-scroll overflow-x-hidden md:snap-y md:snap-mandatory scroll-smooth">
        <Introduction />
        <Information />
      </div>
    </>
  );
}

export default App;
