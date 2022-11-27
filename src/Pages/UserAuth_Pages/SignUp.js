import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

const SignUp = () => {
    const [userdata, setUserdata] = useState({"data": "NONE"})

    const signupSubmit = async e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        const signupData = {"data":formData};

    }

    return (

        <div>
            <div className="bg-gray-400 h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
              <div className="text-center  font-medium p-2 md:p-4 text-black">
                Sign Up
              </div>


            <form onSubmit={signupSubmit} >
            <div className="flex flex-col items-start">       
                <input type="text" name="First_Name" className="font-medium p-2 md:p-4 block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="First Name"></input>         
                <input type="text" name="Last_Name" className="font-medium p-2 md:p-4 block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Last Name"></input>         
                <input type="text" name="Email" className="font-medium p-2 md:p-4 w-full block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email"></input>     
                <input type="text" name="Phonenumber" className="font-medium p-2 md:p-4 w-full block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Phonenumber"></input>    
                <div className="block w-full mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <p className="font-medium p-2 md:p-4 w-full">Sex</p>
                    <input type="radio" id="Male" name="Sex" value="M"/>
                    <label className="font-medium p-2 md:p-4 w-full" for="Male">Male</label>
                    <input type="radio" id="Female" name="Sex" value="F"/>
                    <label className="font-medium p-2 md:p-4 w-full" for="Female">Female</label>
                    <input type="radio" id="Other" name="Sex" value="F"/>
                    <label className="font-medium p-2 md:p-4 w-full" for="Other">Other</label>
                </div>
                <br/>
            
                <div className="block mt-1 w-75 self-center bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <p className="font-medium p-2 md:p-4 w-full">Address</p>
                <input type="text" name="City" className="font-medium p-2 md:p-4 block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="City"></input>    
                <input type="text" name="ZipCode" className="font-medium p-2 md:p-4 block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="ZipCode"></input>    
                <input type="text" name="State" className="font-medium p-2 md:p-4 block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="State"></input>    
                <input type="text" name="StreetAddress" className="font-medium p-2 md:p-4 block mt-1 bg-gray-200 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="StreetAddress"></input>    
                </div>
                <br/>
              <button type="submit" className="inline-flex self-center items-center 
                 px-4 py-2 ml-4 text-xs font-semibold tracking-widest
                 text-white uppercase transition duration-150 ease-in-out
                 bg-gray-900 border border-transparent rounded-md
                 active:bg-gray-900 false">
                    Register
                </button>
            </div>
            </form>
            <Link to="/login" className="inline-flex self-center items-center text-sm text-gray-600 underline hover:text-gray-900">
                Already registered?
            </Link>

            </div>
            </div>
        </div>
    )
}
export default SignUp;