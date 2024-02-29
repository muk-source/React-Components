import React, { useState } from 'react'
import questions from './data'
import Accordion from './Accordion'

export default function AccordionContainer() {
    const [openAccordionId, setOpenAccordionId] = useState(null);

    const toggleAccordion = (id) => {
      setOpenAccordionId((prevId) => (prevId === id ? null : id));
    };
  return (
    <div style={{border: '5px solid white', width:'75%', margin: '50px auto', backgroundColor:'wheat' }}>
    {questions.map((question) => (
      <Accordion {...question}  isOpen={openAccordionId === question.id} onToggle={toggleAccordion}/>
    ))}
  </div>
  )
}
