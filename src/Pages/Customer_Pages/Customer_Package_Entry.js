import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect, useRef} from "react";


const Customer_package_entry = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [RecieverUsername, setReceiverUsername] = useState('');
    const [Special_Care, setSpecialCare] = useState('');
    const [Service_Type, setServiceType] = useState('');
    const [Mail_Type, setMailType] = useState(false);
    const [Mail_Start_Location, setMailStartLocation] = useState(false);




    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        const Customer_Package_Entry = {"data":formData};
        console.log(Customer_Package_Entry)

        try {
            const response = await axios.request({
                data:Customer_Package_Entry,
                headers: {
                'Content-Type': 'application/json',
                },
                method: 'POST',
                url:"http://127.0.0.1:5000/Customer_Package_Entry",

            })
            .then((response) => {
                setUserdata(response.data)
                console.log(response)
                console.log(userdata)

            }).catch((error) => {
                if (error.response) {
                alert(error.response)
                }
            })

        } 
        
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        add redirect
                    </p>
                </section>
            ) : (
                <section>
            
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-400">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <div>
                        <h3 className="text-center  font-medium p-2 md:p-4 text-black">
                            Customer Package Entry
                        </h3>
                    </div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="ReceiverUsername" className="block text-sm font-medium text-gray-700 undefined">
                            Receiver Username: 
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="ReceiverUsername"
                                name='ReceiverUsername'
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setReceiverUsername(e.target.value)}
                                value={RecieverUsername}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="Special_Care" className="block text-sm font-medium text-gray-700 undefined">
                            Special Care: 
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                            
                                type="text"
                                id="Special_Care"
                                name="Special_Care"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setSpecialCare(e.target.value)}
                                value={Special_Care}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="Service_Type" className="block text-sm font-medium text-gray-700 undefined">
                            Service Type
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="Service_Type"
                                name="Service_Type"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setServiceType(e.target.value)}
                                value={Service_Type}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="Mail_Type" className="block text-sm font-medium text-gray-700 undefined">
                            Mail Type
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="Mail_Type"
                                name="Mail_Type"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setMailType(e.target.value)}
                                value={userPN}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label htmlFor="Mail_Start_Location" className="block text-sm font-medium text-gray-700 undefined">
                            Mail Start Location
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                id="Mail_Start_Location"
                                name="Mail_Start_Location"
                                autoComplete = "off"
                                ref={userRef}
                                onChange={(e) => setMailStartLocation(e.target.value)}
                                value={Mail_Start_Location}
                                required
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        
                            Submit
                        </button>
                    </div>

                </form>
                </div>
                </div>
                </section>
            )}
        </>
    )
}

export default Customer_package_entry;