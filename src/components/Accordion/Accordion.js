import React  from "react";
import "./style.css";

export default function Accordion({title,info,id,isOpen,onToggle}) {
 

  const toggle = (id) => {  
    onToggle(id);
  };
  return (
    <div className="accordion" key={id}>
      <div className="accordion-header" onClick={() => toggle(id)}>
        <h3 className="accordion-title">{title}</h3>
        <button className="accordion-icon">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="accordion-content">{info}</p>}
    </div>
  );
}
