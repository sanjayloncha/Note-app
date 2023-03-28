import React, { useEffect } from "react";

export default function View() {
  const getData = async () => {
    let url = `https://note-app-data.onrender.com/users`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0].note) ;
  };
  useEffect(() => {}, []);
  getData();
  return (
    <div>
      <h1>View component</h1>
    </div>
  );
}
