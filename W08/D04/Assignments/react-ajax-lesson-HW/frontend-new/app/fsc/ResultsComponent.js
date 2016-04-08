import React from 'react';

function ResultsComponent(props){
  console.log("props in container:" + props.contacts);
  return(
    <div>
      <h3 className="title-box">ResultsComponent</h3>
      <ul>
        {
          props.contacts.map((contact)=>{
            return <li>Name: {contact.name}: Email: {contact.email}</li>
          })
        }

​
      </ul>
    </div>
  )
}
export default ResultsComponent;
