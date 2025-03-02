import React, { useState } from "react";
import "./style.css";

export default function StarRating() {
  const [selectedStarCount, setSelectedStarCount] = useState(0);
  const [selectedHoverCount, setSelectedHoverCount] = useState(0);
  return (
    <div className="star-rating">
      Star rating
      <div className="star">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => setSelectedStarCount(index + 1)}
            className={`${index + 1 <= selectedStarCount ? "selected" : ""} ${
              index + 1 <= selectedHoverCount ? "selected" : ""
            }`}
            onMouseOver={() => setSelectedHoverCount(index + 1)}
            onMouseOut={() => setSelectedHoverCount(0)}
          >
            &#9733;
          </span>
          // consider there are 5 spans with index 0,1,2,3,4
          // now we click on any star , then seletedStarCount = index + 1 , means if we click on 2nd star
          // then selected star count = 2
          // now check 5 spans with their index
          // ist span with index = 0  check --> 0+1 <= 2(selectedstarcount)--> true --> selected
          // 2nd span with index = 1  check --> 1+1 <= 2(selectedstarcount)--> true --> selected
        ))}
      </div>
      Rating Count : {selectedStarCount}
    </div>
  );
}
