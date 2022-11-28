import { useState } from "react";
import Cnavbar from "../../Components/Cnavbar";
import axios from "axios";
import Cookies from 'universal-cookie';

const Customer_package_status = () => {
    const cookies = new Cookies();
    const userdata = cookies.get('data').data;

    const [result, setResults] = useState({});
    const [result_array, setResults_array] = useState({});

    const userID = userdata.CustomerID
    const packagereqdata = {"CustomerID": userID};
    const HandleSubmit = async e =>{
        e.preventDefault();

         await axios.request({
            data:packagereqdata,
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            url:"http://127.0.0.1:5000/get_package",
                
            })
            .then((response) => {
            var newArrayDataOfOjbect = Object.values(response.data.data)
            setResults(newArrayDataOfOjbect)
            console.log(result_array)
            })
        
        }
 

    return (<> 
    <div>
        <Cnavbar />
        <div class="text-center p-8">
            <h2 class="font-medium leading-tight text-4xl mt-0 mb-2">{userdata.Username}'s Packages</h2>
        </div>
        <div class="flex space-x-2 justify-center">
            <button onClick={HandleSubmit} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Load Packages</button>
        </div>
     

        <div class="p-8">
            <div class="table-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Tracking Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Sender
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Receiver
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Receiver Username
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Processing Employee
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Delivery Employee
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Post Office
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Destination
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Total Cost
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Delivered
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Expected Delivery Date
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(result)
                        ? result.map(element => {
                             return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {element.TrackingNumber}
                                </th>
                                <td class="py-4 px-6">
                                    {element.Sender_First_Name}, {element.Sender_Last_Name}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Reciever_First_Name}, {element.Reciever_Last_Name}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Reciever_Username}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Processor_First_Name}, {element.Processor_Last_Name}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Delivery_First_Name}, {element.Delivery_Last_Name}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Mail_Start_Location}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Destination_Address}
                                </td>
                                <td class="py-4 px-6">
                                    ${parseFloat(element.Total_Cost).toFixed(2)}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Package_Status === 0 ? 'No' : 'Yes'}
                                </td>
                                <td class="py-4 px-6">
                                    {element.Delivery_Date}
                                </td>
                                <td class="py-4 px-6">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>})
                            : console.log("not array")}
                        
                    </tbody>
                </table>
            </div>


        </div>

    </div>
    </>
    );
}
 
export default Customer_package_status;