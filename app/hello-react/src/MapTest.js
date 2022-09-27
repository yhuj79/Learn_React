import React from "react";

function MapTest() {
  const company = [
    {
      name: "John",
      salary: 1000,
      age: 26,
      item: ["a", "c", "d", "h", "k"],
    },
    {
      name: "Alice",
      salary: 1600,
      age: 31,
      item: ["a", "b", "c", "f", "g", "h", "k", "l"],
    },
    {
      name: "James",
      salary: 1300,
      age: 29,
      item: ["c", "d", "e", "f", "i", "j", "k", "p"],
    },
  ];
  console.log(JSON.stringify(company, null, 5));
  return (
    <div>
      {company.map((m, index) => {
        return (
          <div key={index}>
            <p>{m.name}</p>
            <p>{m.item}</p>
          </div>
        );
      })}
      <textarea
        style={{ fontSize: "18px" }}
        defaultValue={JSON.stringify(company, null, 5)}
        rows="50"
        cols="30"
      />
    </div>
  );
}

export default MapTest;
