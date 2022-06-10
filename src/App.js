import "./App.css";
import { useEffect, useState } from "react";
import Table from "./Table";

function App() {
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState('');
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

  const search = (e) => {
    return e.filter((item) = item.categories.toLowerCase().includes(query));
  }

  return (
    <div className="App">
      <h2>Search</h2>

      <input
        id="myInput"
        placeholder="Search for ..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />

      <Table item={item}/>
    </div>
  );
}

export default App;
