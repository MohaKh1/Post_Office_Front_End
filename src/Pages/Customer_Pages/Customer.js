import React from "react";
import Cookies from 'universal-cookie'
import Cnavbar from "../../Components/Cnavbar";
const Customer = (props) => {
    const cookies = new Cookies();
    const userdata = cookies.get('data').data

    return ( 
        <div className="Employee">
       <Cnavbar/>
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-black mb-12">
                </span>
                <div class="pr-8">
                <h1 class="font-bebas-neue uppercase text-sm sm:text-8xl font-black flex flex-col leading-none dark:text-black text-gray-800">
                    Welcome, {userdata.Username}
                </h1>
                </div>
                <p class="text-lg lg:text-base text-gray-700 dark:text-black">
                    Let us take care of all your post office needs.
                </p>
                
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://th.bing.com/th/id/OIP.hWptxA0Yq1p2h33eQrFnxwHaE8?pid=ImgDet&rs=1" class="max-w-xl md:max-w-xl m-auto"/>
            </div>
    </div>

        </div>
     );
}
 
export default Customer;