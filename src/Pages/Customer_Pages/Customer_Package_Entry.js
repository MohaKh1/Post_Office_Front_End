import React from "react";
import { useState } from "react";
const Customer_package_entry = (props) => {
    const [packageData,SetPackageData] = useState("");


    const handleSubmit = async e =>{
        e.preventDefault();
        

    };
    return ( 
    <div>
        <form className=" p-5 border-8 border-black flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <input type="text" className="font-medium p-2 md:p-4" name="RecieverUsername"placeholder="Reciever Username"></input>
            <div >
                <p className="font-medium p-2 md:p-4 w-full">Special Care</p>
                <input type="radio" id="yes" name="SpecialCare" value="1"/>
                <label className="font-medium p-2 md:p-4 w-full" for="yes">yes</label>
                <input type="radio" id="no" name="SpecialCare" value="0"/>
                <label className="font-medium p-2 md:p-4 w-full" for="no">no</label>
            </div>
            <div>
                <p className="font-medium p-2 md:p-4 w-full">Service Type</p>
                <input type="radio" id="fragile" name="ServiceType" value="1"/>
                <label className="font-medium p-2 md:p-4 w-full" for="fragile">Fragile</label>
                <input type="radio" id="normal" name="ServiceType" value="0"/>
                <label className="font-medium p-2 md:p-4 w-full" for="normal">Normal</label>
            </div>
            <div>
                <p className="font-medium p-2 md:p-4 w-full">Mail Type</p>
                <input type="radio" id="envelope" name="MailType" value="1"/>
                <label className="font-medium p-2 md:p-4 w-full" for="envelope">Envelope</label>
                <input type="radio" id="package" name="MailType" value="0"/>
                <label className="font-medium p-2 md:p-4 w-full" for="package">Package</label>
            </div>

            <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Submit</button>
        </form>
    </div> );
}
 
export default Customer_package_entry;