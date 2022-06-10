import React from "react";

const Table = ({ item }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>categories</th>
          </tr>
        </thead>
        <tbody>
          {[item]?.map((item) => (
            <tr key={item.id}>
              <td>{item.categories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
