import React from "react";
import { useState, useRef } from "react";
import Cnavbar from "../../Components/Cnavbar";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const Customer_package_entry = (props) => {
    const [theerror,settheError]=useState();

    const [packageData,SetPackageData] = useState({"data": "None"});
    const [recievername, setRecieverName] = useState("");
    const [serviceType, setServiceType] = useState(0);
    const [Mailtype, setMailType] = useState(0);
    const [SpecialCare, setSpecialCare] = useState(0)
    const [postloc, setPostLoc] = useState(1336)
    const navigate = useNavigate();


    

    const HandleSubmit = async e =>{
        e.preventDefault();
        const packageinput = {"data":{
            "mail": {
                "SenderID" : 31, //change later
                "RecieverUsername": recievername,
                "Special_Care": SpecialCare,
                "Service_Type": serviceType,
                "Mail_Type": Mailtype,
                "Mail_Start_Location": postloc}
        }}
        
        const response = await axios.request({
            data: packageinput,
            headers: {
            'Content-Type': 'application/json',
            },
            method: 'POST',
            url:"http://127.0.0.1:5000/create_package",

        })
        .then((response) => {
            SetPackageData(response.data)
            
            console.log(packageData.status_code === 200)
            console.log(packageData)

            if (packageData.status_code === 200){
                navigate("/customer_package_status")
            }
            else if (packageData.data === 'None'){
                settheError("Please Click again")

            }
            else{
                settheError("Package not added")
          }

        }).catch((error) => {
            if (error.response) {
            alert(error.response)
            }
        })

        

    };
    return (
    <div>
        <Cnavbar/>
        <div class="flex justify-center p-3 ">
            <div class="flex flex-col justify-center block p-6 rounded-lg shadow-2xl bg-white">
                <div class="text-center p-2">
                    <h1 class="text-5xl font-bold mt-0 mb-6">Create a package</h1>
                    </div>
                <form className=" p-5 flex flex-col justify-center items-center" onSubmit={HandleSubmit}>
                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">
                            <input
                            type="text"
                            class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleText0"
                            name="RecieverUsername" 
                            placeholder="Reciever Username"
                            onChange={e => setRecieverName(e.target.value)}
                            />
                        </div>
                        </div>
                    <div>
                        <p className="font-medium text-center p-2 md:p-4 w-full">Special Care</p>
                        <div>
                        <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                        onChange= {e => setSpecialCare(e.target.value)}>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                        </div>
                    </div>
                    <div >
                        <p className="font-medium text-center p-2 md:p-4 w-full">Service Type</p>
                        <div>
                        <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange= {e => setServiceType(e.target.value)}>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1">Express</option>
                            <option value="0">Normal</option>
                        </select>
                        </div>
                    </div>
                    <div >
                        <p className="font-medium text-center p-2 md:p-4 w-full">Mail Type</p>
                        <div>
                        <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange= {e => setMailType(e.target.value)}>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1">Package</option>
                            <option value="0">Envelope</option>
                        </select>
                        </div>
                    </div>
                    <div >
                        <p className="font-medium text-center p-2 md:p-4 w-full">Post Office Start Location</p>
                        <div>
                        <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"  onChange= {e => setPostLoc(e.target.value)}>

                            <option value="none" selected disabled hidden>Select post office to send from</option>
                            <option value="1336">17 Grove Ave, East Providence, RI</option>
                            <option value="1337">820 Elmwood Ave, Providence, RI</option>
                            <option value="1338">351 Smith St, East Providence, RI</option>
                            <option value="1339">100 Hartford Ave, East Providence, </option>
                        </select>
                        </div>
                    </div>
                    
                    <div class="p-2 m-2">
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Create Package</button>
                    </div>           
                </form>
                {theerror?<label class="p-2">
              <p class="text-center text-xl font-semibold text-red-600">{theerror}</p></label>:null}
          
            </div>
        </div>
    </div> );
}
 
export default Customer_package_entry;