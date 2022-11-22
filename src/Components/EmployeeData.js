import { useState } from "react";

const Employee_data = () => {
    const [data, setData] = useState({"data": "NONE"})
    setData("{props.data}");
    return ( <div>
    
    </div> );
}
 
export default Employee_data;