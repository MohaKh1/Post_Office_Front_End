const Customer_profile = (props) => {
    return ( 
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-400">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <p>{props.data}</p>
            </div>
        </div>

     );
}
 
export default Customer_profile;