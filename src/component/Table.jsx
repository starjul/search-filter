import React, { useState, useEffect } from "react";

const Table = ({ item, query }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (query) {
      const filterCategory = item.categories.filter((res) =>
        res.toLowerCase().includes(query.toLowerCase())
      );
      setCategory(filterCategory);
    } else {
      setCategory(item.categories);
    }
  }, [query]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>categories</th>
          </tr>
          {category.map((data, i) => (
            <tr key={i}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
