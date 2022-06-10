import "./App.css";
import { useEffect, useState } from "react";
import Table from "./Table";

// function myFunction() {
//   let input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
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
