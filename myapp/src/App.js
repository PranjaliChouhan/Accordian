import React from "react";
import { useState } from "react";
const dataCollection=[
    {
        question:"How does React work?",
        answer:"React creates a virtual DOM. When state changes in a component it firstly runs a diffing algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of the difference.",
    },
    {
        question:"What is the use of refs?",
        answer:"Refs provide a way to access DOM nodes or React elements created in the render method. They should be avoided in most cases, however, they can be useful when we need direct access to the DOM element or an instance of a component.",

    },
    {
         question:"What are props in React?",
         answer:"Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.",
    },
];
function App(){
    const [accordian,setActiveAccordian]=useState(-1);
    function toggleAccordian(index){
        setActiveAccordian(index);
    }
return(
    <>
    <div className="container">
        <div>
        <span className="accordian_title"> Interview questions</span>
        <h1>lets answer</h1>
        </div>
        <div className="accordian_faq">
            {dataCollection.map((item,index)=>(
                <div key={index} onClick={()=>toggleAccordian(index)}>
                    <div className="accordian_heading">
                        <h3 className={accordian === index ? "active":""}>{item.question}</h3>
                        </div>
                        <div>
                            {accordian === index ?(
                                <>
                                {""}
                                <span className="verticle">-</span>
                                </>
                            ):(
                                <>
                                {""}
                                <span className="verticle">+</span>
                                </>
                            )}
                            
                        </div>
                        <div>
                            <p className={accordian === index ? "active":"inactive"}>{item.answer}</p>
                        </div>
                        </div>
            )

            )

            }

        </div>
    </div>
    </>
);
}
export default App;


  