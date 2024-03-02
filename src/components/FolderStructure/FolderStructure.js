import React, { useState } from "react";

export default function FolderStructure({ data, isChild = false }) {
  const [expand, setExpand] = useState(true);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div onClick={() => setExpand(!expand)}>
        {data.children && data.children.length > 0 ? (
          <span>📁</span>
        ) : (
          <span>📄</span>
        )}
        {data.name}
      </div>
      {data.children &&
        data.children.length > 0 &&
        data.children.map((row) => {
          return (
            <div style={{ display: expand ? "block" : "none" }}>
              <FolderStructure data={row} />
            </div>
          );
        })}
    </div>
  );
}
