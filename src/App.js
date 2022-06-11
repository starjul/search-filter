import "./App.css";
import { useEffect, useState } from "react";
import Table from "./component/Table";

function App() {
  const [item, setItem] = useState({
    count: 0,
    categories: []
  });
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch("https://api.publicapis.org/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          setItem(result);
        },
        (err) => {
          console.log("err", err);
        }
      );
  }, []);

  const handleTermChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h2>Search</h2>

      <input
        id="myInput"
        placeholder="Search for ..."
        type="text"
        onChange={handleTermChange}
        className="input"
        value={query}
      />

      <Table item={item} query={query} />
    </div>
  );
}

export default App;
