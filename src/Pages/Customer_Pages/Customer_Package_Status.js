import { useState } from "react";
import Cnavbar from "../../Components/Cnavbar";
import axios from "axios";
import { useEffect } from "react";
const Customer_package_status = (props) => {

    const [result, setResults] = useState([]);
    const userID = 31
    const packagereqdata = {"CustomerID": userID};
    useEffect(() => {
        //Attempt to retreive data
        try {
          const res = transformData();
    
          if (res) {
            // Add any data transformation
            setResults(transformData(res))
          }
          else {
            throw ("SOMETHING TWORNG")
          }
        }
        catch (error) {
          //Handle error
        }
      }, [])

      const transformData = async () => {
        const res = await axios.request({
            data:packagereqdata,
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
            url:"http://127.0.0.1:5000/get_package",
    
          })
        const txt = JSON.stringify(res.data.data)
        const results = JSON.parse(txt)
    
    
    
        return results
      }

    if (!result) {
    // Return something until the data is loaded (usually a loader)
    return <p>hi</p>
    }
    else {
        console.log(result)
    }


    return (<> 
    <div>
        <Cnavbar />
        <div class="text-center p-8">
            <h2 class="font-medium leading-tight text-4xl mt-0 mb-2">"CUSTOMERNAME"'s Packages</h2>
            <p>fg;</p>
        </div>
        <div class="p-8">
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="py-4 px-6">
                                Sliver
                            </td>
                            <td class="py-4 px-6">
                                Laptop
                            </td>
                            <td class="py-4 px-6">
                                $2999
                            </td>
                            <td class="py-4 px-6">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>


        </div>

    </div>
    </>
    );
}
 
export default Customer_package_status;