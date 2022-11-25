import React from "react";
import Cnavbar from "../../Components/Cnavbar";
const Customer = (props) => {
    
    return ( 
        <div className="Employee">
       <Cnavbar/>
       <h1 className="box font-serif text-center font-normal">Hello Customer <br/>{props.data}</h1>
        </div>
     );
}
 
export default Customer;