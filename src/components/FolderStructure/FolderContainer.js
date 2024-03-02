import React from "react";
import data from "./data";
import FolderStructure from "./FolderStructure";

export default function FolderContainer() {
  return (
    <div>
      <h2>Folder Structure</h2>
      {data.map((row,index) => {
        console.log("row",row)
        return <FolderStructure data={row} key={index}/>
      }
        
      )}
    </div>
  );
}
