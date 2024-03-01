import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function Fetch() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos") // using useFetch as custom Hook
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}
