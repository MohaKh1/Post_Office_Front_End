import React from "react";
import Cookies from 'universal-cookie'
import Cnavbar from "../../Components/Cnavbar";
const Customer = (props) => {
    const cookies = new Cookies();
    console.log(cookies.get('data'))
    console.log(cookies.get('data'))
    console.log(cookies.get('data'))
    console.log(cookies.get('data'))
    console.log(cookies.get('data'))

    return ( 
        <div className="Employee">
       <Cnavbar/>
       <h1 className="box font-serif text-center font-normal">Hello Customer <br/></h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={.75} stroke="currentColor" className="w-25 h-25">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>

        </div>
     );
}
 
export default Customer;