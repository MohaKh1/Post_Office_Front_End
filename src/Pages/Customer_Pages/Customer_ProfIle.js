import Cookies from 'universal-cookie';
const Customer_profile = () => {

    const cookies = new Cookies();
    const userdata = cookies.get('data').data;
    

    return ( 
        <div>
          
<div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
  <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
     <div class="text-center mt-2 text-3xl font-medium">Customer Profile</div>
     <hr  class="mt-8"/>
     <div class="px-6 text-center mt-2 font-light text-sm">
       <p>Phone Number: {userdata.Phone_Number}</p>
       <p>Email:               {userdata.Email}</p>
       <p>Password: {userdata.Password}</p>
       <p>First_Name: {userdata.First_Name}</p>
       <p>Last_Name: {userdata.Last_Name}</p>
       <p>Sex: {userdata.Sex}</p>
       <p>Address: {userdata.Customer_Address}</p>
       
       

     </div>
  </div>
</div>
        </div>

     );
}
 
export default Customer_profile;