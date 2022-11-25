import Customer_profile from "../Pages/Customer_Pages/Customer_ProfIle";
import { useState } from "react";
import Customer from "../Pages/Customer_Pages/Customer";
const Customer_data = (props) => {
    const [data, setData] = useState({"data": "NONE"})
    setData("{props.data}");
    return ( 
    <div>
    <Customer_profile thatdata={data}/> 
    <Customer thatdata={data}/>    
    </div> );
}
 
export default Customer_data;