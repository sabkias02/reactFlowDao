import "./App.css";
import SearchBar from "./components/SearchBar";
import bookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="enter a book name ..." data={bookData} />
    </div>
  );
}

export default App;
