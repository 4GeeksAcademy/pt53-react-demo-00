import React from "react";

// This is a test

const TableHead = ({ headers = [] }) => {
  return (
    <thead>
      <tr>
        {headers.map((item, idx) => (
          <th scope="col" key={idx}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableRow = ({ item = {} }) => {
  return (
    <tr>
      {Object.values(item).map((val, idx) => (
        <td key={idx}>{val}</td>
      ))}
    </tr>
  );
};

export const Table = ({ items = [] }) => {
  return (
    <table className="table table-striped">
      <TableHead headers={Object.keys(items[0])} />
      <tbody>
        {items.map((item, idx) => (
          <TableRow item={item} key={idx} />
        ))}
      </tbody>
    </table>
  );
};
