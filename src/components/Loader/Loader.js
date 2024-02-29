import React, { useEffect, useState } from "react";
import './styles.css'

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });
  return <div className="loader-container">{isLoading ? <div className="loader"></div> : <h2>Hey</h2>}</div>;
}
