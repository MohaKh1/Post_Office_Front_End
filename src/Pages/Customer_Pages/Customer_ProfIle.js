import Cookies from 'universal-cookie';
import Cnavbar from '../../Components/Cnavbar';
const Customer_profile = () => {

    const cookies = new Cookies();
    const userdata = cookies.get('data').data;
    

    return ( 
        <div>
          <Cnavbar />
<div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
  <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <div class="text-center mt-2 text-3xl font-medium">Customer Profile</div>
     <hr  class="mt-8"/>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p class="text-gray-700 text-base mb-4">Phone Number: {userdata.Phone_Number}</p>
       <p class="text-gray-700 text-base mb-4">Email:               {userdata.Email}</p>
       <p class="text-gray-700 text-base mb-4">Password: {userdata.Password}</p>
       <p class="text-gray-700 text-base mb-4">First_Name: {userdata.First_Name}</p>
       <p class="text-gray-700 text-base mb-4">Last_Name: {userdata.Last_Name}</p>
       <p class="text-gray-700 text-base mb-4">Sex: {userdata.Sex}</p>
       <p class="text-gray-700 text-base mb-4">Address: {userdata.Customer_Address}</p>
       
       

     </div>
  </div>
</div>
        </div>

     );
}
 
export default Customer_profile;