import React from 'react'
import './FAQ.css'
import Accordion from '../../../components/accordion/Accordion'

export default function FAQ() {
    return (
        <div className="faqContainer">
        <h1>Most Common Frequently Asked Questions</h1>
           <Accordion title="Where is Furnique furniture made?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Will you release any new products?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Are you hiring?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Do you have any physical stores?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="How do I assemble Tylko furniture?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Can the furniture be dismantled after it has been assembled?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Which parts of my furniture can I customise?">
                <span>Answer</span>
           </Accordion>
           <Accordion title="Which parts of my furniture can I customise?">
                <span>Answer</span>
           </Accordion>
        </div>
    )
}
